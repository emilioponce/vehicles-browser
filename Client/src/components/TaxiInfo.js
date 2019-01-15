import React from 'react'
import PropTypes from 'prop-types'

import styles from './TaxiInfo.module.css'

const TaxiInfo = ({ title, position, state }) => {
  return (
    <div className={styles.taxiInfo}>
      <div className={styles.title}>{title}</div>
      <div>Position:</div>
      <div className={styles.coordinates}>
        <div>Latitude: {position.latitude.toFixed(4)}</div>
        <div>Longitude: {position.longitude.toFixed(4)}</div>
      </div>
      <span
        className={
          state === 'ACTIVE' ? styles.activeState : styles.inactiveState
        }
      >
        {state}
      </span>
    </div>
  )
}

TaxiInfo.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired
}

export default TaxiInfo
