import React from 'react'
import './styles.css'
import { gettingStartedContent } from './content/GettingStartedCardsContent'

export const GettingStartedCards = () => {
  return (
    <div className={'getting-started-container'}>
      {gettingStartedContent.map((card, index) => (
        <a href="/docs/guides/create-auction-house" key={index}>
          <div className={'getting-started-card'}>
            <p className={'doc-number'}>{card.docNumber}</p>
            <p className={'doc-title'}>{card.docTitle}</p>
            <p className={'doc-subtopic'}>{card.docSubtopic}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
