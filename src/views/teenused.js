import React from 'react'

import { Helmet } from 'react-helmet'

import './teenused.css'

const Teenused = (props) => {
  return (
    <div className="teenused-container">
      <Helmet>
        <title>Teenused - Dizzy Frilly Yak</title>
        <meta property="og:title" content="Teenused - Dizzy Frilly Yak" />
      </Helmet>
    </div>
  )
}

export default Teenused
