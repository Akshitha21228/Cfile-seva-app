import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api, getToken, setToken, clearToken } from '../api';

interface User {
  uid: string;
  email: string | null;
  username?: string | null;
  displayName: string | null;
  photoURL: string | null;
  phoneNumber?: string | null;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (idToken: string) => Promise<void>;
  loginWithPassword: (identifier: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string, confirmPassword: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string, confirmNewPassword: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthResponse = { access_token: string; user: User };

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      const token = getToken();
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const me = await api.get<User>('/auth/me');
        setUser(me);
      } catch (error) {
        console.error('Session restore error:', error);
        clearToken();
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = async (idToken: string) => {
    try {
      const { access_token, user: loggedInUser } = await api.post<AuthResponse>(
        '/auth/google',
        { id_token: idToken }
      );
      setToken(access_token);
      setUser(loggedInUser);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const loginWithPassword = async (identifier: string, password: string) => {
    try {
      const { access_token, user: loggedInUser } = await api.post<AuthResponse>(
        '/auth/login',
        { identifier, password }
      );
      setToken(access_token);
      setUser(loggedInUser);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signup = async (username: string, email: string, password: string, confirmPassword: string) => {
    try {
      const { access_token, user: newUser } = await api.post<AuthResponse>(
        '/auth/signup',
        { username, email, password, confirmPassword }
      );
      setToken(access_token);
      setUser(newUser);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const forgotPassword = async (email: string) => {
    await api.post('/auth/forgot-password', { email });
  };

  const resetPassword = async (token: string, newPassword: string, confirmNewPassword: string) => {
    await api.post('/auth/reset-password', { token, newPassword, confirmNewPassword });
  };

  const logout = async () => {
    clearToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, loginWithPassword, signup, forgotPassword, resetPassword, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
