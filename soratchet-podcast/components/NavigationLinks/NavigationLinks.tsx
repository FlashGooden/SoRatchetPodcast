import Link from 'next/link'
import React from 'react'
import {createUseStyles} from 'react-jss'

export default function NavigationLinks() {

  const {linkContainer} = useStyles()

  return (
    <div className={linkContainer}>
        <Link href=''>Home</Link>
        <Link href=''>Episodessss</Link>
        <Link href=''>About</Link>
        <Link href=''>Bio</Link>
        <Link href=''>Shop</Link>
        <Link href=''>Contact</Link>
  </div>
  )
};

const useStyles = createUseStyles({
  linkContainer: {
    marginTop: '3rem',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
})
