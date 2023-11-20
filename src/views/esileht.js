import React from 'react'

import { Helmet } from 'react-helmet'

import UUUUusHeader from '../components/uuu-uus-header'
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
      <UUUUusHeader rootClassName="uuu-uus-header-root-class-name"></UUUUusHeader>
      <div className="esileht-hero">
        <div className="esileht-hero1">
          <div className="esileht-container1">
            <h1 className="esileht-hero-heading heading1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <span className="esileht-hero-sub-heading">
              Sed ut perspiciatis unde omnis
            </span>
            <div className="esileht-btn-group">
              <button className="esileht-hero-button1 button">
                VÕTA ÜHENDUST
              </button>
            </div>
            <img
              src="/leonardo-300h.png"
              alt="image"
              className="esileht-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Esileht
