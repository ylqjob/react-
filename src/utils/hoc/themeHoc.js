import React from 'react'

import ThemeCtx from '../theme'

export default function themeHoc(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <ThemeCtx.Consumer>
          {
            (value)=>(
              <div style={{color: value.color, background: value.background}}>
                <WrappedComponent {...this.props} />
              </div>
            )
          }
        </ThemeCtx.Consumer>

      )
    }
  }
}
