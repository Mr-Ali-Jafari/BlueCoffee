import barista from '../../assets/images/barista.png';
import '../../styles/blogs.css';

function Blogs() {
    const blogItems = [
        {
            title: "آموزش درست کردن قهوه",
            description: "با اصول دم‌آوری قهوه آشنا شوید و طعم واقعی را تجربه کنید.",
            class: "cat-1"
        },
        {
            title: "آموزش درست کردن کاپوچینو",
            description: "کاپوچینوی حرفه‌ای با فوم شیر لطیف و قهوه اسپرسو!",
            class: "cat-2"
        },
        {
            title: "آموزش درست کردن آیس پک",
            description: "یک نوشیدنی خنک و شیرین برای روزهای گرم تابستانی.",
            class: "cat-3"
        },
    ];

    return (
        <section className="py-16 px-6 relative bg-gradient-to-b from-amber-100 to-amber-200">
            <div className="max-w-7xl mx-auto rounded-3xl bg-white shadow-xl p-10 relative overflow-hidden">
                <h2 className="text-3xl font-bold text-center text-amber-800 mb-10">
                    🍵 مقالات آموزشی کافی‌شاپ
                </h2>

                <ul
                    className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-amber-300 pb-4"
                >
                    {blogItems.map((item, index) => (
                        <li
                            key={index}
                            className={`min-w-[80%] sm:min-w-[300px] lg:min-w-0 flex-shrink-0 rounded-2xl bg-amber-50 border border-amber-200 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.03] ${item.class}`}
                        >
                            <div className="p-6 flex flex-col items-center text-center space-y-4">
                                <img src={barista} alt="" className="object-contain drop-shadow-sm w-24 h-24" />
                                <h3 className="text-xl font-semibold text-amber-800">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                                <button className="mt-2 bg-amber-500 text-white px-5 py-2 rounded-full hover:bg-amber-600 transition">مشاهده مقاله</button>
                            </div>
                        </li>
                    ))}
                </ul>

                <li className="bg-yellow-800 detail-btn mt-6 w-fit mx-auto px-6 py-2 text-white rounded-full hover:bg-yellow-700 transition cursor-pointer">
                    ادامه مطلب
                </li>

                {/* Decorative blurred circles */}
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-30 z-0"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 z-0"></div>
            </div>
        </section>
    );
}

export default Blogs;
