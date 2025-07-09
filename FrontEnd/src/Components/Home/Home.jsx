import React from 'react'
import styles from './Home.module.css'
import SubActiveTask from '../SubActiveTask/SubActiveTask';

function Home() {

  const [sideBarOpen, setSidebarOpen] = React.useState(true);

  function toggleSidebar() {
    setSidebarOpen(!sideBarOpen);
  }

  return (
    <div className={styles.homeContainer}>
        <div className={styles.home}>
            <div className={styles.header}>
                <div className={styles.sideBarBtn} onClick={toggleSidebar}>
                  ⬅
                </div>
            </div>
            <div className={styles.container}>
                <div className={`${styles.leftBar} ${sideBarOpen ? styles.open : ''}`}>
                  <div className={`${styles.sidebarContent} ${sideBarOpen ? styles.fadeIn : styles.fadeOut}`}>
                    <div>Projects</div>
                    <div>OwnProject</div>
                    <div>Shared Project</div>
                  </div>
                </div>
                <div className={styles.main}>
                  <div className={styles.topBar}>
                    <div>Summary</div>
                    <div>TimeLine</div>
                    <div>Active Tasks</div>
                    <div>Calendar</div>
                  </div>
                  <div className={styles.activeTasks}>
                    <div className={styles.subActiveTask}>
                      <div className={styles.title}>TO DO</div>
                      <div className={styles.list}>
                        <SubActiveTask />
                        <SubActiveTask />
                      </div>
                    </div>
                    <div className={styles.subActiveTask}>
                      <div className={styles.title}>IN PROGRESS</div>
                    </div>
                    <div className={styles.subActiveTask}>
                      <div className={styles.title}>IN REVIEW</div>
                    </div>
                    <div className={styles.subActiveTask}>
                      <div className={styles.title}>DONE</div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home