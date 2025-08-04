import React, { useState, useCallback, useMemo } from 'react';
import { HiClock, HiUser, HiEye, HiArrowRight, HiBookOpen, HiPlay } from "react-icons/hi";
import { FaCoffee, FaHeart, FaShare } from "react-icons/fa";

const barista = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='80' r='40' fill='%23d2b48c'/%3E%3Ccircle cx='85' cy='75' r='3' fill='%23000'/%3E%3Ccircle cx='115' cy='75' r='3' fill='%23000'/%3E%3Cpath d='M90 90 Q100 100 110 90' stroke='%23000' stroke-width='2' fill='none'/%3E%3Crect x='70' y='120' width='60' height='60' fill='%238b4513'/%3E%3Crect x='80' y='110' width='40' height='20' fill='%23fff'/%3E%3Ctext x='100' y='200' text-anchor='middle' fill='%23654321' font-size='12'%3EBarista%3C/text%3E%3C/svg%3E";

function Blogs() {
    const [favorites, setFavorites] = useState(new Set());
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const blogArticles = useMemo(() => [
        {
            id: 'espresso-guide',
            title: "آموزش کامل درست کردن قهوه اسپرسو حرفه‌ای",
            description: "راهنمای جامع دم‌آوری قهوه اسپرسو از انتخاب دانه قهوه تا تنظیمات دستگاه و تکنیک‌های باریستا حرفه‌ای",
            author: "علی احمدی",
            authorTitle: "باریستا حرفه‌ای",
            readTime: "5 دقیقه",
            views: "1200",
            publishDate: "2024-08-01",
            lastModified: "2024-08-01",
            category: "آموزش قهوه",
            difficulty: "مبتدی",
            isVideo: false,
            tags: ["اسپرسو", "قهوه", "باریستا", "آموزش"],
            slug: "espresso-brewing-guide"
        },
        {
            id: 'cappuccino-masterclass',
            title: "راز درست کردن کاپوچینو حرفه‌ای و لته آرت",
            description: "تکنیک‌های پیشرفته تهیه کاپوچینو با فوم شیر مخملی و هنر طراحی روی قهوه برای باریستاهای حرفه‌ای",
            author: "مریم رضایی",
            authorTitle: "استاد لته آرت",
            readTime: "8 دقیقه",
            views: "2100",
            publishDate: "2024-07-28",
            lastModified: "2024-07-28",
            category: "نوشیدنی گرم",
            difficulty: "متوسط",
            isVideo: true,
            tags: ["کاپوچینو", "شیر", "لته آرت", "فوم"],
            slug: "cappuccino-latte-art-guide"
        },
        {
            id: 'iced-coffee-summer',
            title: "بهترین نوشیدنی‌های سرد کافی‌شاپ برای تابستان",
            description: "مجموعه کاملی از نوشیدنی‌های خنک تابستانی از آیس لته کلاسیک تا کلد برو و فراپه‌های خاص",
            author: "حسین موسوی",
            authorTitle: "متخصص نوشیدنی سرد",
            readTime: "6 دقیقه",
            views: "856",
            publishDate: "2024-07-21",
            lastModified: "2024-07-21",
            category: "نوشیدنی سرد",
            difficulty: "آسان",
            isVideo: false,
            tags: ["آیس کافی", "تابستان", "کلد برو", "فراپه"],
            slug: "summer-iced-coffee-drinks"
        }
    ], []);

    const toggleFavorite = useCallback((articleId) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(articleId)) {
                newFavorites.delete(articleId);
            } else {
                newFavorites.add(articleId);
            }
            return newFavorites;
        });
    }, []);

    const getDifficultyColor = useCallback((difficulty) => {
        const colorMap = {
            'آسان': 'text-green-600 bg-green-100',
            'مبتدی': 'text-blue-600 bg-blue-100',
            'متوسط': 'text-yellow-600 bg-yellow-100',
            'پیشرفته': 'text-red-600 bg-red-100'
        };
        return colorMap[difficulty] || 'text-gray-600 bg-gray-100';
    }, []);

    const formatViews = useCallback((views) => {
        const num = parseInt(views);
        return num >= 1000 ? `${(num/1000).toFixed(1)}k` : num.toString();
    }, []);

    const formatDate = useCallback((dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return 'دیروز';
        if (diffDays <= 7) return `${diffDays} روز پیش`;
        if (diffDays <= 30) return `${Math.ceil(diffDays/7)} هفته پیش`;
        return `${Math.ceil(diffDays/30)} ماه پیش`;
    }, []);

    const structuredData = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "بلاگ آموزشی بلو کافه",
        "description": "مقالات آموزشی قهوه، تکنیک‌های باریستا و راهنمای تهیه نوشیدنی‌های کافی‌شاپ",
        "url": "https://bluecafe.ir/blog",
        "publisher": {
            "@type": "Organization",
            "name": "بلو کافه",
            "logo": {
                "@type": "ImageObject",
                "url": "https://bluecafe.ir/logo.png"
            }
        },
        "blogPost": blogArticles.map(article => ({
            "@type": "BlogPosting",
            "@id": `https://bluecafe.ir/blog/${article.slug}`,
            "headline": article.title,
            "description": article.description,
            "author": {
                "@type": "Person",
                "name": article.author,
                "jobTitle": article.authorTitle
            },
            "datePublished": article.publishDate,
            "dateModified": article.lastModified,
            "articleSection": article.category,
            "keywords": article.tags.join(", "),
            "readingTime": article.readTime,
            "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/ReadAction",
                "userInteractionCount": article.views
            }
        }))
    }), [blogArticles]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <section
                role="main"
                aria-labelledby="blog-section-title"
                className="py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden"
                style={{
                    borderBottomLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                }}
            >
                <div className="absolute inset-0 opacity-40" aria-hidden="true">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-amber-300 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-32 right-16 w-48 h-48 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-300 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <header className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full text-amber-700 font-medium mb-4">
                            <HiBookOpen className="text-lg" aria-hidden="true" />
                            <span>مقالات آموزشی</span>
                        </div>
                        <h1 id="blog-section-title" className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            دنیای
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> قهوه</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            از اصول ابتدایی تا تکنیک‌های پیشرفته، همه چیز درباره قهوه و نوشیدنی‌های کافی‌شاپ
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full" aria-hidden="true"></div>
                    </header>

                    <div className="flex overflow-x-auto gap-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0" dir="rtl">
                        <style>
                            {`
                                @media (max-width: 767px) {
                                    .flex::-webkit-scrollbar {
                                        display: none;
                                    }
                                }
                            `}
                        </style>
                        {blogArticles.map((article) => (
                            <article
                                key={article.id}
                                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer min-w-[300px] md:min-w-0"
                                itemScope
                                itemType="https://schema.org/BlogPosting"
                                aria-labelledby={`article-title-${article.id}`}
                            >
                                <div className="relative overflow-hidden">
                                    <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true"></div>
                                        <img
                                            src={barista}
                                            alt={`تصویر مقاله ${article.title}`}
                                            className="w-24 h-24 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            decoding="async"
                                            onLoad={() => setIsImageLoaded(true)}
                                            itemProp="image"
                                        />

                                        {article.isVideo && (
                                            <div className="absolute inset-0 flex items-center justify-center z-20" aria-label="محتوای ویدیویی">
                                                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                    <HiPlay className="text-2xl text-amber-600 mr-1" aria-hidden="true" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                                            {article.difficulty}
                                        </span>
                                        {article.isVideo && (
                                            <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-medium">
                                                ویدیو
                                            </span>
                                        )}
                                    </div>

                                    <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleFavorite(article.id);
                                            }}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                                                favorites.has(article.id)
                                                    ? 'bg-red-500 text-white scale-110'
                                                    : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
                                            }`}
                                            aria-label={favorites.has(article.id) ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}
                                        >
                                            <FaHeart className="text-sm" aria-hidden="true" />
                                        </button>
                                        <button
                                            className="w-10 h-10 bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                            aria-label="اشتراک‌گذاری مقاله"
                                        >
                                            <FaShare className="text-sm" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-amber-600 font-medium mb-3">
                                        <FaCoffee className="text-sm" aria-hidden="true" />
                                        <span itemProp="articleSection">{article.category}</span>
                                    </div>

                                    <h2
                                        id={`article-title-${article.id}`}
                                        className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors duration-300"
                                        itemProp="headline"
                                    >
                                        {article.title}
                                    </h2>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed" itemProp="description">
                                        {article.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="برچسب‌های مقاله">
                                        {article.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-lg border border-amber-200"
                                                role="listitem"
                                                itemProp="keywords"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1" itemScope itemType="https://schema.org/Person">
                                                <HiUser className="text-sm" aria-hidden="true" />
                                                <span itemProp="name">{article.author}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <HiClock className="text-sm" aria-hidden="true" />
                                                <span itemProp="timeRequired">{article.readTime}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiEye className="text-sm" aria-hidden="true" />
                                            <span>{formatViews(article.views)}</span>
                                        </div>
                                    </div>

                                    <time className="text-xs text-gray-400 block mb-4" itemProp="datePublished" dateTime={article.publishDate}>
                                        {formatDate(article.publishDate)}
                                    </time>

                                    <button
                                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group/btn focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                                        aria-label={`مطالعه مقاله ${article.title}`}
                                    >
                                        <span>مطالعه مقاله</span>
                                        <HiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" aria-hidden="true"></div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <button className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                            <HiBookOpen className="text-xl" aria-hidden="true" />
                            <span>مشاهده همه مقالات</span>
                            <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs;
