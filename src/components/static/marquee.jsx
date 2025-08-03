import React from 'react';
import logo from '../../assets/logo.png';

function Marquee() {
  const items = Array(5).fill(0); 

  return (
    <section className="bg-amber-200 overflow-hidden"
    style={
        {
            borderRadius:'10px'
        }
    }
    >
      <div className="marquee flex animate-marquee gap-10 py-4">
        {items.map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 whitespace-nowrap"
          >
            <img src={logo} alt="logo" className="max-w-[40px]" />
            <p className="text-2xl font-bold">بلو کافه</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Marquee;
