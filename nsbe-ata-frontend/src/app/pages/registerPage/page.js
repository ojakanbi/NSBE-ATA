'use client'; // Ensure this is at the top of your file

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';// Import useRouter
import { registerUser } from '../../utils/api/register'; // Adjust the import path if necessary
import styles from './page.module.css'; // Adjust the import path if necessary

export default function Register() {
    const router = useRouter(); // Initialize useRouter

    // State to hold form input values
    const [formData, setFormData] = useState({
        nsbe_id: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: ''
    });

    // State for handling form submission status
    const [message, setMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await registerUser(formData);
            setMessage(result.message || 'Registration successful!');
            if (result.access_token) {
                localStorage.setItem('access_token', result.access_token);
                router.push('/pages/homePage'); // Navigate to the home page
            }
        } catch (error) {
            setMessage(error.response?.data?.error || 'Registration failed.');
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Register</h2>
                {message && <p className={styles.errorMessage} >{message}</p>} {/* Display message to user */}
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="nsbe_id">NSBE ID</label>
                    <input 
                        type="text" 
                        id="nsbe_id" 
                        required 
                        className={styles.input} 
                        placeholder="Enter your NSBE ID" 
                        value={formData.nsbe_id}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="first_name">First Name</label>
                    <input 
                        type="text" 
                        id="first_name" 
                        required 
                        className={styles.input} 
                        placeholder="Enter your first name" 
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="last_name">Last Name</label>
                    <input 
                        type="text" 
                        id="last_name" 
                        required 
                        className={styles.input} 
                        placeholder="Enter your last name" 
                        value={formData.last_name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        required 
                        className={styles.input} 
                        placeholder="Enter your email" 
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        required 
                        className={styles.input} 
                        placeholder="Enter your password" 
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="role">Role</label>
                    <select 
                        id="role" 
                        required 
                        className={styles.select} 
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select your role</option>
                        <option value="member">Member</option>
                        <option value="officer">Officer</option>
                        <option value="alumni">Alumni</option>
                    </select>
                </div>
                <button type="submit" className={styles.button}>Register</button>
            </form>
        </div>
    );
}
