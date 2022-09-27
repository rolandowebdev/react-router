import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? '#0284c7' : '#fff',
    };
  };

  return (
    <nav className='min-h-[70px] flex items-center'>
      <ul className='flex gap-3 text-xl'>
        <NavLink style={navLinkStyle} to='/'>
          Home
        </NavLink>
        <NavLink style={navLinkStyle} to='/about'>
          About
        </NavLink>
      </ul>
    </nav>
  );
};
