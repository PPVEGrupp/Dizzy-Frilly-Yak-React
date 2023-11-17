import React from 'react'

import AppComponent from './component'
import './container1.css'

const Container1 = (props) => {
  return (
    <div id="TeenusteNimekiri" className="container1-container list">
      <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
    </div>
  )
}

export default Container1
