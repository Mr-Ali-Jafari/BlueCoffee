import coffeePacket from '../../assets/images/coffee-image.png';
import '../../styles/products.css';
function Products() {
    return (
        <section className="main-products py-10 px-4 relative ">
            <ul className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto ">
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
                        className={`li-products rounded-2xl shadow-md bg-white flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer ${item.class}`}
                        style={{ color: '#3b2f2f' }}
                    >
                        <img src={coffeePacket} alt="" />
                        <p className="text-lg font-semibold text-center">{item.title}</p>

                    <div className="prices">
                        <p className='price-off line-through '>
                            قیمت اصلی : 1,500,000
                        </p>

                        <p className='price '>
                            قیمت تخفیف خورده: 700,000
                        </p>
                    </div>
                    </li>
                ))}
            </ul>


        </section>
    )
    

}

export default Products;