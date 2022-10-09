import { NavLink } from 'react-router-dom';
import { navLinkStyle } from '../lib/NavStyle';

export const Navbar = () => {
  return (
    <nav className='min-h-[70px] flex items-center'>
      <ul className='flex gap-3 text-xl'>
        <NavLink style={navLinkStyle} to='/'>
          Home
        </NavLink>
        <NavLink style={navLinkStyle} to='/about'>
          About
        </NavLink>
        <NavLink style={navLinkStyle} to='/products'>
          Products
        </NavLink>
      </ul>
    </nav>
  );
};
