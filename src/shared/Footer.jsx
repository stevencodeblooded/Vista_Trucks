import { Link, NavLink } from "react-router-dom"
import vistaLogoFooter from '../assets/VistaFooter.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faLocation, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className='bg-gray-900 py-16 px-3'>
      <section className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-10">
          <Link to={'/'} className="w-fit">
            <img src={vistaLogoFooter} alt="vista logo"  />
          </Link>
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white text-sm">
            <div>
              <ul className="flex flex-col gap-3">
                <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>Home</NavLink></li>
                <li><NavLink to={'sales'} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>Sales</NavLink></li>
                <li><NavLink to={'rentals'} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>Rentals</NavLink></li>
                <li><NavLink to={'about'} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>About</NavLink></li>
                <li><NavLink to={'contacts'} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>Contacts</NavLink></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-red-600 text-lg" />
                <p><a href="tel:+17739040023">+17739040023</a></p>
              </span>
              <span  className="flex items-center gap-2">
                <p className="text-red-600 text-xl">@</p>
                <p><a href="mailto:sales@vistalease.com">sales@vistalease.com</a></p>
              </span>
              <ul className="flex items-center gap-6 text-2xl">
                <li><a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-all"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="http://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-all"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="http://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-all"><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li><a href="http://telegram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-all"><FontAwesomeIcon icon={faTelegram} /></a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <FontAwesomeIcon icon={faClock} className="text-red-600 text-xl" />
                <div>
                  <p>Monday - Friday:
                  7.00AM to 5.00PM</p>
                </div>
              </div>
              <div className="flex gap-3">
                <FontAwesomeIcon icon={faLocation} className="text-red-600 text-xl" />
                <div>
                  <p>8 Prosper Ct, Lake in the
                  Hills, IL 60156, USA</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:items-center">
              <p className="lg:text-center">If you have any questions,
                leave your application
              </p>
              <Link to={'contact'} className='bg-red-600 text-center w-full hover:bg-red-700 text-base transition-all px-6 py-2 rounded-md text-white font-semibold'>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer