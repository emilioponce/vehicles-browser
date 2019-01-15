import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import AppContext from '../config/context'
import {
  BARCELONA_CENTER,
  DEFAULT_ZOOM,
  UBER_TYPE,
  TAXI_TYPE
} from '../config/constants'

import styles from './VehicleMap.module.css'

class VehicleMap extends Component {
  getMarker = car => {
    let type = car.type
    let coordinates =
      type === TAXI_TYPE
        ? [car.coordinate.latitude, car.coordinate.longitude]
        : type === UBER_TYPE
        ? [car.coordinates[1], car.coordinates[0]]
        : null

    return (
      <Marker key={car.id} position={coordinates}>
        <Popup>
          <div>
            <span className={styles.title}>Type:</span> {car.type}
          </div>
          <div>
            <div className={styles.title}>Coordinates:</div>
            <div className={styles.coordinates}>
              {coordinates[0].toFixed(4)},{coordinates[1].toFixed(4)}
            </div>
          </div>
        </Popup>
      </Marker>
    )
  }

  render() {
    return (
      <AppContext.Consumer>
        {({ cars }) => (
          <Map center={BARCELONA_CENTER} zoom={DEFAULT_ZOOM}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <div>{cars.map(car => this.getMarker(car))}</div>
          </Map>
        )}
      </AppContext.Consumer>
    )
  }
}

export default VehicleMap
