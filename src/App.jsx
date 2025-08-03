import './App.css'
import Header from './components/static/header'
import Navbar from './components/static/navbar'
import Services from './components/static/services';
import Marquee from './components/static/marquee';
import Category from './components/static/category';
import Products from './components/static/products';
import Blogs from './components/static/blogs';
import Footer from './components/static/footer';
function App() {

  return (
    <section className='  bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-100 overflow-hidden'>
      <div className="w-[90%] mx-auto">
        <Header />
        <Navbar />
        <Services />
        <Marquee />
        <br />
        <Products />
        <br />
        <Category />
        <Blogs />
        <br />
        <Footer />
      </div>
    </section>
  )
}

export default App
