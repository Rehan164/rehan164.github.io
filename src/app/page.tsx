'use client';

import { useState } from 'react';
import LoginPage from './components/LoginPage';
import CardPage from './components/CardPage';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <CardPage />;
}
