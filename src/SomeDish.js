import React from 'react';
import SomeDishCard from './SomeDishCard';

const SomeDish = () => {
  const res = JSON.parse(localStorage.getItem('titles'));
  return (
    <>
      <div className="row my-5">
        {res.map((recipe, index) => (
          <SomeDishCard recipe={recipe} key={index} />
        ))}
      </div>
    </>
  );
};

export default SomeDish;
