import React from 'react'
import Link from 'next/link'

const Achievement = () => {
  return (
    <div className="achievement container">
      <Link className="header-link" href="/">Latest Achievement &gt;</Link> 
      <p className="xp-box"> Last week <span>30XP</span></p>
    </div>
  )
}

export default Achievement
