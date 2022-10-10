import { Outlet, useSearchParams } from 'react-router-dom';

export const Users = () => {
  const [searchParams, serSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active';
  return (
    <div>
      <h1>User 1</h1>
      <h2>User 2</h2>
      <h3>User 3</h3>
      <Outlet />
      <div className='flex gap-4 mt-4 text-slate-800 text-sm'>
        <button
          onClick={() => serSearchParams({ filter: 'active' })}
          className='bg-slate-400 px-4 rounded-sm py-2'>
          Active Users
        </button>
        <button
          onClick={() => serSearchParams({})}
          className='bg-slate-400 px-4 rounded-sm py-2'>
          Reset Filter
        </button>
      </div>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
};
