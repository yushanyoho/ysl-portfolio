import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants/constants'
import { logo, menu, close } from '../assets'

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    // TODO: implement with MUI <AppBar/> ?
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl max-auto'>

        {/* Navigation Avatar */}
        <Link
          to={'/'}
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); // scroll to top
          }}
        >
          <img src={logo} alt='logo' className="object-contain h-12 w-12" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Yushan Li &nbsp; {/* &nbsp; is the unicode for space */}
            <span className='sm:block hidden font-normal'> | Portfolio</span>
          </p>
        </Link>

        {/* Navigation Links */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((item) => (
            <li
              className={`${active === item.title
                ? "text-white"
                : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(item.title)}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Bar, open show in sm size */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[25px] h-[25px] object-contain cursor-pointer'
            onClick={() => { setToggle(!toggle) }}
          />

          <div
            className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex flex-col justify-end items-start gap-4'>
              {navLinks.map((item) => (
                <li
                  className={`${active === item.title
                    ? "text-white"
                    : "text-secondary"
                    } font-medium hover:text-white text-[16px] cursor-pointer`}
                  onClick={() => {
                    setActive(item.title);
                    setToggle(!toggle); // close menu once a section is chosen
                  }}
                >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
