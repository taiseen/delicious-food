import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cuisine from './Cuisine';
import { Search } from '../components';

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/searched/:search' element={<Search />} />
        </Routes>
    )
}

export default Pages