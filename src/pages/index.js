import React from 'react'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import { GettingStartedCards } from '../components/GettingStartedCards'
import { ToolsCards } from '../components/ToolsCards'
import { ShaderComponent } from '../components/ShaderComponent'
import ProjectsCards from '../components/ProjectsCards'
import HomepageLogo from '../../static/img/homepageLogo.svg'

export default function Home() {
  return (
    <Layout>
      <ShaderComponent />
      <div>
        <HomepageLogo className={styles.logoText} />
        <h2 className={styles.headerSubtitle}>THE NFT MARKETPLACE PROTOCOL</h2>
      </div>
      <main className={styles.layout}>
        <div className={styles.layoutFlexBox}>
          <div className={styles.gettingStartedFlexBox}>
            <p className={styles.gettingStarted}>Getting Started</p>
            <a className={styles.viewAllLink} href="docs/guides/connect-wallet-react">
              <button className={styles.viewAll}>VIEW ALL</button>
            </a>
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
