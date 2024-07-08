import { Link } from "react-router-dom"
import hero from '../../assets/hero-bg.png'

const Hero = () => {
  return (
    <div className="bg-cover bg-right lg:bg-auto lg:bg-right bg-no-repeat" style={{ backgroundImage: `url(${hero})` }}>
      <section className="px-3 p-36 max-w-4xl mx-auto">
        <div>
          <h1 className="text-5xl font-bold leading-snug bg-white p-2 rounded-md sm:bg-transparent">
            <span className="text-red-600">Trucks</span> and <span className="text-red-600">trailers <br className="hidden md:block" /></span> 
            for purchase or rent
          </h1>
          <h4 className=" text-lg sm:text-3xl font-normal mb-8">New and used equipment available</h4>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <Link to={'contact'} className='bg-red-600 hover:bg-red-700 w-full sm:w-fit text-center transition-all px-8 md:px-12 py-2 rounded-md text-white font-semibold'>Contact us</Link>
            <Link to={'rentals'} className='bg-gray-800 hover:bg-gray-950 w-full sm:w-fit text-center transition-all px-8 md:px-12 py-2 rounded-md text-white font-semibold'>Rental rates</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero