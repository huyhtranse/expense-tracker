import React, { FC } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss'

const Login: FC = () => {
  return (
    <div className={styles.card}>
      <form>
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
        <div className={styles["email-login"]}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
          />

          <label htmlFor="psw">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
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