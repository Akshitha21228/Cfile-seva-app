// Firebase Analytics was removed along with the rest of Firebase. No replacement
// analytics backend was requested, so this just preserves the dev-console logging
// the call sites already relied on, without breaking their imports.
export const logEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventName}:`, params);
  }
};
