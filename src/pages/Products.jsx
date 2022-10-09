import { Link, Outlet } from 'react-router-dom';

function Products() {
  return (
    <>
      <div>
        <input type='text' placeholder='Search Product' />
      </div>
      <nav className='flex gap-2 mt-4'>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Products;
