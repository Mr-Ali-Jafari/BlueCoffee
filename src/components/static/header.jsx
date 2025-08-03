import React, { useState, useEffect } from 'react';
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import { TiSocialInstagram } from "react-icons/ti";
import logo from '../../assets/logo.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled
          ? 'bg-gradient-to-r from-amber-900/95 via-yellow-800/95 to-amber-900/95 backdrop-blur-md shadow-xl'
          : 'bg-gradient-to-r from-amber-800 via-yellow-700 to-amber-800'
        }
      `}>
        <div className="hidden lg:flex items-center justify-between px-6 py-4">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Blue Cafe Logo"
              className="w-32 h-auto hover:scale-110 transition-all duration-300 drop-shadow-lg cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/30">
              <FaCoffee className="text-2xl text-amber-200 group-hover:text-amber-100 transition-colors duration-300" />
              <span className="text-white font-semibold tracking-wider group-hover:scale-105 transition-transform duration-300">
                031-39992
              </span>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/30">
              <BsBasket2 className="text-xl text-amber-200 group-hover:text-amber-100 transition-colors duration-300" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                2
              </span>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/30">
              <span className="text-white font-medium group-hover:scale-105 transition-transform duration-300">
                ثبت‌نام / ورود
              </span>
            </div>

            {/* Instagram */}
            <div className="group flex items-center gap-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-pointer border border-pink-300/20">
              <TiSocialInstagram className="text-2xl text-pink-300 group-hover:text-pink-200 transition-colors duration-300" />
              <span className="text-white font-medium group-hover:scale-105 transition-transform duration-300">
                @BlueCafe
              </span>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-between px-4 py-3">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Blue Cafe Logo"
              className="w-20 h-auto hover:scale-110 transition-all duration-300 drop-shadow-lg"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <FaCoffee className="text-lg text-amber-200" />
              <span className="text-white font-semibold text-sm">031-39992</span>
            </div>

            <div className="relative bg-white/10 backdrop-blur-sm p-2.5 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <BsBasket2 className="text-lg text-amber-200" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold text-[10px]">
                2
              </span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-white/10 backdrop-blur-sm p-2.5 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              {isMobileMenuOpen ?
                <FaTimes className="text-lg text-white" /> :
                <FaBars className="text-lg text-white" />
              }
            </button>
          </div>
        </div>

        <div className={`
          lg:hidden absolute top-full left-0 right-0 
          bg-gradient-to-b from-amber-900/98 to-yellow-900/98 backdrop-blur-lg
          transform transition-all duration-300 ease-in-out border-t border-white/10
          ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}>
          <div className="p-4 space-y-3">
            <div className="sm:hidden flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <FaCoffee className="text-xl text-amber-200" />
              <span className="text-white font-semibold">031-39992</span>
            </div>

            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer text-center">
              <span className="text-white font-medium">ثبت‌نام / ورود</span>
            </div>

            <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-pointer">
              <TiSocialInstagram className="text-2xl text-pink-300" />
              <span className="text-white font-medium">@BlueCafe</span>
            </div>
          </div>
        </div>
      </header>

      <div className="h-20 lg:h-24"></div>
      <br /><br /><br />
    </>
  );
}

export default Header;