import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Photo = styled.div`
  width: 800px;
  overflow: hidden;
  height: 500px;
  display: inline-block;
`;

const Image = styled.div`
  float: left;
  width: 600px;
  height: 500px;
  background: #333;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  line-height: 500px;
  font-size: 40px;
`;

const Sidebar = styled.div`
  float: right;
  background: #fff;
  width: 200px;
  height: 500px;
  text-align: left;
  box-sizing: border-box;
  padding: 20px;
  font-family: Monaco;
  font-size: 11px;
`

const SidebarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export default ({ id }) => (
  <Photo>
    <Image>
      {id}
    </Image>

    <Sidebar>
      <SidebarList>
        <li>
          <Link href='/profile?id=nkzawa'>@nkzawa</Link>
          - Great photo!
        </li>
      </SidebarList>
    </Sidebar>
  </Photo>
)
