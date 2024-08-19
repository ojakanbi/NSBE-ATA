'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import styles from "./page.module.css"
import UserDetails from '@/app/components/userDetails';
import { jwtDecode } from 'jwt-decode';


export default function Home() {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            const decoded = jwtDecode(token);
            
            setUserDetails({
                name: decoded.sub.firstName,
                role: decoded.role,
            });
        }
    }, []);

    return (
        <div className={styles.container}>
            {/* Header Section */}
            <header className={styles.header}>
                <h1 className={styles.title}>Penn State Chapter of NSBE</h1>
                <p className={styles.slogan}>NSBE Attendance Tracking Application</p>

                {/* Conditionally render based on authentication status */}
                {userDetails ? (
                    <UserDetails name={userDetails.name} role={userDetails.role} />
                ) : (
                    <div className={styles.buttonGroup}>
                        <Link href="/pages/loginPage" className={styles.loginButton}>
                            Login
                        </Link>
                        <Link href="/pages/registerPage" className={styles.registerButton}>
                            Register
                        </Link>
                    </div>
                )}
            </header>

            {/* President and VP Section */}
            <section className={styles.leadershipSection}>
                <div className={styles.leader}>
                    <div className={styles.leaderPhoto}>
                        <img src="https://media.licdn.com/dms/image/C5603AQHM5bcOQ2WKmQ/profile-displayphoto-shrink_800_800/0/1661693984500?e=1729123200&v=beta&t=FY8McbZkeygeIpjJXT995MPtcs4AePNfBo7_AERbmd4" alt="President" className={styles.photo} />
                    </div>
                    <div className={styles.leaderInfo}>
                        <h2 className={styles.leaderTitle}>President</h2>
                        <p className={styles.leaderName}>Benjamin Ofori-Kuragu</p>
                    </div>
                </div>
                <div className={styles.leader}>
                    <div className={styles.leaderPhoto}>
                        <img src="https://media.licdn.com/dms/image/v2/D5603AQFMu1Jz_owESQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1665944123163?e=1729123200&v=beta&t=rQHxMBiwsR4GxP9JYdMd7rHcm32DGw1hKh_R78p3q5o" alt="Vice President" className={styles.photo} />
                    </div>
                    <div className={styles.leaderInfo}>
                        <h2 className={styles.leaderTitle}>Vice President</h2>
                        <p className={styles.leaderName}>Mustapha Salau</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className={styles.footer}>
                <p className={styles.footerText}>Join us and become part of a legacy of excellence. Together, we achieve more.</p>
            </footer>
        </div>
    );
}