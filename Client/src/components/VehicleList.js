import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Vehicle from './Vehicle'
import Pagination from 'react-js-pagination'
import styles from './VehicleList.module.css'
import AppContext from '../config/context'
import { PAGE_RANGE, ITEMS_PER_PAGE } from '../config/constants'

class VehicleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: 1,
      pageItems: []
    }
  }

  getOffset = page => (page - 1) * ITEMS_PER_PAGE

  handlePageChange = page => {
    this.setState({ activePage: page })
    let offset = this.getOffset(page)
    this.setState({
      pageItems: this.props.vehicles.slice(offset, offset + ITEMS_PER_PAGE)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    //Updating pageItems in context Provider, as the map will consum this info
    if (this.state.pageItems !== prevState.pageItems) {
      this.props.updateVisibleCars(this.state.pageItems)
    }
    // if props are update, we update also the state
    if (this.props.vehicles !== prevProps.vehicles) {
      this.setState({ pageItems: this.props.vehicles.slice(0, ITEMS_PER_PAGE) })
    }
  }

  render() {
    const { activePage, pageItems } = this.state
    const { vehicles } = this.props

    if (pageItems.length === 0) {
      return <div className={styles.vehicleList}>Loading...</div>
    }

    return (
      <div className={styles.vehicleList}>
        <h3>Vehicle List</h3>
        <div>
          {pageItems.map(vehicle => (
            <Vehicle key={vehicle.id} {...vehicle} />
          ))}
        </div>

        <div className={styles.paginationWrapper}>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={ITEMS_PER_PAGE}
            totalItemsCount={vehicles.length}
            pageRangeDisplayed={PAGE_RANGE}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    )
  }
}

VehicleList.propTypes = {
  vehicles: PropTypes.array.isRequired,
  updateVisibleCars: PropTypes.func
}

// To pass prop updateVisibleCars to VehicleList before component initialization
const ConnectedVehicleListUpdate = props => (
  <AppContext.Consumer>
    {({ updateVisibleCars }) => (
      <VehicleList {...props} updateVisibleCars={updateVisibleCars} />
    )}
  </AppContext.Consumer>
)

export default ConnectedVehicleListUpdate
