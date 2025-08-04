import React, { useState, useEffect } from 'react';
import {
  FaSnowflake,
  FaLeaf,
  FaCube,
  FaFire,
  FaHeart
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

function Category() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: "آیس کارامل",
      class: "cat-1",
      icon: FaSnowflake,
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      description: "نوشیدنی خنک و شیرین برای تابستان داغ"
    },
    {
      title: "قهوه روبوستا",
      class: "cat-2",
      icon: FaFire,
      gradient: "from-red-500 to-orange-600",
      bgGradient: "from-red-50 to-orange-50",
      description: "قهوه قوی و تلخ با کافئین بالا برای شروع پرانرژی روز"
    },
    {
      title: "قهوه عربیکا",
      class: "cat-3",
      icon: HiSparkles,
      gradient: "from-amber-500 to-yellow-600",
      bgGradient: "from-amber-50 to-yellow-50",
      description: "قهوه معطر و نرم از بهترین دانه‌های عربیکا"
    },
    {
      title: "آیس کافی",
      class: "cat-4",
      icon: FaCube,
      gradient: "from-teal-400 to-blue-500",
      bgGradient: "from-teal-50 to-blue-50",
      description: "قهوه سرد با طعم انرژی‌بخش و خنک"
    },
    {
      title: "چای ماسالا",
      class: "cat-5",
      icon: FaLeaf,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      description: "چای معطر هندی با طعم ادویه‌های سنتی"
    },
    {
      title: "کاپوچینو",
      class: "cat-6",
      icon: FaHeart,
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      description: "نوشیدنی کرمی و لذیذ با فوم شیر لطیف"
    },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "دسته‌بندی محصولات قهوه و نوشیدنی",
      "itemListElement": categories.map((cat, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": cat.title,
        "description": cat.description
      }))
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-t-3xl relative overflow-hidden" aria-label="دسته‌بندی محصولات">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          دسته‌بندی <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">محصولات</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          انواع نوشیدنی‌های گرم و سرد را از بهترین دانه‌های قهوه دنیا تجربه کنید
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 px-2 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:overflow-visible">
        {categories.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeCategory === index;
          return (
            <article
              key={index}
              onClick={() => setActiveCategory(index)}
              role="button"
              aria-label={`انتخاب دسته‌بندی ${item.title} - ${item.description}`}
              title={`دسته‌بندی ${item.title}`}
              className={`group min-w-[18rem] sm:min-w-0 relative h-52 rounded-3xl shadow-lg transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden ${
                isActive ? 'scale-105 shadow-2xl ring-4 ring-amber-300' : 'hover:scale-105'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-90`} />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-300`} />
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="text-2xl text-white" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-bold text-gray-800 mb-1 leading-tight">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 opacity-90">
                  {item.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </article>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-amber-200">
          <span className="text-gray-700 font-medium">دسته انتخاب شده:</span>
          <span className="text-amber-700 font-bold">{categories[activeCategory].title}</span>
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default Category;
