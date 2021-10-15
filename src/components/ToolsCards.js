import React from 'react'
import './styles.css'
import { toolsCardsContent } from './content/ToolsCardsContent'

export const ToolsCards = () => {
  return (
    <div className={'tools-container'}>
      {toolsCardsContent.map((card, index) => (
        <div className={'tools-card'} key={index}>
          <a href={card.toolsLink}>
            <div className={'tools-title-flexbox'}>
              <p className={'tools-title'}>{card.toolsTitle}</p>
              <p className={'tools-version'}>{card.toolsVersion}</p>
            </div>
            <p className={'tools-paragraph'}>{card.toolsParagraph}</p>
          </a>
        </div>
      ))}
    </div>
  )
}
