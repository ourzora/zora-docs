import React from 'react'
import './styles.css'
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
    <div className={'projectContainer'}>
      <img src={PartyBid} className={'projectCard'} />
      <img src={PunkHouse} className={'projectCard'} />
      <img src={Mirror} className={'projectCard'} />
      <img src={BlitHouse} className={'projectCard'} />
      <img src={Fwb} className={'projectCard'} />
      <img src={Catalog} className={'projectCard'} />
      <img src={BrightMoments} className={'projectCard'} />
      <img src={Artiva} className={'projectCard'} />
    </div>
  )
}
