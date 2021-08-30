import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import useThemeContext from '@theme/hooks/useThemeContext'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  const { isDarkTheme } = useThemeContext();
  return (
    <header className={isDarkTheme ? clsx('hero hero--primary', styles.heroBannerDark) : clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}OS☼☽</h1>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <Layout
      title={`ZoraOS☼☽`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main className={styles.layout}>
        <HomepageFeatures />
         
      </main>
    </Layout>
  )
}
