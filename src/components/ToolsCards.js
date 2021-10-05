import React from 'react'
import './styles.css'
import { toolsCardsContent } from './content/ToolsCardsContent'

export const ToolsCards = () => {
  return (
    <div className={'getting-started-container'}>
      {toolsCardsContent.map((card, index) => (
        <a
          className={'getting-started-hover'}
          href="/docs/developer-tools/media-rendering/nft-hooks"
          key={index}
        >
          <div className={'tools-card'}>
            <div className={'tools-title-flexbox'}>
              <p className={'tools-title'}>{card.toolsTitle}</p>
              <p className={'tools-version'}>{card.toolsVersion}</p>
            </div>
            <p className={'tools-paragraph'}>{card.toolsParagraph}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
