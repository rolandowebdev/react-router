import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '12px', margin: 0, padding: 0 }}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </ul>
    </nav>
  );
};
