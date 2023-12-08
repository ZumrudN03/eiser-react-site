import './App.css';
import Basket from './Components/Basket';
import HomeDetail from './Pages/HomeDetails';
import HomePage from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from './Pages/Wishlist';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/productdetail/:id' element={<HomeDetail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path='/wishlist' element= {<Wishlist/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
