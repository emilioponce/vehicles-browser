import React, { Component } from 'react'
import Header from './Header'
import VehicleList from './VehicleList'
import VehicleMap from './VehicleMap'
import AppProvider from '../config/AppProvider'
import { UBER_TYPE } from '../config/constants'
import { getTaxis, getUbers } from '../api'

import styles from './App.module.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    Promise.all([getTaxis(), getUbers()])
      .then(([taxis, ubers]) => {
        // taxis have type, ubers don't. We add the type.
        let ubersWithType = ubers.data.placemarks.map(car => {
          car.type = UBER_TYPE
          return car
        })

        // unique array for both kind of vehicles
        let vehicles = [...taxis.data.poiList, ...ubersWithType]
        this.setState({
          vehicles
        })
      })
      .catch(error => console.log('Error retrieving cars'))
  }

  render() {
    const { vehicles } = this.state
    return (
      <div id={styles.page}>
        <div className={styles.header}>
          <Header />
        </div>
        <AppProvider>
          <div className={styles.list}>
            <VehicleList vehicles={vehicles} />
          </div>
          <div className={styles.map}>
            <VehicleMap />
          </div>
        </AppProvider>
      </div>
    )
  }
}

export default App
