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
        <div key={index} className={'getting-started-card'}>
          <text className={'doc-number'}>{card.docNumber}</text>
          <text className={'doc-title'}>{card.docTitle}</text>
          <text className={'doc-subtopic'}>{card.docSubtopic}</text>
        </div>
      ))}
    </div>
  )
}
