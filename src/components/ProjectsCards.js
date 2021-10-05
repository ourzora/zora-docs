import React from 'react'
import './styles.css'
import { projectsContent } from './content/ProjectsCardsContent'

export default function ProjectsCards() {
  return (
    <div className={'projectContainer'}>
      {projectsContent.map((p, index) => (
        <div key={index}>
          <a href={p.link}>
            <img src={p.project} className={'projectCard'}/>
          </a>
        </div>
      ))}
    </div>
  )
}
