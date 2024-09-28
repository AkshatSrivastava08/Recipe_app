import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const data = await response.json();
        setInfo(data.meals[0]);
      } catch (error) {
        console.error('Error fetching meal info:', error);
        // Handle error here, e.g., display an error message
      }
    };

    fetchData();
  }, [mealid]); // Re-fetch data only when mealid changes

  return (
    <div>
      {info ? (
        <div className='mealInfo'>
          <img src={info.strMealThumb} alt='' />
          <div className='info'>
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instruction's</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      ) : (
        "Data Not Found"
      )}
    </div>
  );
};

export default Mealinfo;