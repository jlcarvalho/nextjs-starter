import React from 'react'
import styled from 'styled-components'

import Frame, { Photo } from './frame'

const Shim = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.65);
`

const PhotoWrapper = styled.div`
  ${Photo} {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`

export default class extends React.Component {
  dismiss(e) {
    if (this._shim === e.target || this._photoWrap === e.target) {
      if (this.props.onDismiss) {
        this.props.onDismiss()
      }
    }
  }

  render() {
    return (
      <Shim ref={el => (this._shim = el)} onClick={e => this.dismiss(e)}>
        <PhotoWrapper ref={el => (this._photoWrap = el)}>
          <Frame id={this.props.id} />
        </PhotoWrapper>
      </Shim>
    )
  }
}
