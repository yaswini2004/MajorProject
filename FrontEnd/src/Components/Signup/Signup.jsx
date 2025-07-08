import React from 'react'
import styles from './Signup.module.css'

function Signup() {
  return (
    <div className={styles.signupContainer}>
        <div className={styles.signup}>
            <div className={styles.SignupHeader}>Join us <br/> Create a free account today</div>

            <form className={styles.signupForm}>
                <input type = "text" placeholder='Full Name' className={styles.fullName} />
                <input type="email" placeholder='Email' className={styles.email} />
                <input type="date" placeholder='Date of Birth' className={styles.dob} />
                <input type="text" placeholder='Username' className={styles.username} />
                <input type="password" placeholder='Password' className={styles.password} />
                <input type="password" placeholder='Confirm Password' className={styles.confirmPassword} />
                <div className={styles.termsContainer}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span className={styles.termsText}>
                        By signing up, you agree to our <span className={styles.termsLink}>Terms of Service</span> and <span className={styles.privacyLink}>Privacy Policy</span>.
                    </span>
                </div>
                <button type="submit" className={styles.signupButton}>Create Account</button>
            </form>
        </div>
    </div>
  )
}

export default Signup