'use client';

import { useState } from 'react';

interface LoginPageProps {
  onLogin: (success: boolean) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      if (password === 'hbd-to-best-gf') {
        onLogin(true);
      } else {
        setError('Incorrect password. Try again! 💕');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 flex items-center justify-center p-4">
      {/* Rose decorations */}
      <div className="absolute top-10 left-10 text-pink-400 text-6xl animate-slow-pulse">🌹</div>
      <div className="absolute top-20 right-20 text-red-400 text-4xl animate-slow-bounce">🌹</div>
      <div className="absolute bottom-20 left-20 text-pink-300 text-5xl animate-slow-pulse">🌹</div>
      <div className="absolute bottom-10 right-10 text-red-300 text-3xl animate-slow-bounce">🌹</div>
      <div className="absolute top-1/2 left-5 text-pink-200 text-3xl animate-gentle-float">🌹</div>
      <div className="absolute top-1/3 right-5 text-red-200 text-4xl animate-heart-beat">🌹</div>
      <div className="absolute bottom-1/3 left-1/4 text-pink-400 text-2xl animate-slow-pulse">🌹</div>
      <div className="absolute top-2/3 right-1/4 text-red-400 text-3xl animate-slow-bounce">🌹</div>
      <div className="absolute top-1/4 left-1/3 text-pink-300 text-2xl animate-gentle-float">🌹</div>
      <div className="absolute bottom-1/4 right-1/3 text-red-300 text-3xl animate-heart-beat">🌹</div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-md w-full border-2 border-pink-200">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-2 animate-pulse">
            🎂 Happy Birthday! 🎂
          </h1>
          <p className="text-pink-500 text-lg">
            Enter the secret password to see your surprise!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-pink-700 mb-2">
              Secret Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-center text-lg transition-all duration-300 hover:border-pink-400 bg-white text-gray-800 placeholder-gray-500"
              placeholder="Enter password..."
              required
            />
          </div>
          
          {error && (
            <div className="text-red-500 text-center animate-shake">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Checking...
              </div>
            ) : (
              'Enter the Magic! ✨'
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-pink-400 text-sm">
            💕 Made with love for the most special person 💕
          </p>
        </div>
      </div>
    </div>
  );
}
