import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';

const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
