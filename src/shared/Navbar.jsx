import { Link, NavLink } from 'react-router-dom'
import vistaLogo from '../assets/Vista.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './Navbar.css'; 

const Navbar = () => {
  const [mobileLinks, setMobileLinks] = useState(false);
  const exitNavigation = () => setMobileLinks(false)
  
  return (
    <div className='bg-gray-900 py-4 px-3 fixed w-full z-20'>
      <section className="max-w-4xl mx-auto">
        <nav className='flex items-center justify-between gap-5 uppercase text-white'>
          <Link to={'/'} onClick={exitNavigation}>
            <img src={vistaLogo} alt="Vista logo" />
          </Link>
          <ul className='hidden sm:flex items-center gap-8 text-xs'>
            <li>
              <NavLink to={'/'} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'sales'} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>Sales</NavLink>
            </li>
            <li>
              <NavLink to={'rentals'} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>Rentals</NavLink>
            </li>
            <li>
              <NavLink to={'about'} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'contacts'} onClick={exitNavigation} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>Contacts</NavLink>
            </li>
          </ul>
          <div className='flex items-center gap-5'>
            <Link to={'contact'} className='bg-red-600 hover:bg-red-700 capitalize transition-all sm:px-6 px-4 py-1 sm:py-2 rounded-md text-white font-semibold text-center'>Contact Us</Link>
            <div className='sm:hidden text-2xl'>
              <FontAwesomeIcon icon={faBars} className='cursor-pointer' onClick={() => setMobileLinks(!mobileLinks)} />
            </div>
          </div>
        </nav>
        <div className={`mobile-links sm:hidden ${mobileLinks ? 'show' : ''}`}>
          <ul className='flex flex-col text-white py-4 gap-3'>
            <li>
              <NavLink to={'/'} onClick={exitNavigation} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'sales'} onClick={exitNavigation} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>Sales</NavLink>
            </li>
            <li>
              <NavLink to={'rentals'} onClick={exitNavigation} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>Rentals</NavLink>
            </li>
            <li>
              <NavLink to={'about'} onClick={exitNavigation} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'contacts'} onClick={exitNavigation} className={({ isActive }) => isActive ? 'border-b-2 border-b-red-600 pb-1' : 'transition-all hover:border-b-2 hover:border-b-red-600 hover:pb-1'}>Contacts</NavLink>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Navbar
