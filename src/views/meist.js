import React from 'react'

import { Helmet } from 'react-helmet'

import './meist.css'

const Meist = (props) => {
  return (
    <div className="meist-container">
      <Helmet>
        <title>Meist - Dizzy Frilly Yak</title>
        <meta property="og:title" content="Meist - Dizzy Frilly Yak" />
      </Helmet>
    </div>
  )
}

export default Meist
