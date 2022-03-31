import { BrowserRouter } from 'react-router-dom';
import { Category, Popular, Search, Veggie } from './components';
import { Home, Pages } from './pages';

const App = () => {

  return (
    <div className="px-[6%]">
      <BrowserRouter>
        {/* <Search /> */}
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App;