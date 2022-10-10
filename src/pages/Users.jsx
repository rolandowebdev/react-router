import { Outlet } from 'react-router-dom';

export const Users = () => {
  return (
    <div>
      <h1>User 1</h1>
      <h2>User 2</h2>
      <h3>User 3</h3>
      <Outlet />
    </div>
  );
};
