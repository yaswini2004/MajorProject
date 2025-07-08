import React, { use, useEffect, useState } from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom';

function Login() {
    
    const [option, setOption] = useState('mail');

    useEffect(() => {
        setFormData({
            email: '',
            username: '',
            password: ''
        });
    }, [option]);

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div className={styles.loginContainer}>
        <div className={styles.Login}>
            <div className={styles.text}>Welcome Back</div>
            <div className={styles.text}>Log in to your account</div>
            <div className={styles.inputLabels}>
                <div className={`${styles.option} ${option === 'mail' ? styles.active : ''}`} onClick={()=>setOption('mail')}>Mail</div>
                <div className={`${styles.option} ${option === 'username' ? styles.active : ''}`} onClick={()=>setOption('username')}>Username</div>
            </div>
            <form className={styles.loginForm} onSubmit={(e) => handleFormSubmit(e)}>
                <input type="email" placeholder='Mail' className={`${styles.email} ${option === 'mail' ? styles.active : ''}`} value={formData.email} onChange={(e)=>handleInputChange(e)} name='email'/>
                <input type="text" placeholder='Username' className={`${styles.username} ${option === 'username' ? styles.active : ''}`} value={formData.username} onChange={(e)=>handleInputChange(e)} name='username'/>
                <input type="password" placeholder='Password' className={styles.password} value={formData.password} onChange={(e)=>handleInputChange(e)} name='password'/>
                <button type="submit" className={styles.loginButton}>Login</button>
            </form>
            <div className={styles.signupText}>
                Don't have an account? 
                <Link to="/signup"><span className={styles.signup}>Sign Up</span></Link>
            </div>
        </div>
    </div>
  )
}

export default Login