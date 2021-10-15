import React from 'react'
import './styles.css'
import { projectsContent } from './content/ProjectsCardsContent'

export default function ProjectsCards() {
  return (
    <div className={'projectContainer'}>
      {projectsContent.map((p, index) => (
        <div key={index} className={'projectCard'}>
          <a href={p.link} target="_blank" rel="noreferer noopener">
            <img src={p.project} className={'projectCardImage'} />
          </a>
        </div>
      ))}
    </div>
  )
}
