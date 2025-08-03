import { FaCoffee } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import '../../styles/header.css'
import logo from "../../assets/logo.png";

function Header() {
  return (
    <section className="main-header text-white px-6 py-3 flex items-center gap-4 text-sm md:text-base shadow-md top-0 z-50">
      
      <div className="logo flex justify-center items-center p-2">
        <img
          src={logo}
          alt="Logo"
          className="w-28 md:w-40 h-auto hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="number ml-auto flex items-center gap-3 bg-yellow-800 px-5 py-2 rounded-full hover:bg-yellow-700 transition duration-300 cursor-pointer shadow-inner font-semibold tracking-wide select-none">
        <FaCoffee className="text-2xl text-yellow-100" />
        <span>031-39992</span>
      </div>

      <div className="bg-yellow-800 px-4 py-2 rounded-full hover:bg-yellow-700 transition duration-300 cursor-pointer shadow-inner flex items-center justify-center text-yellow-100 select-none">
        <BsBasket2 className="text-2xl" />
      </div>

      <div className="login bg-yellow-800 px-5 py-2 rounded-full hover:bg-yellow-700 transition duration-300 cursor-pointer shadow-inner flex items-center justify-center font-medium select-none whitespace-nowrap">
        <span>ثبت نام / ورود</span>
      </div>
    </section>
  );
}

export default Header;
