import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Pages/Homepage';
import CartPage from './Components/Pages/Cart';
import OrdersPage from './Components/Pages/Orders';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='home' element={<HomePage />} />
      <Route path='orders' element={<OrdersPage />} />
      <Route path='cart' element={<CartPage />} />
    </Routes>
  );
}

export default App;
