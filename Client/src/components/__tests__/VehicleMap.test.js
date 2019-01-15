import React from 'react'
import ReactDOM from 'react-dom'
import VehicleMap from '../VehicleMap'
import renderer from 'react-test-renderer'

jest.mock('../VehicleMap')

const component = <VehicleMap />
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
