'use client'; 

import { useState, useEffect } from 'react';

export default function JokesPage() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchInitialJoke() {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        setJoke(data); 
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchInitialJoke();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 p-4 pt-20">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg p-8 w-full max-w-lg text-white text-center">
        <h1 className="text-3xl font-bold mb-6">Ini Jokes</h1>
        
        <div className="min-h-[150px] flex flex-col justify-center items-center bg-black/20 rounded-lg p-6">
          {loading ? (
            <p className="text-xl">Mencari lelucon...</p>
          ) : (
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold">{joke.setup}</p>
              <p className="text-2xl font-bold text-yellow-300">{joke.punchline}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}