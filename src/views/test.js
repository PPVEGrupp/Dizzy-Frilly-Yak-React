import React from 'react'

import { Helmet } from 'react-helmet'

import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Helmet>
        <title>Test - 3D Printimine</title>
        <meta
          name="description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
        <meta property="og:title" content="Test - 3D Printimine" />
        <meta
          property="og:description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
      </Helmet>
    </div>
  )
}

export default Test
