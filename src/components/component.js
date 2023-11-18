import React from 'react'

import PropTypes from 'prop-types'

import Component1 from './component1'
import Icon from './icon'
import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`app-component-container ${props.rootClassName} `}>
      <div className="app-component-feature-card">
        <Component1
          rootClassName="component1-root-class-name1"
          className=""
        ></Component1>
        <div className="app-component-container1">
          <h2 className="app-component-text">{props.title}</h2>
          <span className="">{props.description}</span>
        </div>
      </div>
      <div className="app-component-feature-card1">
        <Icon rootClassName="icon-root-class-name1" className=""></Icon>
        <div className="app-component-container2">
          <h2 className="app-component-text2">{props.heading}</h2>
          <span className="">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'PPVE Grupp 3D pakub 3D disainimist vastavalt kliendi vajadustele.',
  rootClassName: '',
  title: '3D printimine',
  heading: '3D disain',
  description: 'PPVE Grupp 3D prindib nii prototüüpe kui ka seeriatellimusi.',
  rootClassName1: '',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  rootClassName1: PropTypes.string,
}

export default AppComponent
