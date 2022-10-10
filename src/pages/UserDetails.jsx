import { useParams } from 'react-router-dom';

export const UserDetails = () => {
  const { userId } = useParams();
  return <h1 className='mt-2 text-xl'>Detail about user {userId}</h1>;
};
