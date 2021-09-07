import React from 'react'
import './styles.css'

export const ToolsCards = () => {
  const content = [
    {
      toolsTitle: 'NFT Components',
      toolsVersion: 'v1.2.3',
      toolsParagraph:
        'A tool for developers to simply and reliably interact with the Zora Protocol.',
    },
    {
      toolsTitle: 'NFT Components',
      toolsVersion: 'v1.2.3',
      toolsParagraph:
        'A tool for developers to simply and reliably interact with the Zora Protocol.',
    },
    {
      toolsTitle: 'NFT Components',
      toolsVersion: 'v1.2.3',
      toolsParagraph:
        'A tool for developers to simply and reliably interact with the Zora Protocol.',
    },
  ]

  return (
    <div className={'getting-started-container'}>
      {content.map((card, index) => (
        <div key={index} className={'tools-card'}>
          <div className={'tools-title-flexbox'}>
            <text className={'tools-title'}>{card.toolsTitle}</text>
            <p className={'tools-version'}>{card.toolsVersion}</p>
          </div>
          <text className={'tools-paragraph'}>{card.toolsParagraph}</text>
        </div>
      ))}
    </div>
  )
}
