import { useState } from 'react';
import { TiSocialInstagram } from "react-icons/ti";
import { HiMenu, HiX } from "react-icons/hi";
import '../../styles/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-yellow-900 header shadow-md">
      <div dir="rtl" className="px-6 py-3">
        <div className="flex justify-between items-center">
          <button 
            className="text-yellow-100 text-3xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          <div className="InstaGram">
            <button className="flex justify-center items-center gap-3 bg-yellow-800 px-4 py-2 rounded-full hover:bg-yellow-700 transition duration-300 cursor-pointer shadow-inner text-yellow-50 font-semibold text-sm">
              <span className="li-icon text-2xl text-pink-400">
                <TiSocialInstagram />
              </span>
              <span className="hidden sm:inline">@BlueCafe</span>
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <ul
          className={`
            nav-items-ul flex-col md:flex-row md:flex items-start md:items-center 
            justify-start md:justify-between gap-4 mt-4 md:mt-0 
            ${isOpen ? 'flex' : 'hidden'} md:flex
          `}
        >
          <li className="li-refrence-links flex flex-col md:flex-row items-start md:items-center gap-4 text-yellow-100 font-semibold text-sm md:text-base">
            <span className="hover:text-yellow-300 transition-colors cursor-pointer">خانه</span>
            <span className="hover:text-yellow-300 transition-colors cursor-pointer">محصولات</span>
            <span className="hover:text-yellow-300 transition-colors cursor-pointer">منو</span>
            <span className="hover:text-yellow-300 transition-colors cursor-pointer">تماس با ما</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
