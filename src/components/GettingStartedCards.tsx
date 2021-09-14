import React from 'react'
import './styles.css'

export const GettingStartedCards = () => {
  const content = [
    {
      docNumber: '01',
      docTitle: 'Build a NFT auction house in 30 minutes →',
      docSubtopic: 'GRAPHQL',
    },
    {
      docNumber: '02',
      docTitle: 'Build a NFT auction house in 30 minutes →',
      docSubtopic: 'GRAPHQL',
    },
    {
      docNumber: '03',
      docTitle: 'Build a NFT auction house in 30 minutes →',
      docSubtopic: 'GRAPHQL',
    },
  ]
  return (
    <div className={'getting-started-container'}>
      {content.map((card, index) => (
        <a className={'getting-started-hover'} href='/docs/guides/create-auction-house'>
          <div key={index} className={'getting-started-card'}>
            <p className={'doc-number'}>{card.docNumber}</p>
            <p className={'doc-title'}>{card.docTitle}</p>
            <p className={'doc-subtopic'}>{card.docSubtopic}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
