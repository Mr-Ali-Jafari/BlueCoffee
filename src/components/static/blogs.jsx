import React, { useState } from 'react';
import { HiClock, HiUser, HiEye, HiArrowRight, HiBookOpen, HiPlay } from "react-icons/hi";
import { FaCoffee, FaHeart, FaShare } from "react-icons/fa";

const barista = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='80' r='40' fill='%23d2b48c'/%3E%3Ccircle cx='85' cy='75' r='3' fill='%23000'/%3E%3Ccircle cx='115' cy='75' r='3' fill='%23000'/%3E%3Cpath d='M90 90 Q100 100 110 90' stroke='%23000' stroke-width='2' fill='none'/%3E%3Crect x='70' y='120' width='60' height='60' fill='%238b4513'/%3E%3Crect x='80' y='110' width='40' height='20' fill='%23fff'/%3E%3Ctext x='100' y='200' text-anchor='middle' fill='%23654321' font-size='12'%3EBarista%3C/text%3E%3C/svg%3E";

function Blogs() {
    const [favorites, setFavorites] = useState(new Set());
    const [hoveredCard, setHoveredCard] = useState(null);

    const blogItems = [
        {
            title: "آموزش درست کردن قهوه اسپرسو",
            description: "با اصول دم‌آوری قهوه آشنا شوید و طعم واقعی را تجربه کنید. از انتخاب دانه تا تنظیم دستگاه اسپرسو.",
            class: "cat-1",
            author: "علی احمدی",
            readTime: "5 دقیقه",
            views: "1.2k",
            date: "3 روز پیش",
            category: "آموزش قهوه",
            difficulty: "مبتدی",
            isVideo: false,
            tags: ["اسپرسو", "قهوه", "باریستا"]
        },
        {
            title: "راز درست کردن کاپوچینو حرفه‌ای",
            description: "کاپوچینوی حرفه‌ای با فوم شیر لطیف و قهوه اسپرسو! تکنیک‌های پیشرفته steam کردن شیر.",
            class: "cat-2",
            author: "مریم رضایی",
            readTime: "8 دقیقه",
            views: "2.1k",
            date: "1 هفته پیش",
            category: "نوشیدنی گرم",
            difficulty: "متوسط",
            isVideo: true,
            tags: ["کاپوچینو", "شیر", "لته آرت"]
        },
        {
            title: "نوشیدنی‌های سرد تابستانی",
            description: "یک نوشیدنی خنک و شیرین برای روزهای گرم تابستانی. از آیس لته تا فراپه‌های خاص.",
            class: "cat-3",
            author: "حسین موسوی",
            readTime: "6 دقیقه",
            views: "856",
            date: "2 هفته پیش",
            category: "نوشیدنی سرد",
            difficulty: "آسان",
            isVideo: false,
            tags: ["آیس کافی", "تابستان", "سرد"]
        },
    ];

    const toggleFavorite = (index) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(index)) {
            newFavorites.delete(index);
        } else {
            newFavorites.add(index);
        }
        setFavorites(newFavorites);
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'آسان': return 'text-green-600 bg-green-100';
            case 'مبتدی': return 'text-blue-600 bg-blue-100';
            case 'متوسط': return 'text-yellow-600 bg-yellow-100';
            case 'پیشرفته': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    return (
        <section className="rounded-2xl py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-20 left-10 w-32 h-32 bg-amber-300 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-32 right-16 w-48 h-48 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-300 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full text-amber-700 font-medium mb-4">
                        <HiBookOpen className="text-lg" />
                        <span>مقالات آموزشی</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        دنیای
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> قهوه</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        از اصول ابتدایی تا تکنیک‌های پیشرفته، همه چیز درباره قهوه و نوشیدنی‌های کافی‌شاپ
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
                    {blogItems.map((item, index) => (
                        <article
                            key={index}
                            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative overflow-hidden">
                                <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    <img
                                        src={barista}
                                        alt={item.title}
                                        className="w-24 h-24 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {item.isVideo && (
                                        <div className="absolute inset-0 flex items-center justify-center z-20">
                                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <HiPlay className="text-2xl text-amber-600 mr-1" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="absolute top-4 right-4 flex gap-2">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                                        {item.difficulty}
                                    </span>
                                    {item.isVideo && (
                                        <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-medium">
                                            ویدیو
                                        </span>
                                    )}
                                </div>

                                <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFavorite(index);
                                        }}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${favorites.has(index)
                                            ? 'bg-red-500 text-white scale-110'
                                            : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
                                            }`}
                                    >
                                        <FaHeart className="text-sm" />
                                    </button>
                                    <button className="w-10 h-10 bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
                                        <FaShare className="text-sm" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-amber-600 font-medium mb-3">
                                    <FaCoffee className="text-sm" />
                                    <span>{item.category}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-lg border border-amber-200"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <HiUser className="text-sm" />
                                            <span>{item.author}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiClock className="text-sm" />
                                            <span>{item.readTime}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <HiEye className="text-sm" />
                                        <span>{item.views}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group/btn">
                                    <span>مطالعه مقاله</span>
                                    <HiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
                        <HiBookOpen className="text-xl" />
                        <span>مشاهده همه مقالات</span>
                        <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Blogs;