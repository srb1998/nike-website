import { useState } from "react"
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
// import "index.css"

const Nav = () => {

  const [toggleDropdown, setToggleDropdown] = useState(false)
  
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href='/'>
          <img 
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="hidden max-lg:block relative cursor-pointer">
          <img 
            src={hamburger}
            alt= "Hamburger"
            width={25}
            height={25}
            onClick={() => setToggleDropdown((prev) => !prev )}
          />
          {toggleDropdown && (
            <div className="absolute right-0 mt-3 p-5 z-20 w-full rounded-lg backdrop-blur-sm shadow-md min-w-[150px] flex flex-col gap-2 justify-end items-end">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))
              }

            </div>
          )

          }
        </div>
      
      </nav>
    </header>
  )
}

export default Nav
