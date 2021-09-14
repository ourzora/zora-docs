import React from 'react'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import { GettingStartedCards } from '../components/GettingStartedCards'
import { ToolsCards } from '../components/ToolsCards'
import { ShaderComponent } from '../components/ShaderComponent'
import ProjectsCards from '../components/ProjectsCards'

export default function Home() {
  return (
    <Layout
      title={`ZoraOS☼☽`}
      description="Description will go into a meta tag in <head />"
    >
      <ShaderComponent />
      <div>
        <h1 className={styles.logoText}>☀☾</h1>
        <h2 className={styles.headerSubtitle}>ZORA FOR DEVELOPERS</h2>
      </div>
      <main className={styles.layout}>
        <div className={styles.gettingStartedFlexBox}>
          <p className={styles.gettingStarted}>Getting started</p>
          <p className={styles.viewAll}>VIEW ALL</p>
        </div>
        <GettingStartedCards />
        <p className={styles.tools}>Tools</p>
        <ToolsCards />
        <p className={styles.projects}>Projects using ZORA</p>
        <ProjectsCards />
      </main>
    </Layout>
  )
}
