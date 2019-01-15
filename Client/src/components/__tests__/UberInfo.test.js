import React from 'react'
import ReactDOM from 'react-dom'
import UberInfo from '../UberInfo'
import renderer from 'react-test-renderer'

const component = (
  <UberInfo
    title="UBER"
    position={[41.5532, 2.0088]}
    address="Address 1 Barcelona"
    fuel={34}
    engineType="CE"
    condition="Exterior: UNACCEPTABLE | Interior:GOOD"
    name="1234-ABC"
  />
)

describe('Component UberInfo', () => {
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
