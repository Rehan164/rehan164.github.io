'use client';

import { useState, useEffect } from 'react';

export default function CardPage() {
  const [showCard, setShowCard] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Show card after 10 seconds
    const cardTimer = setTimeout(() => {
      setShowCard(true);
    }, 10000);

    // Countdown timer
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(cardTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  const handleCardClick = () => {
    setIsCardOpen(true);
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Rose decorations */}
      <div className="absolute top-10 left-10 text-pink-400 text-5xl animate-slow-pulse">🌹</div>
      <div className="absolute top-20 right-20 text-red-400 text-4xl animate-slow-bounce">🌹</div>
      <div className="absolute bottom-20 left-20 text-pink-300 text-6xl animate-slow-pulse">🌹</div>
      <div className="absolute bottom-10 right-10 text-red-300 text-3xl animate-slow-bounce">🌹</div>
      <div className="absolute top-1/2 left-5 text-pink-200 text-3xl animate-gentle-float">🌹</div>
      <div className="absolute top-1/3 right-5 text-red-200 text-4xl animate-heart-beat">🌹</div>
      <div className="absolute bottom-1/3 left-1/4 text-pink-400 text-2xl animate-slow-pulse">🌹</div>
      <div className="absolute top-2/3 right-1/4 text-red-400 text-3xl animate-slow-bounce">🌹</div>
      <div className="absolute top-1/4 left-1/3 text-pink-300 text-2xl animate-gentle-float">🌹</div>
      <div className="absolute bottom-1/4 right-1/3 text-red-300 text-3xl animate-heart-beat">🌹</div>
      

      {/* Floating hearts - only show when card is visible */}
      {showCard && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute text-pink-400 ${
                i % 4 === 0 ? 'animate-gentle-bounce' : 
                i % 4 === 1 ? 'animate-gentle-float' : 
                i % 4 === 2 ? 'animate-heart-beat' : 'animate-float'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
                fontSize: `${0.8 + Math.random() * 0.4}rem`,
              }}
            >
              {i % 4 === 0 ? '💕' : i % 4 === 1 ? '❤️' : i % 4 === 2 ? '💖' : '💗'}
            </div>
          ))}
        </div>
      )}

      <div className="text-center z-10">
        {!showCard ? (
          <div className="space-y-8">
            <div className="text-6xl animate-bounce">💌</div>
            <h1 className="text-4xl font-bold text-pink-600 animate-pulse">
              Your special card is coming...
            </h1>
            <div className="text-6xl text-red-500 font-bold animate-pulse">
              {countdown}
            </div>
            <p className="text-2xl text-pink-500 animate-pulse">
              Get ready!!! ✨
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-pink-600 animate-pulse">
              Your Special Card is Here! 💌
            </h1>
            
            <div className="relative">
              <div
                className={`cursor-pointer transform transition-all duration-1000 ${
                  isCardOpen ? 'scale-150 rotate-12' : 'hover:scale-110 hover:rotate-3'
                }`}
                onClick={handleCardClick}
              >
                {/* Card */}
                <div className="bg-gradient-to-br from-pink-200 to-red-200 p-8 rounded-2xl shadow-2xl border-4 border-pink-300 max-w-md mx-auto">
                  <div className="text-6xl mb-4">💌</div>
                  <p className="text-2xl text-pink-700 font-bold">
                    Click to open!
                  </p>
                </div>
              </div>
              
              {!isCardOpen && (
                <p className="mt-6 text-2xl text-pink-500 animate-pulse">
                  Click the card to open it! 💕
                </p>
              )}
            </div>
            
            {showMessage && (
              <div className="mt-8 space-y-6 animate-fadeIn max-w-2xl mx-auto">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-pink-300">
                  <div className="text-6xl mb-6 animate-bounce">🎂</div>
                  <h2 className="text-4xl font-bold text-pink-600 mb-4">
                    Happy Birthday 💕
                  </h2>
                  <div className="text-lg text-pink-700 space-y-4 leading-relaxed">
                    <p className="font-semibold text-pink-800">
                      Dear babe,
                    </p>
                    <p>
                      First I want to say Happy Birthday! I just want you to know how grateful I am to have you in my life. You make me extremely happy, through your jokes, the way you care for me, and how you always support me. Even from miles away, you are the reason I push forward.
                    </p>
                    <p>
                      Today is your day and I hope today brings you all the love you give to everyone else. We will do a proper celebration soon, but until then, let's celebrate everyday as your day!
                    </p>
                    <p>
                      Thank you for being my favorite person. I love you more than I can write in one message.
                    </p>
                    <p className="font-semibold text-pink-800 mt-6">
                      Happy birthday babe!
                    </p>
                    <p className="text-xl text-pink-600 mt-4">
                      Love,<br />
                      Poopoo ❤️
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
    </div>
  );
}
