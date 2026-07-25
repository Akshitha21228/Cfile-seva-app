import { SocialLogin } from '@capgo/capacitor-social-login';

interface GsiCredentialResponse {
  credential: string;
}

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: GsiCredentialResponse) => void;
          }) => void;
          renderButton: (parent: HTMLElement, options: Record<string, unknown>) => void;
        };
      };
    };
  }
}

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const GSI_SCRIPT_SRC = 'https://accounts.google.com/gsi/client';

let scriptLoadPromise: Promise<void> | null = null;

function loadGsiScript(): Promise<void> {
  if (window.google?.accounts?.id) return Promise.resolve();
  if (scriptLoadPromise) return scriptLoadPromise;

  scriptLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${GSI_SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Failed to load Google Identity Services')));
      return;
    }
    const script = document.createElement('script');
    script.src = GSI_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Identity Services'));
    document.head.appendChild(script);
  });
  return scriptLoadPromise;
}

// Renders Google's own Sign In With Google button into `container` and resolves
// with a Google ID token (JWT) once the user completes sign-in, which the
// FastAPI backend then verifies. This is Google's officially reliable pattern
// for obtaining an ID token from a button click — the alternative (calling
// accounts.id.prompt() from a custom button to drive One Tap) is not: it
// silently never resolves when there's no active Google browser session, in
// incognito, or under third-party-cookie restrictions, which is exactly what
// happened during verification here.
export async function renderGoogleSignInButton(
  container: HTMLElement,
  options: Record<string, unknown> = {}
): Promise<string> {
  if (!CLIENT_ID) {
    throw new Error('VITE_GOOGLE_CLIENT_ID is not configured');
  }
  await loadGsiScript();

  return new Promise((resolve, reject) => {
    if (!window.google) {
      reject(new Error('Google Identity Services unavailable'));
      return;
    }

    window.google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: (response) => {
        if (response.credential) {
          resolve(response.credential);
        } else {
          reject(new Error('No credential returned from Google'));
        }
      },
    });

    window.google.accounts.id.renderButton(container, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      shape: 'pill',
      text: 'continue_with',
      logo_alignment: 'left',
      width: 320,
      ...options,
    });
  });
}

let nativeGoogleInitialized = false;

// Native Google Sign-In for the Android app (Play Services Credential Manager),
// used instead of renderGoogleSignInButton there. Google blocks its web-based
// Identity Services from working inside embedded WebViews as an anti-phishing
// policy — this is the actual supported alternative for a Capacitor app, not a
// workaround. Uses the same Web Client ID as the website, so the resulting ID
// token's audience matches what the backend already verifies; no backend
// changes needed. Requires a separate Android OAuth client (package name +
// signing SHA-1) registered in Google Cloud Console — see docs/google-signin-android.md.
export async function signInWithGoogleNative(): Promise<string> {
  if (!CLIENT_ID) {
    throw new Error('VITE_GOOGLE_CLIENT_ID is not configured');
  }

  if (!nativeGoogleInitialized) {
    await SocialLogin.initialize({
      google: { webClientId: CLIENT_ID },
    });
    nativeGoogleInitialized = true;
  }

  const res = await SocialLogin.login({
    provider: 'google',
    options: { scopes: ['email', 'profile'] },
  });

  if (res.provider !== 'google' || !('idToken' in res.result) || !res.result.idToken) {
    throw new Error('No credential returned from Google');
  }

  return res.result.idToken;
}
