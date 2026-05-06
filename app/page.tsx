'use client';
import { useState } from 'react';

export default function BirthdayPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const friendImages = ['/photos/1.jpg', '/photos/2.jpg', '/photos/3.jpg', '/photos/4.jpg', '/photos/5.jpg', '/photos/6.jpg'];
  const herImages = ['/photos/her1.jpg', '/photos/her2.jpg', '/photos/her3.jpg', '/photos/her4.jpg', '/photos/her5.jpg'];

  return (
    <main className="relative min-h-[300vh] bg-black text-white overflow-x-hidden">

      {/* --- ФОНОВАЯ ЛЕНТА ДРУЗЕЙ --- */}
      <div className="fixed inset-0 z-0 overflow-hidden flex flex-col items-center justify-center pointer-events-none">
        <div className="w-[150%] -rotate-12 py-10">
          <div className="flex w-fit animate-photo-scroll">
            {[...friendImages, ...friendImages, ...friendImages].map((src, index) => (
              <div key={index} className="flex-shrink-0 px-6">

                {/* СВЕТЯЩАЯСЯ РАМКА */}
                <div
                  className="relative p-[3px] rounded-2xl animate-rainbow-border shadow-[0_0_20px_rgba(255,0,128,0.3)]"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '7deg' : '-7deg'})`,
                    // Добавляем внешнее свечение всей карточке
                    boxShadow: '0 0 25px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <div className="bg-black rounded-[13px] overflow-hidden border border-white/10">
                    <img
                      src={src}
                      className="h-64 w-48 object-cover opacity-70 grayscale-[20%] contrast-125"
                      alt="Friend"
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
      {/* --- СЕКЦИЯ 1: БЕЗУМНЫЙ ЗАГОЛОВОК --- */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="animate-fade-in-up flex flex-col items-center">
          <span className="text-pink-500 tracking-[0.5em] uppercase text-sm mb-4 animate-pulse">Special for you</span>

          {/* Мерцающий и переливающийся заголовок */}
          <h1 className="text-5xl sm:text-8xl font-black text-center leading-tight">
            С ДНЁМ РОЖДЕНИЯ, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient-x">
              АЙЛИН!
            </span>
          </h1>

          <div className="mt-12 flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>

        {/* Разделитель снизу секции (градиентная линия) */}
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* --- СЕКЦИЯ 2: ПОЗДРАВЛЕНИЕ (ОТДЕЛЕННЫЙ БЛОК) --- */}
      <section className="relative z-10 min-h-screen flex items-center justify-center bg-black/40 backdrop-blur-lg">
        <div className="max-w-3xl px-8 py-20 border-x border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
          <h2 className="text-pink-500 text-sm tracking-[0.4em] uppercase mb-10 text-center">The Message</h2>
          <p className="text-2xl sm:text-4xl font-light leading-relaxed text-center italic text-gray-100">
            «Ты — как редкая звезда, которая делает это небо ярче. <br className="hidden sm:block" />
            Пусть твоя жизнь будет такой же <span className="text-white font-medium">безумно красивой</span>, как этот момент.»
          </p>
          <div className="mt-16 flex justify-center">
            <div className="w-20 h-[1px] bg-pink-500" />
          </div>
        </div>
      </section>

      {/* --- СЕКЦИЯ 3: КАРТОЧНАЯ ГАЛЕРЕЯ --- */}
      <section className="relative z-10 min-h-screen w-full py-32 flex flex-col items-center justify-center bg-black">
        {/* Декоративный элемент разделения */}
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />

        <h2 className="text-2xl font-light tracking-[0.5em] uppercase mb-24 text-white/50">Gallery of Her</h2>

        <div className="relative w-full max-w-[320px] sm:max-w-[600px] h-[500px] flex items-center justify-center">
          {herImages.map((src, i) => {
            const positions = [
              { rot: '-15deg', x: '-80px', y: '-40px' },
              { rot: '10deg', x: '70px', y: '-20px' },
              { rot: '-2deg', x: '0px', y: '20px' },
              { rot: '18deg', x: '-30px', y: '120px' },
              { rot: '-10deg', x: '80px', y: '140px' },
            ];
            const isActive = activeCard === i;

            return (
              <div
                key={i}
                onClick={() => setActiveCard(isActive ? null : i)}
                className="absolute cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  transform: isActive
                    ? `rotate(0deg) scale(1.4) translateY(-30px)`
                    : `rotate(${positions[i].rot}) translateX(${positions[i].x}) translateY(${positions[i].y})`,
                  zIndex: isActive ? 100 : i,
                  filter: activeCard !== null && !isActive ? 'blur(4px) brightness(0.3)' : 'none'
                }}
              >
                <div className={`p-2 bg-white shadow-2xl rounded-sm ${isActive ? 'shadow-pink-500/40' : ''}`}>
                  <img src={src} className={`w-40 sm:w-64 h-auto object-cover transition-all duration-700 ${isActive ? 'grayscale-0' : 'grayscale-[50%]'}`} />
                  <div className="h-8 sm:h-12 bg-white flex items-center px-2">
                    <span className="text-black text-[10px] font-bold tracking-tighter italic">AYLIN • MOMENT #{i + 1}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="relative z-10 py-20 text-center border-t border-white/5 bg-black">
        <p className="text-[10px] tracking-[0.8em] text-white/20 uppercase font-light">
          Сделано с ❤️ от Акдила
        </p>
      </footer>

      <style jsx global>{`
        @keyframes photoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-photo-scroll { animation: photoScroll 50s linear infinite; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.5s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
          @keyframes rainbowBorder {
  0% { 
    background: linear-gradient(45deg, #ff0080, #7928ca);
    filter: drop-shadow(0 0 8px rgba(255, 0, 128, 0.6)); /* Свечение рамки */
  }
  50% { 
    background: linear-gradient(45deg, #0070f3, #00ffca);
    filter: drop-shadow(0 0 12px rgba(0, 255, 202, 0.6)); /* Свечение меняет цвет */
  }
  100% { 
    background: linear-gradient(45deg, #ff0080, #7928ca);
    filter: drop-shadow(0 0 8px rgba(255, 0, 128, 0.6));
  }
}

.animate-rainbow-border { 
  animation: rainbowBorder 4s linear infinite;
  background-size: 200% 200%;
}

      `}</style>
    </main>
  );
}
