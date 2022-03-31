// import { useState } from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import Search from './Search';

const Category = () => {

    // const [activeLink, setActiveLink] = useState(false);

    const links = [
        { name: 'Thai', path: '/cuisine/Thai', icon: <GiNoodles /> },
        { name: 'Italian', path: '/cuisine/Italian', icon: <FaPizzaSlice /> },
        { name: 'American', path: '/cuisine/American', icon: <FaHamburger /> },
        { name: 'Japanese', path: '/cuisine/Japanese', icon: <GiChopsticks /> },
    ]

    const clearMemory = () => {
        let message = 'Are your sure to clear all local storage data ?'
        if (window.confirm(message)) {
            window.localStorage.clear();
        } else {
            console.log("You pressed cancel");
        }
    }


    // const activeClick = (linkName) => {
    //     // for (var key in window.localStorage) {
    //     //     if (linkName === key) {
    //     //         setActiveLink(true);
    //     //     }
    //     // }

    //     onClick={() => activeClick(link.name)}

    //     ${activeLink && 'bg-red-500'}
    // }


    return (


        <div className="flex justify-center items-center gap-5 text-3xl mt-10 mb-4 relative">

            <div className="text-sm absolute -top-7 right-50 text-gray-200 cursor-pointer duration-300 hover:text-gray-400"
                onClick={clearMemory}>
                <h1>Clear browser chase </h1>
            </div>

            <div className="text-sm absolute top-0 right-50">
                <Search />
            </div>

            {
                links.map(link => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={`flex flex-col items-center bg-gray-300 p-4 mt-14 rounded hover:bg-gray-500 hover:text-yellow-300 duration-300 `}>

                        {link.icon}

                        <h3 className="text-xl md:text-2xl">{link.name}</h3>
                    </NavLink >
                ))
            }
        </div >
    )
}

export default Category