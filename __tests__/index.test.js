/* global it, expect, describe */

import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import renderer from 'react-test-renderer'
import App from '../pages/index'

configure({ adapter: new Adapter() })

const photos = new Array(15).fill(0).map((v, k) => k + 1)
const url = { pathname: '/', query: {} }

describe('With Enzyme', () => {
  it('App have 15 photos', () => {
    const app = shallow(<App photos={photos} url={url} />)

    expect(app.find('.photo').length).toBe(15)
  })
})

describe('With Snapshot Testing', () => {
  it('App have 15 photos', () => {
    const component = renderer.create(<App photos={photos} url={url} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
