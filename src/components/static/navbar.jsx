import React, { useState, useEffect } from 'react';
import { HiMenu, HiX, HiHome, HiShoppingBag, HiDocumentText, HiPhone } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('خانه');
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const menuItems = [
    { name: 'خانه', icon: HiHome, hasSubmenu: false },
    { name: 'محصولات', icon: HiShoppingBag, hasSubmenu: true },
    { name: 'منو', icon: HiDocumentText, hasSubmenu: false },
    { name: 'تماس با ما', icon: HiPhone, hasSubmenu: false }
  ];

  const productSubmenu = [
    'قهوه گرم',
    'نوشیدنی‌های سرد',
    'دسرها',
    'غذاهای سبک'
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-900 via-amber-900 to-yellow-900 shadow-lg border-b border-yellow-700/30 relative z-40 rounded-2xl">
      <div dir="rtl" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex items-center space-x-8 space-x-reverse w-full justify-center">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleItemClick(item.name)}
                  onMouseEnter={() => item.hasSubmenu && setIsProductsOpen(true)}
                  onMouseLeave={() => item.hasSubmenu && setIsProductsOpen(false)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
                    transition-all duration-300 relative overflow-hidden
                    ${activeItem === item.name
                      ? 'text-yellow-900 bg-yellow-200 shadow-md'
                      : 'text-yellow-100 hover:text-yellow-900 hover:bg-yellow-300/90'
                    }
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-300/0 before:via-yellow-200/20 before:to-yellow-300/0
                    before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
                  `}
                >
                  <item.icon className="text-lg" />
                  <span className="whitespace-nowrap">{item.name}</span>
                  {item.hasSubmenu && (
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {item.hasSubmenu && (
                  <div
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                    className={`
                      absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-yellow-200
                      transform transition-all duration-300 origin-top
                      ${isProductsOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
                    `}
                  >
                    <div className="py-2">
                      {productSubmenu.map((subItem, index) => (
                        <button
                          key={subItem}
                          onClick={() => handleItemClick(subItem)}
                          className="w-full text-right px-4 py-3 text-gray-700 hover:bg-yellow-100 hover:text-yellow-800 transition-colors duration-200 font-medium text-sm border-b border-yellow-100/50 last:border-b-0"
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-yellow-800/50 hover:bg-yellow-700/70 transition-all duration-300 group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <HiMenu className={`absolute inset-0 text-yellow-100 text-xl transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
              <HiX className={`absolute inset-0 text-yellow-100 text-xl transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
            </div>
          </button>
        </div>

        <div className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="py-4 space-y-2 border-t border-yellow-700/30 mt-2">
            {menuItems.map((item, index) => (
              <div key={item.name}>
                <button
                  onClick={() => {
                    if (item.hasSubmenu) {
                      setIsProductsOpen(!isProductsOpen);
                    } else {
                      handleItemClick(item.name);
                    }
                  }}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-sm
                    transition-all duration-300 transform hover:scale-[1.02]
                    ${activeItem === item.name
                      ? 'text-yellow-900 bg-yellow-200 shadow-md'
                      : 'text-yellow-100 hover:text-yellow-900 hover:bg-yellow-300/90'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="text-lg" />
                    <span>{item.name}</span>
                  </div>
                  {item.hasSubmenu && (
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {item.hasSubmenu && (
                  <div className={`
                    overflow-hidden transition-all duration-300 ease-in-out mr-6
                    ${isProductsOpen ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="space-y-1 bg-yellow-800/30 rounded-lg p-2">
                      {productSubmenu.map((subItem, subIndex) => (
                        <button
                          key={subItem}
                          onClick={() => handleItemClick(subItem)}
                          className="w-full text-right px-3 py-2 text-yellow-100 hover:text-yellow-900 hover:bg-yellow-300/70 transition-all duration-200 font-medium text-sm rounded-md"
                          style={{
                            animationDelay: `${(subIndex + 1) * 50}ms`
                          }}
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;