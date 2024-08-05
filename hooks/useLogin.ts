import { useState } from 'react';

interface LoginHook {
    email: string;
    password: string;
    error: string | null;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setError: (error: string | null) => void;
    handleLoginSubmit: () => Promise<void>;
}

const useLogin = (): LoginHook => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleLoginSubmit = async (): Promise<void> => {
    // Write code here
  }

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    setError,
    handleLoginSubmit
  };
}

export default useLogin;