import React from 'react'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import { GettingStartedCards } from '../components/GettingStartedCards'
import { ToolsCards } from '../components/ToolsCards'
import ProjectsCards from '../components/ProjectsCards'
import BannerImage from '../../static/img/bannerImage.jpg'

export default function Home() {
  return (
    <Layout>
      <div>
        <img src={BannerImage}></img>
      </div>
      <main className={styles.layout}>
        <div className={styles.layoutFlexBox}>
          <div className={styles.gettingStartedFlexBox}>
            <p className={styles.gettingStarted}>Getting Started</p>
          </div>
          <GettingStartedCards />
          <p className={styles.tools}>Tools</p>
          <ToolsCards />
          <p className={styles.projects}>Projects Building on ZORA</p>
          <ProjectsCards />
        </div>
      </main>
    </Layout>
  )
}
