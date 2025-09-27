import { useState, useEffect } from 'react';

// Types
export interface Profile {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
}

export interface Session {
  user: User;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const signUp = async (email: string, _password: string, fullName: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: 'mock-user-id',
      email: email
    };
    
    const mockProfile: Profile = {
      id: 'mock-user-id',
      full_name: fullName,
      email: email,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    setUser(mockUser);
    setProfile(mockProfile);
    setSession({ user: mockUser });

    return { data: { user: mockUser }, error: null };
  };

  const signIn = async (email: string, _password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: 'mock-user-id',
      email: email
    };
    
    const mockProfile: Profile = {
      id: 'mock-user-id',
      full_name: 'Usuário Demo',
      email: email,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    setUser(mockUser);
    setProfile(mockProfile);
    setSession({ user: mockUser });

    return { data: { user: mockUser }, error: null };
  };

  const signOut = async () => {
    setUser(null);
    setProfile(null);
    setSession(null);
    return { error: null };
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: new Error('No user logged in') };

    const updatedProfile = { ...profile, ...updates } as Profile;
    setProfile(updatedProfile);

    return { data: updatedProfile, error: null };
  };

  return {
    user,
    profile,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
  };
};