import React from 'react';
import {
  MdAddLocationAlt,
  MdEmail,
  MdPhone,
  MdAccessTime
} from "react-icons/md";
import {
  TiSocialInstagram,
  TiSocialTwitter
} from "react-icons/ti";
import {
  FaCoffee,
  FaTelegram,
  FaWhatsapp,
  FaHeart,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import dargah from '../../assets/images/dargah.png';
import logo from '../../assets/logo.png';
import enamad from '../../assets/images/enamad.png';



function Footer() {
  const quickLinks = [
    "درباره ما",
    "منو کافه",
    "سفارش آنلاین",
    "تماس با ما",
    "بلاگ",
    "فرصت‌های شغلی"
  ];

  const workingHours = [
    { day: "شنبه - چهارشنبه", time: "8:00 - 23:00" },
    { day: "پنج‌شنبه - جمعه", time: "8:00 - 24:00" }
  ];

  const socialLinks = [
    {
      icon: TiSocialInstagram,
      name: "@BlueCafe",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    },
    {
      icon: FaTelegram,
      name: "@BlueCafeTelegram",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      icon: FaWhatsapp,
      name: "031-39992",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
    }
  ];

  return (
    <footer
      style={
        {
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',

        }
      }
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img
                src={logo}
                alt="Blue Cafe Logo"
                className="w-32 h-32 hover:scale-110 transition-all duration-500 drop-shadow-2xl animate-bounce"
                style={{ animationDuration: '3s' }}
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">
                بلو کافه
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              جایی که طعم واقعی قهوه با گرمای صمیمی ملاقات می‌کند. بهترین دانه‌های قهوه دنیا را با ما تجربه کنید.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" dir="rtl">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-2">
                <FaCoffee className="text-xl" />
                تماس با ما
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 group hover:text-amber-300 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaPhoneAlt className="text-sm text-white" />
                  </div>
                  <span className="font-medium">031-39992</span>
                </div>

                <div className="flex items-center gap-3 group hover:text-amber-300 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <HiMail className="text-lg text-white" />
                  </div>
                  <span className="font-medium">info@bluecafe.ir</span>
                </div>

                <div className="flex items-start gap-3 group hover:text-amber-300 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mt-1">
                    <FaMapMarkerAlt className="text-sm text-white" />
                  </div>
                  <span className="font-medium leading-relaxed">
                    اصفهان، خیابان آمادگاه<br />
                    نبش کوچه شماره ۱
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-2">
                <FaClock className="text-xl" />
                ساعات کاری
              </h3>

              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-amber-500/50 transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{schedule.day}</span>
                      <span className="text-amber-400 font-bold">{schedule.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">لینک‌های مفید</h3>

              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    className="block w-full text-right text-gray-300 hover:text-amber-400 hover:translate-x-2 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-800/50 font-medium"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">شبکه‌های اجتماعی</h3>

              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={index}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${social.color} ${social.hoverColor} transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
                    >
                      <IconComponent className="text-2xl text-white group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white font-semibold">{social.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700/50 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="flex justify-center gap-8">
                <div className="group cursor-pointer">
                  <img
                    src={enamad}
                    alt="E-Namad Certification"
                    className="w-20 h-20 hover:scale-110 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-2xl"
                  />
                  <p className="text-xs text-gray-400 text-center mt-2 group-hover:text-amber-400 transition-colors duration-300">
                    نماد اعتماد الکترونیک
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <img
                    src={dargah}
                    alt="Payment Gateway"
                    className="w-20 h-20 hover:scale-110 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-2xl"
                  />
                  <p className="text-xs text-gray-400 text-center mt-2 group-hover:text-amber-400 transition-colors duration-300">
                    درگاه پرداخت معتبر
                  </p>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-gray-400 mb-2">
                  © 2024 بلو کافه. تمامی حقوق محفوظ است.
                </p>
                <p className="text-gray-500 text-sm flex items-center justify-center lg:justify-start gap-1">
                  ساخته شده با
                  <FaHeart className="text-red-500 animate-pulse" />
                  توسط تیم بلو کافه
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
    </footer>
  );
}

export default Footer;