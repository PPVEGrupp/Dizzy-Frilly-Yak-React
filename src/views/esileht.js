import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './esileht.css'

const Esileht = (props) => {
  return (
    <div className="esileht-container">
      <Helmet>
        <title>3D Printimine</title>
        <meta
          name="description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
        <meta property="og:title" content="3D Printimine" />
        <meta
          property="og:description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="esileht-hero">
        <div className="esileht-hero1">
          <div className="esileht-container1">
            <h1 className="esileht-hero-heading heading1">
              Generate a Professional Website for Your 3D Printing Business
            </h1>
            <span className="esileht-hero-sub-heading">
              Create an Impressive Online Presence
            </span>
            <div className="esileht-btn-group">
              <button className="esileht-hero-button1 button">
                Get Started
              </button>
              <button className="esileht-hero-button2 button">
                Learn More →
              </button>
            </div>
          </div>
          <iframe
            src="https://youtu.be/xpHFnRgAUbE"
            className="esileht-iframe"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Esileht
