import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  padding: 100px;
`

const Heading = styled.h1`
  font: 15px Monaco, sans-serif;
`

const Username = styled.b`
  color: blue;
`

export default ({
  url: {
    query: { id },
  },
}) => (
  <Main>
    <Heading>
      User profile: <Username>{id}</Username>
    </Heading>
  </Main>
)
