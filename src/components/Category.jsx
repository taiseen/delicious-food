import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
// import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <div className="flex justify-center items-center gap-4 text-3xl my-8">
            <div className="space-y-2">
                <FaPizzaSlice />
                <h3>Italian</h3>
            </div >
            <div className="space-y-2">
                <FaHamburger />
                <h3>American</h3>
            </div>
            <div className="space-y-2">
                <GiNoodles />
                <h3>Thai</h3>
            </div>
            <div className="space-y-2">
                <GiChopsticks />
                <h3>Japanese</h3>
            </div>
        </div>
    )
}

export default Category