/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import styles from './styles.module.css';
import QuestionsIcon from '../../../static/img/questionsIcon.svg';
import TwitterIcon from '../../../static/img/twitterIcon.svg';
import ZoraLogo from '../../../static/img/homepageLogo.svg';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinksFlexbox}>
        <div className={styles.textFlexbox}>
          <QuestionsIcon className={styles.footerIcon} />
          <h3 className={styles.footerTitle}>Questions?</h3>
          <p className={styles.footerParagraph}>
            Get help in the #developers channel on {''}
            <a
              className={styles.footerLink}
              href='https://zora.community'
              target='_blank'
              rel='noopener noreferrer'
            >
              Discord
            </a>
            .
          </p>
        </div>
        <div className={styles.textFlexbox}>
          <TwitterIcon className={styles.footerIcon} />
          <h3 className={styles.footerTitle}>Stay updated</h3>
          <p className={styles.footerParagraph}>
            Follow us on {''}
            <a
              className={styles.footerLink}
              href='https://twitter.com/ourzora'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
            {''}
            for release updates.
          </p>
        </div>
      </div>
      <div className={styles.logoFlexbox}>
        <ZoraLogo className={styles.zoraLogo} />
      </div>
    </div>
  );
}

export default Footer;
