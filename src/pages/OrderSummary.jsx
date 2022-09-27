import { useNavigate } from 'react-router-dom';

export const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div className='text-center mt-4'>
      <h1 className='text-2xl'>Order Confirmed!</h1>
      <button
        onClick={() => navigate(-1)}
        className='px-6 mt-5 py-2 rounded-sm tracking-wider text-white bg-sky-600'>
        Go back
      </button>
    </div>
  );
};
