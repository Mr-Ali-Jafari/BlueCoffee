import React, { useState } from 'react';
import { HiShoppingCart, HiHeart, HiEye, HiStar } from "react-icons/hi";
import { FaFire, FaLeaf, FaCoffee } from "react-icons/fa";

const coffeePacket = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='40' y='30' width='120' height='140' rx='10' fill='%23a0522d'/%3E%3Crect x='50' y='40' width='100' height='120' rx='5' fill='%23d2691e'/%3E%3Ctext x='100' y='110' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3ECOFFEE%3C/text%3E%3Ccircle cx='100' cy='80' r='8' fill='%238b4513'/%3E%3C/svg%3E";

function Products() {
    const [favorites, setFavorites] = useState(new Set());
    const [cartItems, setCartItems] = useState(new Set());

    const products = [
        {
            title: "دانه قهوه اسپرسو",
            class: "cat-1",
            originalPrice: "1,500,000",
            discountPrice: "700,000",
            discount: "53%",
            rating: 4.8,
            reviews: 124,
            badge: "پرفروش",
            badgeIcon: FaFire,
            description: "دانه قهوه درجه یک ایتالیایی"
        },
        {
            title: "دانه قهوه روبستا",
            class: "cat-2",
            originalPrice: "1,200,000",
            discountPrice: "850,000",
            discount: "29%",
            rating: 4.6,
            reviews: 89,
            badge: "ارگانیک",
            badgeIcon: FaLeaf,
            description: "طعم قوی و تلخی مطبوع"
        },
        {
            title: "دانه قهوه عربیکا",
            class: "cat-3",
            originalPrice: "2,000,000",
            discountPrice: "1,400,000",
            discount: "30%",
            rating: 4.9,
            reviews: 156,
            badge: "پریمیوم",
            badgeIcon: FaCoffee,
            description: "بهترین کیفیت دانه قهوه"
        },
        {
            title: "پودر کاپوچینو",
            class: "cat-4",
            originalPrice: "800,000",
            discountPrice: "550,000",
            discount: "31%",
            rating: 4.5,
            reviews: 67,
            badge: "محبوب",
            badgeIcon: FaFire,
            description: "کاپوچینو خانگی فوری"
        },
        {
            title: "پودر ماسالا چای",
            class: "cat-5",
            originalPrice: "600,000",
            discountPrice: "420,000",
            discount: "30%",
            rating: 4.4,
            reviews: 43,
            badge: "سنتی",
            badgeIcon: FaLeaf,
            description: "ترکیب عطرهای سنتی"
        },
        {
            title: "پودر قهوه ترک",
            class: "cat-6",
            originalPrice: "900,000",
            discountPrice: "630,000",
            discount: "30%",
            rating: 4.7,
            reviews: 98,
            badge: "اصیل",
            badgeIcon: FaCoffee,
            description: "قهوه ترک اصیل استانبولی"
        },
        {
            title: "قهوه فرانسوی",
            class: "cat-7",
            originalPrice: "1,800,000",
            discountPrice: "1,250,000",
            discount: "31%",
            rating: 4.8,
            reviews: 112,
            badge: "وارداتی",
            badgeIcon: FaCoffee,
            description: "قهوه فرانسوی درجه یک"
        },
        {
            title: "اسپرسو بلند",
            class: "cat-8",
            originalPrice: "1,300,000",
            discountPrice: "910,000",
            discount: "30%",
            rating: 4.6,
            reviews: 76,
            badge: "تازه",
            badgeIcon: FaFire,
            description: "اسپرسو تازه برشت شده"
        }
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

    const addToCart = (index) => {
        const newCartItems = new Set(cartItems);
        newCartItems.add(index);
        setCartItems(newCartItems);

        setTimeout(() => {
            const updatedCartItems = new Set(cartItems);
            updatedCartItems.delete(index);
            setCartItems(updatedCartItems);
        }, 2000);
    };



    return (
        <section className="rounded-2xl py-16 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-50">
                <div className="w-full h-full bg-gradient-to-br from-amber-100/20 via-orange-100/20 to-yellow-100/20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        محصولات
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> ویژه</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        بهترین دانه‌های قهوه و پودرهای معطر را از ما تهیه کنید
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="overflow-x-auto pb-4" dir="rtl">
                    <div className="flex gap-6 w-max px-2">
                        {products.map((product, index) => {
                            const BadgeIcon = product.badgeIcon;
                            return (
                                <div
                                    key={index}
                                    className="group relative w-80 min-w-[20rem] bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                                >
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="flex items-center gap-1 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                            <span>{product.discount}</span>
                                            <span>تخفیف</span>
                                        </div>
                                    </div>

                                    <div className="absolute top-4 left-4 z-20">
                                        <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                                            <BadgeIcon className="text-sm" />
                                            <span>{product.badge}</span>
                                        </div>
                                    </div>

                                    <div className="absolute top-16 left-4 flex flex-col gap-2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                        <button
                                            onClick={() => toggleFavorite(index)}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${favorites.has(index)
                                                ? 'bg-red-500 text-white scale-110'
                                                : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
                                                }`}
                                        >
                                            <HiHeart className="text-lg" />
                                        </button>
                                        <button className="w-10 h-10 bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
                                            <HiEye className="text-lg" />
                                        </button>
                                    </div>

                                    <div className="relative p-6 pb-4">
                                        <div className="flex justify-center mb-6 relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-xl scale-150"></div>
                                            <img
                                                src={coffeePacket}
                                                alt={product.title}
                                                className="w-32 h-32 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                                                {product.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                {product.description}
                                            </p>

                                            <div className="flex items-center justify-center gap-2 mb-4">
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <HiStar
                                                            key={i}
                                                            className={`text-sm ${i < Math.floor(product.rating)
                                                                ? 'text-yellow-400'
                                                                : 'text-gray-300'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-gray-600">
                                                    ({product.reviews})
                                                </span>
                                                <span className="text-sm font-medium text-amber-600">
                                                    {product.rating}
                                                </span>
                                            </div>

                                            <div className="mb-6">
                                                <p className="text-sm text-gray-500 line-through mb-1">
                                                    {product.originalPrice} تومان
                                                </p>
                                                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                                                    {product.discountPrice} تومان
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => addToCart(index)}
                                                disabled={cartItems.has(index)}
                                                className={`w-full py-3 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg ${cartItems.has(index)
                                                    ? 'bg-green-500 cursor-not-allowed'
                                                    : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 active:scale-95'
                                                    }`}
                                            >
                                                <HiShoppingCart className="text-lg" />
                                                <span>
                                                    {cartItems.has(index) ? 'اضافه شد!' : 'افزودن به سبد'}
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        مشاهده همه محصولات
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Products;