import React from 'react'

import { Helmet } from 'react-helmet'

import UUUUusHeader from '../components/uuu-uus-header'
import './esilehtvana.css'

const Esilehtvana = (props) => {
  return (
    <div className="esilehtvana-container">
      <Helmet>
        <title>Esilehtvana - 3D Printimine</title>
        <meta
          name="description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
        <meta property="og:title" content="Esilehtvana - 3D Printimine" />
        <meta
          property="og:description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
      </Helmet>
      <UUUUusHeader rootClassName="uuu-uus-header-root-class-name"></UUUUusHeader>
      <div className="esilehtvana-hero">
        <div className="esilehtvana-hero1">
          <div className="esilehtvana-container1">
            <h1 className="esilehtvana-hero-heading heading1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <span className="esilehtvana-hero-sub-heading">
              Sed ut perspiciatis unde omnis
            </span>
            <div className="esilehtvana-btn-group">
              <button className="esilehtvana-hero-button1 button">
                VÕTA ÜHENDUST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Esilehtvana
