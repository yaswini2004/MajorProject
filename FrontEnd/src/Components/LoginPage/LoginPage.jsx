import React from 'react'
import styles from './LoginPage.module.css'

function LoginPage() {
  return (
    <div className={styles.loginPageContainer}>
        <div className={styles.loginPage}>
            <div className={styles.brand}>Kira</div>
            <div className={styles.loginOptions}>
                <div className={styles.login}>
                    Login
                </div>
                <div className={styles.login}>SignUp</div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage