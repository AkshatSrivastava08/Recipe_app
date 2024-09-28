import React from 'react';
import { NavLink } from 'react-router-dom';

const Mealcards = ({ detail }) => {
  return (
    <div className='meals'>
      {detail?.map((curItem) => (
        <div key={curItem.idMeal} className='mealImg'>
          <img src={curItem.strMealThumb} alt='' />
          <p>{curItem.strMeal}</p>
          <NavLink to={`/${curItem.idMeal}`}><button>Recipe</button></NavLink>
        </div>
      ))}
    </div>
  );
};

export default Mealcards;