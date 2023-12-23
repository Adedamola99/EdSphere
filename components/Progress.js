import React from 'react'
import Link from 'next/link'

const Progress = () => {
  return (
    <div className="progress container">
      <Link className="header-link" href="/">Progress &gt;</Link> 

      <div className="inner-progress-box">
        <h4>Consistency</h4>
        <div className="progress-status">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  )
}

export default Progress
