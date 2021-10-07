/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import styles from './styles.module.css'
import QuestionsIcon from '../../../static/img/questionsIcon.svg'
import TwitterIcon from '../../../static/img/twitterIcon.svg'
import ZoraLogo from '../../../static/img/homepageLogo.svg'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinksFlexbox}>
        <a
          className={styles.textFlexbox}
          href="https://zora.community"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.footerTitleFlexbox}>
            <QuestionsIcon className={styles.footerIcon} />
            <h3 className={styles.footerTitle}>Questions?</h3>
          </div>
          <p className={styles.footerParagraph}>
            Get help in the #developers channel on Discord.
          </p>
        </a>
        <a
          href="https://twitter.com/ourzora"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.textFlexbox}
        >
          <div className={styles.footerTitleFlexbox}>
            <TwitterIcon className={styles.footerIcon} />
            <h3 className={styles.footerTitle}>Stay updated</h3>
          </div>
          <p className={styles.footerParagraph}>
            Follow us on Twitter for release updates.
          </p>
        </a>
      </div>
      <div className={styles.logoFlexbox}>
        <ZoraLogo className={styles.zoraLogo} />
      </div>
    </div>
  )
}

export default Footer
