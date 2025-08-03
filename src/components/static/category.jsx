import '../../styles/category.css';
import { FaCoffee } from "react-icons/fa";

function Category() {
    return (
        <section className="main-category py-10 px-4 relative">
            <ul className="flex justify-start gap-4 max-w-full overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-amber-700 scrollbar-track-transparent px-2 sm:justify-center sm:flex-wrap sm:overflow-visible">
                {[
                    { title: "آیس کارامل", class: "cat-1" },
                    { title: "قهوه روبوستا", class: "cat-2" },
                    { title: "قهوه عربیکا", class: "cat-3" },
                    { title: "ایس کافی", class: "cat-4" },
                    { title: "چای ماسالا", class: "cat-5" },
                    { title: "کاپوچینو", class: "cat-6" },
                ].map((item, index) => (
                    <li
                        key={index}
                        className={`li-category min-w-[160px] h-40 rounded-2xl shadow-md bg-white flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer ${item.class}`}
                        style={{ color: '#3b2f2f' }}
                    >
                        <FaCoffee size={32} className="mb-2 text-amber-700" />
                        <p className="text-lg font-semibold text-center whitespace-nowrap">{item.title}</p>
                    </li>
                ))}
            </ul>

            {/* Background blur shapes */}
            <div className="absolute -top-20 -left-10 w-60 h-60 bg-amber-300 rounded-full blur-3xl opacity-20 z-0"></div>
            <div className="absolute bottom-0 right-0 w-52 h-52 bg-yellow-400 rounded-full blur-2xl opacity-30 z-0"></div>
        </section>
    );
}

export default Category;
