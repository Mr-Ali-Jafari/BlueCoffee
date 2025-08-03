import coffeePacket from '../../assets/images/coffee-image.png';
import '../../styles/products.css';

function Products() {
    return (
        <section className="main-products py-10 px-4 relative">
            <div className="overflow-x-auto whitespace-nowrap scrollbar-hide px-2">
                <ul className="flex gap-6 w-max">
                    {[
                        { title: "دانه قهوه", class: "cat-1" },
                        { title: "دانه قهوه روبستا", class: "cat-2" },
                        { title: "دانه قهوه عربیکا", class: "cat-3" },
                        { title: "پودر کاپوچینا", class: "cat-4" },
                        { title: "پودر ماسالا", class: "cat-5" },
                        { title: "پودر قهوه ترک", class: "cat-6" },
                        { title: "پودر قهوه ترک", class: "cat-6" },
                        { title: "پودر قهوه ترک", class: "cat-6" },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className={`li-products w-56 min-w-[14rem] rounded-2xl shadow-md bg-white flex-shrink-0 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer ${item.class}`}
                            style={{ color: '#3b2f2f' }}
                        >
                            <img src={coffeePacket} alt="" className="w-24 h-24 object-contain" />
                            <p className="text-lg font-semibold text-center">{item.title}</p>
                            <div className="prices text-center mt-2">
                                <p className='price-off line-through text-sm text-gray-500'>
                                    قیمت اصلی: 1,500,000
                                </p>
                                <p className='price text-amber-700 font-bold'>
                                    قیمت تخفیف خورده: 700,000
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Products;
