import React from "react";
import styles from "./register.module.css";


export default function Register() {
    return (
        <div className={styles.container}>
            <h2>
                NSBE ATA
            </h2>
            <form className={styles.form}>
                <h2 className={styles.title}>Register</h2>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="nsbe_id">NSBE ID</label>
                    <input type="text" id="nsbe_id" required className={styles.input} placeholder="Enter your NSBE ID" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="first_name">First Name</label>
                    <input type="text" id="first_name" required className={styles.input} placeholder="Enter your first name" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="last_name">Last Name</label>
                    <input type="text" id="last_name" required className={styles.input} placeholder="Enter your last name" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input type="email" id="email" required className={styles.input} placeholder="Enter your email" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input type="password" id="password" required className={styles.input} placeholder="Enter your password" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="role">Role</label>
                    <select id="role" required className={styles.select}>
                        <option value="" disabled selected>Select your role</option>
                        <option value="member">Member</option>
                        <option value="officer">Officer</option>
                        <option value="alumni">Alumni</option>
                    </select>
                </div>
                <button type="submit" className={styles.button}>Register</button>
            </form>
        </div>
    )
}