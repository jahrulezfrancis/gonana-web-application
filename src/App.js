import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Pages/Homepage';
import Orders from './Components/Pages/Orders';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='home' element={<HomePage />} />
      <Route path='orders' element={<Orders />} />
    </Routes>
  );
}

export default App;
