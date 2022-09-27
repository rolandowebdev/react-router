import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-4'>
      <h1>Home Page</h1>
      <p>This is only Home page</p>
      <button
        // replace digunakan untuk menghapus push link navigate
        className='px-6 mt-5 py-2 rounded-sm tracking-wider text-white bg-sky-600'
        onClick={() => navigate('order-summary', { replace: true })}>
        Place order
      </button>
    </div>
  );
};
