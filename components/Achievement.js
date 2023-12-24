import React from 'react'
import Link from 'next/link'

const Achievement = () => {
  return (
    <div className="achievement container">
      <Link className="header-link" href="/">Latest Achievement &gt;</Link> 
      <p className="xp-box">SS2 : Best in Mathematics</p>
      <p className="xp-box">SS1 : Best in English</p>
      <p className="xp-box">JSS1 : Best in Biology</p>
    </div>
  )
}

export default Achievement
