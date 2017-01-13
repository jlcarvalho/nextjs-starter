import React from 'react'
import styled from 'styled-components'

import Photo from './frame'

const Shim = styled.div`
  position: fixed;
  background: rgba(0,0,0,.65);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

const PhotoWrapper = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -250px;
`

export default class extends React.Component {
  dismiss (e) {
    if (this._shim === e.target ||
       this._photoWrap === e.target) {
      if (this.props.onDismiss) {
        this.props.onDismiss()
      }
    }
  }

  render () {
    return (
      <Shim ref={el => (this._shim = el)} onClick={(e) => this.dismiss(e)}>
        <PhotoWrapper ref={el => (this._photoWrap = el)}>
          <Photo id={this.props.id} />
        </PhotoWrapper>
      </Shim>
    )
  }
}
