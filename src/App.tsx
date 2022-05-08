import { FC, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import { useAuth } from './context/AuthContext';
import { AuthContextType } from './interface';

const App: FC = () => {
  // const { user } = useAuth() as AuthContextType;

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
