import React from 'react'
import styles from './LoginPage.module.css'
import { Link } from 'react-router-dom'

function LoginPage() {

  return (
    <div className={styles.loginPageContainer}>
        <div className={styles.loginPage}>
            <div className={styles.brand}>Empty</div>
            <div className={styles.loginOptions}>
                <div className={styles.login}>
                    <Link to="/login" className={styles.loginLink}>Login</Link>
                </div>
                <div className={styles.login}>
                    <Link to="/signup" className={styles.loginLink}>SignUp</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage