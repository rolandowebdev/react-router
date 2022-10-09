export const navLinkStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#0284c7' : '#fff',
  };
};
