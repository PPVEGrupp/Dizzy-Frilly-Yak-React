import React from 'react'

import { Helmet } from 'react-helmet'

import UUUUusHeader from '../components/uuu-uus-header'
import './esileht-backup.css'

const EsilehtBackup = (props) => {
  return (
    <div className="esileht-backup-container">
      <Helmet>
        <title>EsilehtBackup - 3D Printimine</title>
        <meta
          name="description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
        <meta property="og:title" content="EsilehtBackup - 3D Printimine" />
        <meta
          property="og:description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
      </Helmet>
      <UUUUusHeader rootClassName="uuu-uus-header-root-class-name4"></UUUUusHeader>
      <div className="esileht-backup-hero">
        <div className="esileht-backup-hero1">
          <div className="esileht-backup-container1">
            <h1 className="esileht-backup-hero-heading heading1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <span className="esileht-backup-hero-sub-heading">
              Sed ut perspiciatis unde omnis
            </span>
            <div className="esileht-backup-btn-group">
              <button className="esileht-backup-hero-button1 button">
                VÕTA ÜHENDUST
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="/leonardo-300h.png"
            className="esileht-backup-image"
          />
        </div>
      </div>
    </div>
  )
}

export default EsilehtBackup
