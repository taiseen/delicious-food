import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { url } from '../constants';
import '@splidejs/splide/dist/css/splide.min.css';

const Popular = () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, [])

  const getPopular = async () => {

    const secondTimeLoad = localStorage.getItem('popular');

    if (secondTimeLoad) {
      setPopular(JSON.parse(secondTimeLoad));
      console.log('2nd time ... ... ...')
    } else {
      const response = await fetch(url.urlApiKey);
      const data = await response.json();
      setPopular(data.recipes);

      // set to local storage for caching purposes...
      localStorage.setItem('popular', JSON.stringify(data.recipes));
    }
  }

  return (
    <div className="my-16">
      <h3 className="text-2xl text-center">Popular Picks</h3>
      <Splide options={{
        pagination: false,
        drag: 'free',
        gap: '1rem',
        type: 'loop',
        focus: "center",
        perPage: 4,
        perMove: 4,
        breakpoints: {
          1024: {
            perPage: 3,
            perMove: 3,
          },
          767: {
            perPage: 2,
            perMove: 2,
          },
          640: {
            perPage: 1,
            perMove: 1,
          },
        }
      }} >
        {
          popular.map(recipe => (
            <SplideSlide key={recipe.id}>
              <div className="min-h-[25rem] p-4 m-2 overflow-hidden relative">
                <p className=" text-2xl w-full p-2 bg-white/60 text-black
                  absolute left-1/2 bottom-0 -translate-x-2/4 z-10 text-center rounded-b-[2rem]">
                  {recipe.title}
                </p>
                <img src={recipe.image} alt={recipe.title}
                  className="rounded-[2rem] absolute left-0 top-0 w-full h-full object-cover" />
              </div>
            </SplideSlide>
          ))
        }
      </Splide>
    </div >
  )
}

export default Popular