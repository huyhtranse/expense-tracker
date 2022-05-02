import React, { ChangeEvent, useState } from 'react'
import { FaExclamation, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AuthContextType } from '../../interface';
import styles from './Signup.module.scss';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { signUp } = useAuth() as AuthContextType;

  const handleSubmit= async (e: ChangeEvent<any>) => {
    e.preventDefault();
    try {
      await signUp(email, password)
    } catch (err: any) { 
      setError(err.message)
    }
  }

  return (
    <div className={styles.card}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2 className={styles.title}>Sign Up</h2>
        <p className={styles.subtitle}>
          You already have an account. <Link to="/login">Log In</Link>
        </p>
        <div className={styles["social-login"]}>
          <button className={styles["google-btn"]}>
            <FaGoogle />
            <p>Sign up with Google</p>
          </button>
        </div>
        <p className={styles.or}>
          <span>or</span>
        </p>
        {error && <div className={styles["box-warn"]}>
          <FaExclamation />
          <p>{error}</p>
        </div>}
        <div className={styles["email-login"]}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="psw">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type='submit' className={styles["btn-login"]}>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup