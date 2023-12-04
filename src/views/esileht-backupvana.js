import React from 'react'

import { Helmet } from 'react-helmet'

import UUUUusHeader from '../components/uuu-uus-header'
import './esileht-backupvana.css'

const EsilehtBackupvana = (props) => {
  return (
    <div className="esileht-backupvana-container">
      <Helmet>
        <title>EsilehtBackupvana - 3D Printimine</title>
        <meta
          name="description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
        <meta property="og:title" content="EsilehtBackupvana - 3D Printimine" />
        <meta
          property="og:description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
      </Helmet>
      <UUUUusHeader rootClassName="uuu-uus-header-root-class-name4"></UUUUusHeader>
      <div className="esileht-backupvana-hero">
        <div className="esileht-backupvana-hero1">
          <div className="esileht-backupvana-container1">
            <h1 className="esileht-backupvana-hero-heading heading1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <span className="esileht-backupvana-hero-sub-heading">
              Sed ut perspiciatis unde omnis
            </span>
            <div className="esileht-backupvana-btn-group">
              <button className="esileht-backupvana-hero-button1 button">
                VÕTA ÜHENDUST
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="esileht-backupvana-image"
          />
        </div>
      </div>
    </div>
  )
}

export default EsilehtBackupvana
