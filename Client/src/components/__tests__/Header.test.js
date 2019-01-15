import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../Header'
import renderer from 'react-test-renderer'

const component = <Header />
describe('Component Header', () => {
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
