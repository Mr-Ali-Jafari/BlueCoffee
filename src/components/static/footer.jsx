import '../../styles/footer.css';
import dargah from '../../assets/images/dargah.png';
import enamad from '../../assets/images/enamad.png';
import { MdAddLocationAlt } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";
import { FaCoffee } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <section className="bg-gray-700 text-white py-10 px-4 main-footer rounded-t-3xl shadow-inner">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider text-amber-300">بلو کافه</h1>
        <div className="w-24 h-1 bg-amber-400 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="flex justify-center mb-6">
        <img
          src={logo}
          alt="Logo"
          className="w-28 md:w-40 h-auto hover:scale-105 transition-transform duration-300 bg-amber-50 rounded-3xl"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <div className="flex items-center gap-3 bg-yellow-800 px-6 py-2 rounded-full hover:bg-yellow-700 transition duration-300 shadow-inner font-semibold tracking-wide select-none">
          <FaCoffee className="text-2xl text-yellow-100" />
          <span>031-39992</span>
        </div>

        <button className="flex items-center gap-3 bg-pink-600 px-6 py-2 rounded-full hover:bg-pink-500 transition duration-300 shadow-inner font-semibold text-white">
          <TiSocialInstagram className="text-2xl" />
          <span>@BlueCafe</span>
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 text-lg mb-6">
        <MdAddLocationAlt className="text-2xl text-amber-300" />
        <span>اصفهان - خیابان آمادگاه - نبش کوچه شماره ۱</span>
      </div>

      {/* Certifications */}
      <div className="flex justify-center gap-6 mt-4">
        <img src={enamad} alt="E-Namad" className="w-24 h-auto" />
        <img src={dargah} alt="Payment Gateway" className="w-24 h-auto" />
      </div>
    </section>
  );
}

export default Footer;
