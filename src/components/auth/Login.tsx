import React, { ChangeEvent, FC, useState } from 'react'
import { FaExclamation, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AuthContextType } from '../../interface';
import styles from './Login.module.scss'

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const { login } = useAuth() as AuthContextType;

  const handleSubmit = async (e: ChangeEvent<any>) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.title}>Log in</h2>
        <p className={styles.subtitle}>
          Don't have an account? <Link to="/signin">Sign Up</Link>
        </p>
        <div className={styles['social-login']}>
          <button className={styles["google-btn"]}>
            <FaGoogle />
            <p>Sign in with Google</p>
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
          <input type="checkbox" name="check" id="check" />
          <label className={styles['label-check']} htmlFor="check">Remember Me</label>
        <button className={styles['btn-login']}>Log in</button>
        <a href="" className={styles['forget-pw']}>Forgot password?</a>
      </form>
    </div>
  );
}

export default Login