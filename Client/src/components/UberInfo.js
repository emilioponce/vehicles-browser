import React from 'react'
import PropTypes from 'prop-types'

import styles from './UberInfo.module.css'

const UberInfo = ({
  title,
  position,
  address,
  fuel,
  engineType,
  condition,
  name
}) => {
  return (
    <div className={styles.uberInfo}>
      <div className={styles.leftSide}>
        <div className={styles.title}>{title}</div>
        <div>Address: {address}</div>
        <div>Position:</div>
        <div className={styles.coordinates}>
          <div>Latitude: {position[1].toFixed(4)}</div>
          <div> Longitude: {position[0].toFixed(4)}</div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div>Engine: {engineType}</div>
        <div>Fuel : {fuel}</div>
        <div>{condition}</div>
        <div>Name: {name}</div>
      </div>
    </div>
  )
}

UberInfo.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.array.isRequired,
  address: PropTypes.string.isRequired,
  fuel: PropTypes.number.isRequired,
  engineType: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default UberInfo
