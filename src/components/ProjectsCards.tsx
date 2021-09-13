import React from 'react'
import styles from './HomepageFeatures.module.css'
import PartyBid from '@site/static/img/projects/partyBid.png'
import PunkHouse from '@site/static/img/projects/punkHouse.png'
import Mirror from '@site/static/img/projects/mirror.png'
import BlitHouse from '@site/static/img/projects/blitHouse.png'
import Fwb from '@site/static/img/projects/fwb.png'
import Catalog from '@site/static/img/projects/catalog.png'
import BrightMoments from '@site/static/img/projects/brightMoments.png'
import Artiva from '@site/static/img/projects/artiva.png'

export default function ProjectsCards() {
  return (
    <div className={styles.projectContainer}>
      <img src={PartyBid} className={styles.projectCard} />
      <img src={PunkHouse} className={styles.projectCard} />
      <img src={Mirror} className={styles.projectCard} />
      <img src={BlitHouse} className={styles.projectCard} />
      <img src={Fwb} className={styles.projectCard} />
      <img src={Catalog} className={styles.projectCard} />
      <img src={BrightMoments} className={styles.projectCard} />
      <img src={Artiva} className={styles.projectCard} />
    </div>
  )
}
