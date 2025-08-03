import { FaCoffee } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import '../../styles/header.css';
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="main-header bg-gray-900 text-white px-4 md:px-6 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 shadow-md sticky top-0 z-50">

      <div className="flex-shrink-0 flex justify-center items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-24 md:w-36 h-auto hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex-grow flex justify-center md:justify-end">
        <div className="flex items-center gap-2 bg-yellow-800 px-4 md:px-5 py-2 rounded-full hover:bg-yellow-700 transition duration-300 cursor-pointer shadow-inner font-semibold tracking-wide select-none text-sm md:text-base">
          <FaCoffee className="text-lg md:text-2xl text-yellow-100" />
          <span>031-39992</span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-yellow-800 px-3 md:px-4 py-2 rounded-full hover:bg-yellow-700 transition duration-300 cursor-pointer shadow-inner flex items-center justify-center text-yellow-100 text-xl select-none">
          <BsBasket2 />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="login bg-yellow-800 px-4 md:px-5 py-2 rounded-full hover:bg-yellow-700 transition duration-300 cursor-pointer shadow-inner flex items-center justify-center font-medium select-none text-sm md:text-base whitespace-nowrap">
          ثبت‌نام / ورود
        </div>
      </div>
    </header>
  );
}

export default Header;
