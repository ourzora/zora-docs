/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useCallback, useState, useEffect } from 'react'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import SearchBar from '@theme/SearchBar'
import Toggle from '@theme/Toggle'
import useThemeContext from '@theme/hooks/useThemeContext'
import {
  useThemeConfig,
  useMobileSecondaryMenuRenderer,
  usePrevious,
} from '@docusaurus/theme-common'
import useHideableNavbar from '@theme/hooks/useHideableNavbar'
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll'
import useWindowSize from '@theme/hooks/useWindowSize'
import NavbarItem from '@theme/NavbarItem'
import Logo from '@theme/Logo'
import styles from './styles.module.css' // retrocompatible with v1
import GithubIcon from '../../../static/img/githubIcon.svg'
import NavbarMenuExit from '../../../static/img/navbarMenuExit.svg'
import HamburgerIcon from '../../../static/img/hamburgerIcon.svg'
import MobileSearchBar from '../MobileSearchBar'

const DefaultNavItemPosition = 'right'

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items
} // If split links by left/right
// if position is unspecified, fallback to right (as v1)

function splitNavItemsByPosition(items) {
  const leftItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === 'left'
  )
  const rightItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === 'right'
  )
  return {
    leftItems,
    rightItems,
  }
}

function useMobileSidebar() {
  const windowSize = useWindowSize() // Mobile sidebar not visible on hydration: can avoid SSR rendering

  const shouldRender = windowSize === 'mobile' // || windowSize === 'ssr';

  const [shown, setShown] = useState(false)
  const toggle = useCallback(() => {
    setShown((s) => !s)
  }, [])
  useEffect(() => {
    if (windowSize === 'desktop') {
      setShown(false)
    }
  }, [windowSize])
  return {
    shouldRender,
    toggle,
    shown,
  }
}

function useColorModeToggle() {
  const {
    colorMode: { disableSwitch },
  } = useThemeConfig()
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext()
  const toggle = useCallback(
    (e) => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme]
  )
  return {
    isDarkTheme,
    toggle,
    disabled: disableSwitch,
  }
}

function useSecondaryMenu({ sidebarShown, toggleSidebar }) {
  const content = useMobileSecondaryMenuRenderer()?.({
    toggleSidebar,
  })
  const previousContent = usePrevious(content)
  const [shown, setShown] = useState(() => {
    // /!\ content is set with useEffect,
    // so it's not available on mount anyway
    // "return !!content" => always returns false
    return false
  }) // When content is become available for the first time (set in useEffect)
  // we set this content to be shown!

  useEffect(() => {
    const contentBecameAvailable = content && !previousContent

    if (contentBecameAvailable) {
      setShown(true)
    }
  }, [content, previousContent])
  const hasContent = !!content // On sidebar close, secondary menu is set to be shown on next re-opening
  // (if any secondary menu content available)

  useEffect(() => {
    if (!hasContent) {
      setShown(false)
      return
    }

    if (!sidebarShown) {
      setShown(true)
    }
  }, [sidebarShown, hasContent])
  const hide = useCallback(() => {
    setShown(false)
  }, [])
  return {
    shown,
    hide,
    content,
  }
}

function NavbarMobileSidebar({ sidebarShown, toggleSidebar }) {
  useLockBodyScroll(sidebarShown)
  const items = useNavbarItems()
  const colorModeToggle = useColorModeToggle()
  const secondaryMenu = useSecondaryMenu({
    sidebarShown,
    toggleSidebar,
  })
  return (
    <div className="navbar-sidebar">
      <div className="navbar-sidebar__brand">
        <NavbarMenuExit className="navbar__menu__exit" onClick={toggleSidebar} />
        <Logo
          className="navbar__brand"
          imageClassName="navbar__logo"
          titleClassName="navbar__title"
        />
        {!colorModeToggle.disabled && sidebarShown && (
          <Toggle
            checked={colorModeToggle.isDarkTheme}
            onChange={colorModeToggle.toggle}
          />
        )}
      </div>

      <div
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenu.shown,
        })}
      >
        <div className="navbar-sidebar__item menu">
          <ul className="menu__list">
            {items.map((item, i) => (
              <NavbarItem
                mobile
                {...item}
                onClick={toggleSidebar}
                key={i}
                className={styles.menuItemLinkMobile}
              />
            ))}
          </ul>
          <a href="https://zora.co/" target="_blank" rel="noopener noreferrer">
            <p className={styles.zoraCoText}>Zora.co</p>
          </a>
          <a
            href="https://github.com/ourzora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className={styles.githubIconSideBar} />
          </a>
        </div>

        <div className="navbar-sidebar__item navbar-sidebar__item--secondary menu">
          <button
            type="button"
            className="clean-btn navbar-sidebar__back"
            onClick={secondaryMenu.hide}
          >
            <Translate
              id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel"
              description="The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"
            >
              ← Back to main menu
            </Translate>
          </button>
          {secondaryMenu.content}
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig()
  const mobileSidebar = useMobileSidebar()
  const colorModeToggle = useColorModeToggle()
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll)
  const items = useNavbarItems()
  const { leftItems } = splitNavItemsByPosition(items)
  return (
    <nav
      ref={navbarRef}
      className={clsx('navbar', 'navbar--fixed-top', {
        'navbar--dark': style === 'dark',
        'navbar--primary': style === 'primary',
        'navbar-sidebar--show': mobileSidebar.shown,
        [styles.navbarHidden]: hideOnScroll && !isNavbarVisible,
      })}
    >
      <div className="navbar__inner">
        <div className="navbar__items">
          {items?.length > 0 && (
            <button
              aria-label="Navigation bar toggle"
              className="navbar__toggle clean-btn"
              type="button"
              tabIndex={0}
              onClick={mobileSidebar.toggle}
              onKeyDown={mobileSidebar.toggle}
            >
              <HamburgerIcon />
            </button>
          )}
          <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName="navbar__title"
          />
          {leftItems.map((item, i) => (
            <NavbarItem {...item} key={i} className={styles.navbar__item__style} />
          ))}
          <SearchBar />
        </div>
        {!mobileSidebar.shouldRender && (
          <>
            <div className="navbar__items navbar__items--right">
              <a
                href="https://github.com/ourzora"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className={styles.githubIcon} />
              </a>
              {!colorModeToggle.disabled && (
                <Toggle
                  className={styles.toggle}
                  checked={colorModeToggle.isDarkTheme}
                  onChange={colorModeToggle.toggle}
                />
              )}
              <a href="https://zora.co/" target="_blank" rel="noopener noreferrer">
                <button className={styles.zoraCoButton}>Zora.co</button>
              </a>
            </div>
          </>
        )}
      </div>

      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={mobileSidebar.toggle}
      />

      {mobileSidebar.shouldRender && (
        <>
          <MobileSearchBar />
          <NavbarMobileSidebar
            sidebarShown={mobileSidebar.shown}
            toggleSidebar={mobileSidebar.toggle}
          />
        </>
      )}
    </nav>
  )
}

export default Navbar
