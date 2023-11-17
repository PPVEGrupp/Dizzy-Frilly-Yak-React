import React from 'react'

import { Helmet } from 'react-helmet'

import './teenused.css'

const Teenused = (props) => {
  return (
    <div className="teenused-container">
      <Helmet>
        <title>Teenused - 3D Printimine</title>
        <meta
          name="description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
        <meta property="og:title" content="Teenused - 3D Printimine" />
        <meta
          property="og:description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
      </Helmet>
    </div>
  )
}

export default Teenused
