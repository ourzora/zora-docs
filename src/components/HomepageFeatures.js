import React from 'react'
import styles from './HomepageFeatures.module.css'
import useThemeContext from '@theme/hooks/useThemeContext'

export default function HomepageFeatures() {
  const { isDarkTheme } = useThemeContext()
  const features = ['Smart contracts', 'ZDK', 'Subgraph']

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={isDarkTheme ? styles.cardsDark : styles.cards}
          >
            <text>{feature}</text>
          </div>
        ))}
      </div>
    </section>
  )
}
