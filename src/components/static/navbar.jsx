import '../../styles/navbar.css';
import { TiSocialInstagram } from "react-icons/ti";

function Navbar() {
  return (
    <section className="bg-yellow-900 header shadow-md">
      <div dir="rtl">
        <ul className="nav-items-ul flex items-center justify-between gap-6 px-6 py-3 flex-wrap">
          <li className="li-refrence-links flex items-center gap-6 text-yellow-100 font-semibold">
            <span className="hover:text-yellow-300 transition-colors cursor-pointer">خانه</span>
            <span className="hover:text-yellow-300 transition-colors cursor-pointer">محصولات</span>
            <span className="hover:text-yellow-300 transition-colors cursor-pointer">منو</span>
            <span className="hover:text-yellow-300 transition-colors cursor-pointer">تماس با ما</span>
          </li>

          <li className="InstaGram">
            <button className="flex justify-center items-center gap-3 bg-yellow-800 px-5 py-2 rounded-full hover:bg-yellow-700 transition duration-300 cursor-pointer shadow-inner text-yellow-50 font-semibold">
              <span className="li-icon text-2xl text-pink-400">
                <TiSocialInstagram />
              </span>
              <span>@BlueCafe</span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
