import React from 'react'
import PropTypes from 'prop-types'
import TaxiInfo from './TaxiInfo'
import UberInfo from './UberInfo'
import styles from './Vehicle.module.css'
import { TAXI_TYPE, UBER_TYPE } from '../config/constants'
import uberImage from '../images/uber.svg'
import taxiImage from '../images/taxi.svg'

const Vehicle = props => {
  let { type } = props

  const getCarInfoComponent = type => {
    return type === TAXI_TYPE ? (
      <TaxiInfo title={type} position={props.coordinate} state={props.state} />
    ) : type === UBER_TYPE ? (
      <UberInfo
        title={type}
        position={props.coordinates}
        address={props.address}
        fuel={props.fuel}
        engineType={props.engineType}
        condition={
          'Exterior: ' + props.exterior + ' | Interior:' + props.interior
        }
        name={props.name}
      />
    ) : null
  }

  // conditional rendering depending on type
  let uberComponent = getCarInfoComponent(type)

  return (
    <div className={styles.vehicle}>
      <div className={styles.thumb}>
        <img
          src={
            type === TAXI_TYPE
              ? taxiImage
              : type === UBER_TYPE
              ? uberImage
              : null
          }
          className={styles.image}
          alt="vehicle"
        />
      </div>
      <div className={styles.info}>{uberComponent}</div>
    </div>
  )
}

Vehicle.propTypes = {
  type: PropTypes.string.isRequired,
  coordinate: PropTypes.object,
  state: PropTypes.string,
  address: PropTypes.string,
  fuel: PropTypes.number,
  engineType: PropTypes.string,
  condition: PropTypes.string,
  name: PropTypes.string
}

export default Vehicle
