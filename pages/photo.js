import React from 'react'
import styled from 'styled-components'

import Photo from '../components/frame'

const Permalink = styled.div`
  padding: 100px;
  text-align: center;
`

const Wrap = styled.div`
  display: inline-block;
  border: 1px solid #999;
  margin: auto;
`

export default ({ url: { query: { id } } }) => (
  <Permalink>
    <Wrap>
      <Photo id={id} />
    </Wrap>
  </Permalink>
)
