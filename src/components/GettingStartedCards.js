import React from 'react'
import './styles.css'
import { gettingStartedContent } from './content/GettingStartedCardsContent'

export const GettingStartedCards = () => {
  return (
    <div className={'getting-started-container'}>
      {gettingStartedContent.map((card, index) => (
        <div className={'getting-started-card'}>
          <a href={card.docLink} key={index}>
            <p className={'doc-number'}>{card.docNumber}</p>
            <p className={'doc-title'}>{card.docTitle}</p>
            <p className={'doc-subtopic'}>{card.docSubtopic}</p>
          </a>
        </div>
      ))}
    </div>
  )
}
