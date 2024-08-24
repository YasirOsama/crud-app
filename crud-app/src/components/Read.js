import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUsers } from '../features/userSalice';

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUsers());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>All Data</h2>
      <div>
        {users &&
          users.map((ele, index) => (
            <div className='card w-50 mx-auto' key={index}>
              <div className='card-body'>
                <h5 className='card-title'>{ele.name}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{ele.email}</h6>
                <p className='card-text'>{ele.age}</p>
                <p className='card-text'>{ele.gender}</p>

                <a href='#' className='card-link'>view</a>
                <a href='#' className='card-link'>Edit</a>
                <a href='#' className='card-link'>Delete</a>

              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
