import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { url } from '../constants';

const Search = () => {


    const [inputRecipes, setInputRecipes] = useState('');
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + inputRecipes)
    }

    const getSearchedRecipes = async (recipes) => {

        const secondTimeLoad = localStorage.getItem(`${recipes}`);

        if (secondTimeLoad) {
            setSearchedRecipes(JSON.parse(secondTimeLoad));
            console.log(recipes, ' ==> data load from localStorage ')
        } else {
            const typeUrl = url.byType + recipes
            const data = await fetch(typeUrl);
            const recipes = await data.json();
            setSearchedRecipes(recipes.results);

            // set to local storage for caching purposes...
            localStorage.setItem(`${recipes}`, JSON.stringify(recipes.results));
        }

    }
    useEffect(() => {
        getSearchedRecipes()
    }, [])

    return (
        <form className="flex items-center bg-gray-300 rounded w-[350px]" onSubmit={submitHandler}>

            <FaSearch className="ml-3 text-xl" />

            <input
                type="text"
                value={inputRecipes}
                onChange={e => setInputRecipes(e.target.value)}
                className="py-1 px-3 bg-gray-300 w-full rounded outline-none text-xl"
            />
        </form>
    )
}

export default Search