import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export const Photo = styled.div`
  display: inline-block;
  width: 800px;
  height: 500px;
  overflow: hidden;
`

const Image = styled.div`
  width: 600px;
  height: 500px;
  float: left;
  background: #333;
  color: #fff;
  font-size: 40px;
  line-height: 500px;
  text-align: center;
  vertical-align: middle;
`

const Sidebar = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 500px;
  padding: 20px;
  background: #fff;
  font-family: Monaco, sans-serif;
  font-size: 11px;
  text-align: left;
`

const SidebarList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export default ({ id }) => (
  <Photo>
    <Image>{id}</Image>

    <Sidebar>
      <SidebarList>
        <li>
          <Link href="/profile?id=nkzawa">
            <a href="/profile?id=nkzawa">@nkzawa</a>
          </Link>
          - Great photo!
        </li>
      </SidebarList>
    </Sidebar>
  </Photo>
)
