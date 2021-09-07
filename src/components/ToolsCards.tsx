import React from 'react'
import './styles.css'

export const ToolsCards = () => {
  return (
    <div className={'getting-started-container'}>
      <div className={'tools-card'}>
        <div className={'tools-title-flexbox'}>
          <text className={'tools-title'}>NFT Components</text>
          <p className={'tools-version'}>v1.2.3</p>
        </div>
        <text className={'tools-paragraph'}>
          A tool for developers to simply and reliably interact with the Zora
          Protocol.
        </text>
      </div>
    </div>
  )
}
