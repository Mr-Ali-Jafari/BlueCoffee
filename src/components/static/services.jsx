import '../../styles/service.css';
import big_card from '../../assets/images/big_card.jfif';
import little_card from '../../assets/images/little_card.jfif';

function Services() {
  return (
    <section className="main-service flex flex-wrap gap-6 justify-center p-6">
      {/* کارت بزرگ */}
      <div
        className="service-1 max-w-[600px] w-full rounded-2xl shadow-lg overflow-hidden relative cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
        style={{
          backgroundImage: `url(${big_card})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '320px',
        }}
      >
        {/* overlay تیره برای بهتر دیده شدن متن */}
        <div className="absolute inset-0 bg-black bg-opacity-40 overlay"></div>

        {/* محتوای کارت */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-white">
          <h1 className="text-4xl font-bold drop-shadow-lg">بلو کافه</h1>
          <p className='text-2xl'>تجربه بهتر از نوشیدن</p>
          {/* می‌تونی اینجا دکمه یا متن اضافه کنی */}
        </div>
      </div>

      {/* کارت کوچک */}
      <div
        className="service-1 w-[400px] rounded-2xl shadow-lg overflow-hidden relative cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
        style={{
          backgroundImage: `url('${little_card}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '320px',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 overlay"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-white">
        </div>
      </div>
    </section>
  );
}

export default Services;
