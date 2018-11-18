import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'

import Modal from '../components/modal'

const List = styled.div`
  padding: 50px;
  text-align: center;
`

const Photo = styled.div`
  display: inline-block;
`

const PhotoLink = styled.a`
  display: inline-block;
  width: 250px;
  height: 250px;
  margin: 10px;
  border: 2px solid transparent;
  background: #eee;
  color: #333;
  line-height: 250px;
  vertical-align: middle;
  cursor: pointer;

  &:hover: {
    border-color: blue;
  }
`

export default class extends React.Component {
  static getInitialProps() {
    return {
      photos: new Array(15).fill(0).map((v, k) => k + 1),
    }
  }

  constructor(props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  // handling espace close
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown(e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      window.history.back()
    }
  }

  dismissModal() {
    Router.push('/')
  }

  showPhoto(e, id) {
    e.preventDefault()
    Router.push(`/?photoId=${id}`, `/photo?id=${id}`)
  }

  render() {
    const { url, photos } = this.props

    return (
      <List>
        {url.query.photoId && (
          <Modal id={url.query.photoId} onDismiss={() => this.dismissModal()} />
        )}
        {photos.map(id => (
          <Photo key={id} className="photo">
            <PhotoLink href={`/photo?id=${id}`} onClick={e => this.showPhoto(e, id)}>
              {id}
            </PhotoLink>
          </Photo>
        ))}
      </List>
    )
  }
}
