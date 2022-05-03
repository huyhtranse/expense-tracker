import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AuthContextType, Props } from '../../interface';

const ProtectedRoute = ({ children }: Props | any) => {
  const { user } = useAuth() as AuthContextType;

  if (!user) {
    return <Navigate to='/login' />
  }
  return children;
}

export default ProtectedRoute