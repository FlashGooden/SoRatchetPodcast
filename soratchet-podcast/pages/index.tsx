import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavigationLinks from '../components/NavigationLinks/NavigationLinks'
import { useState } from 'react'
import styles from '../styles/Home.module.scss'
import menuStyles from '../styles/Menu.module.scss'
import {createUseStyles} from 'react-jss'
import { useWindowSize } from 'usehooks-ts'
import { motion, AnimatePresence } from "framer-motion"
import {FramerMenuButton} from "../components/FramerMenu/FramerMenuButton"


export default function Home() {

  const [menuToggle, setMenuToggle] = useState(false)
  const menuToggleHandler = () => {
    console.log('clicked menu toggler', menuToggle)
    setMenuToggle(!menuToggle)
  }
  const {width} = useWindowSize()
  const {container, heading, main, menu, linkContainer, line} = useStyles()
  const menuCloseStyles = `${line} ${menuToggle ? 'close' : ''}`
  const MEDIUM_BREAKPOINT = 768
  const isMediumScreen = width >= MEDIUM_BREAKPOINT

  return (
    <div className={container}>
      <Head>
        <title>The Sophisticatedly Ratchet Podcast - Giving the real in a world of fake</title>
        <meta name="The Sophisticatedly Ratchet Podcast" content="The Sophisticatedly Ratchet Podcast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={main}>
        <>
          <h1 className={heading}>The Sophisticatedly Ratchet Podcast</h1>

          {/* <FramerMenuButton /> */}
          {/* <div className={`${menu}`}>
            <button onClick={menuToggleHandler}>
              <div className={menuCloseStyles}></div>
              <div className={menuCloseStyles}></div>
              <div className={menuCloseStyles}></div>
            </button>
          </div> */}

          { isMediumScreen && <NavigationLinks /> }
        </>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


const useStyles = createUseStyles({
  container: {
    padding: '0.2rem 1rem',
  },
  heading: {
    top: 0,
    position: 'absolute',
    // border: '2px solid red',
    fontSize: '1.875rem',
    lineHeight: '1',
    textAlign: 'center',
  },
  main: {
    minHeight: '100vh',
    marginTop: '1.25rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    // border: '2px solid blue'
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '40px',
    backgroundColor: 'red',
    height: '40px',
    border: '2px solid orange'
  },
  line: {
    width: 30,
    height: 2,
    backgroundColor: 'white',
    margin: [6, 0],
    transition: 'all 0.3s ease',

    '&.close': {
      backgroundColor: 'transparent',
    },

    '&:before' : {
      position: 'absolute',
      width: 50,
      height: 2,
      backgroundColor: 'white',
      content: '""',
    },
    '&:after' : {
      position: 'absolute',
      width: 30,
      height: 2,
      backgroundColor: 'white',
      content: '""',
    },
  },
})

