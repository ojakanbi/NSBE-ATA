'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { loginUser } from '../../utils/api/login'; // Adjust the import path if necessary
import { useState } from 'react';


const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
});

const [message, setMessage] = useState('');

const handleChange = (e) => {
  const { id, value } = e.target;
  setFormData({
      ...formData,
      [id]: value
  });
};

  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      const result = await loginUser(formData);
      setMessage(result.message || 'Login Successful!');
      // console.log("Result:" , result) debug purpose
      if (result.access_token) {
        localStorage.setItem('access_token', result.access_token);
        router.push('/pages/homePage') // Navigate to the home page
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'Registration failed.')
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" required value={formData.email} onChange={handleChange} className={styles.input} placeholder="Enter your email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" required value={formData.password} onChange={handleChange} className={styles.input} placeholder="Enter your password" />
          </div>
          <button type="submit" className={styles.submitButton}>Login</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
