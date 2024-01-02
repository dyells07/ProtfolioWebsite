import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header sticky top-0 z-10'>
      <NavLink to='/ThreeJSProtfolioWebsite'>
        <img
          src={logo}
          alt='logo'
          className='w-40 h-12 object-contain sm:w-48 sm:h-14 md:w-56 md:h-16 lg:w-64 lg:h-20 xl:w-72 xl:h-24'
        />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
      <NavLink to='/ThreeJSProtfolioWebsite' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Home
        </NavLink>
        <NavLink to='/ThreeJSProtfolioWebsite/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/ThreeJSProtfolioWebsite/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/ThreeJSProtfolioWebsite/Contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Contact 
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
