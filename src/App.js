import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='home' element={<HomePage />} />
    </Routes>
  );
}

export default App;
