import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import url from '../constants/url';

const Cuisine = () => {

  const { type } = useParams();

  const [cuisines, setCuisines] = useState([])

  const getCuisine = async (type) => {

    const secondTimeLoad = localStorage.getItem(`${type}`);

    if (secondTimeLoad) {
      setCuisines(JSON.parse(secondTimeLoad));
      console.log(type, ' ==> data load from localStorage ')
    } else {
      const typeUrl = url.byType + type
      const data = await fetch(typeUrl);
      const recipes = await data.json();
      setCuisines(recipes.results);

      // set to local storage for caching purposes...
      localStorage.setItem(`${type}`, JSON.stringify(recipes.results));
    }

    // const typeUrl = url.byType + type
    // const data = await fetch(typeUrl);
    // const recipes = await data.json();
    // setCuisines(recipes.results);
  }


  useEffect(() => {
    getCuisine(type);
    // console.log(type, ' type lode... ', cuisines);
  }, [type])


  return (
    <div className="text-center">
      <Link to="/">
        <h2 className="text-xl text-gray-800 my-4 hover:text-red-600 duration-300 hover:underline underline-offset-4 decoration-dotted decoration-red-600 ">Back to Home</h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {
          cuisines.map(item => (
            <div key={item.id}>
              <img src={item.image} alt="" className='rounded-3xl w-full object-cover' />
              <h4 className="text-center text-lg mt-1">{item.title}</h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cuisine