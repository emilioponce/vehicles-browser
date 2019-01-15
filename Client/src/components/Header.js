import React from 'react'

import logo from '../images/logo.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="Vehicles Browser" />
        <div className={styles.title}>Vehicles Browser</div>
        <div className={styles.subtitle}>
          A tool for visualizing different types of vehicles
        </div>
      </div>
    </div>
  )
}

export default Header
