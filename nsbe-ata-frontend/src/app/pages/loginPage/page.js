'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    // will Handle login logic here (e.g., authentication)

    // Redirect to another page upon successful login
    router.push('/dashboard'); // Replace '/dashboard' with the route to redirect after login
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" required className={styles.input} placeholder="Enter your email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" required className={styles.input} placeholder="Enter your password" />
          </div>
          <button type="submit" className={styles.submitButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
