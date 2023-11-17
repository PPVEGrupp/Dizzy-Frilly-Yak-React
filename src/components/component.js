import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard2 from './feature-card2'
import FeatureCard1 from './feature-card1'
import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`app-component-container ${props.rootClassName} `}>
      <FeatureCard2 rootClassName="rootClassName1" className=""></FeatureCard2>
      <FeatureCard1 className=""></FeatureCard1>
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
