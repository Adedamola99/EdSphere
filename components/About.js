import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div className="about container">
      <Link className="header-link" href="/">About &gt;</Link> 
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos molestiae eius velit voluptates iusto aut quasi, quibusdam animi ab rem repellendus maxime tempore, nesciunt vitae expedita doloremque aliquam, quas assumenda.
      </p>
    </div>
  )
}

export default About
