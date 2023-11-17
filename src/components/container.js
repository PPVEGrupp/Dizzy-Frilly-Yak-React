import React from 'react'

import FeatureCard1 from './feature-card1'
import FeatureCard2 from './feature-card2'
import './container.css'

const Container = (props) => {
  return (
    <div className="container-container">
      <FeatureCard1></FeatureCard1>
      <FeatureCard2 rootClassName="rootClassName"></FeatureCard2>
    </div>
  )
}

export default Container
