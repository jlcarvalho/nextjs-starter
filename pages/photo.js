import React from 'react'
import styled from 'styled-components'

import Frame from '../components/frame'

const Permalink = styled.div`
  padding: 100px;
  text-align: center;
`

const Wrap = styled.div`
  display: inline-block;
  margin: auto;
  border: 1px solid #999;
`

export default ({
  url: {
    query: { id },
  },
}) => (
  <Permalink>
    <Wrap>
      <Frame id={id} />
    </Wrap>
  </Permalink>
)
