import React, { Component } from 'react'
import AppContext from './context'

class AppProvider extends Component {
  state = {
    cars: []
  }

  updateVisibleCars = cars => {
    this.setState({ cars })
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          updateVisibleCars: this.updateVisibleCars
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppProvider
