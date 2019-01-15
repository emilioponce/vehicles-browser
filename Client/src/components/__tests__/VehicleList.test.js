import React from 'react'
import ReactDOM from 'react-dom'
import VehicleList from '../VehicleList'
import renderer from 'react-test-renderer'

const component = <VehicleList vehicles={[]} updateVisibleCars={jest.fn()} />

describe('Component VehicleList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('snapshot renders correctly', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
