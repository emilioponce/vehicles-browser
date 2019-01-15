import React from 'react'
import ReactDOM from 'react-dom'
import TaxiInfo from '../TaxiInfo'
import renderer from 'react-test-renderer'

const component = (
  <TaxiInfo
    position={{
      latitude: 41.5532,
      longitude: 2.10088
    }}
    state="ACTIVE"
    title="TAXI"
  />
)
describe('Component TaxiInfo', () => {
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
