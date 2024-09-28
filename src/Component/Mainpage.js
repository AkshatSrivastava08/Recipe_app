import React, { useState, useRef } from 'react';
import Mealcards from './Mealcards';

const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");
  const searchButtonRef = useRef(null);

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search === "") {
      setMsg("Please Enter Something");
    } else {
      try {
        searchButtonRef.current.disabled = true; // Disable button while fetching
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        console.log(jsonData.meals); // Uncomment for debugging
        setData(jsonData.meals);
        setMsg("");
      } catch (error) {
        console.error("Error fetching data:", error);
        setMsg("Failed to fetch data. Please try again later.");
      } finally {
        searchButtonRef.current.disabled = false; // Re-enable button
      }
    }
  };

  return (
    <>
      <h1 className='head'>FOOD RECIPE APP</h1>
      <div className='container'>
        <div className='searchBar'>
          <input type='text' placeholder='Enter Dish Name' onChange={handleInput} />
          <button ref={searchButtonRef} onClick={myFun}>Search</button>
        </div>
        <h4 className='msg'>{msg}</h4>
        <div>
          <Mealcards detail={data} />
        </div>
      </div>
    </>
  );
};

export default Mainpage;