import React from 'react'
import ReactDOM from 'react-dom'
import Vehicle from '../Vehicle'
import renderer from 'react-test-renderer'

const component = (
  <Vehicle
    type="TAXI"
    coordinate={{ latitude: 41.5574, longitude: 2.0028 }}
    state="Exterior: GOOD | Interior:GOOD"
  />
)
describe('Component Vehicle', () => {
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
