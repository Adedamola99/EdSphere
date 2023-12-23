import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Team = () => {
  return (
    <div className="team container">
      <Link className="header-link" href="/">Team member &gt;</Link> 

      <div className="team_images">
        <Image 
            src='/assets/images/Capture 2.PNG'
            alt='logo'
            width={55}
            height={55}
            className='object-contain'
        />

        <Image 
            src='/assets/images/Capture 4.PNG'
            alt='logo'
            width={55}
            height={55}
            className='object-contain'
        />

        <Image 
            src='/assets/images/Capture 31432.PNG'
            alt='logo'
            width={55}
            height={55}
            className='object-contain'
        />

        <Image 
            src='/assets/images/Capture 6.PNG'
            alt='logo'
            width={55}
            height={55}
            className='object-contain'
        />

        <Image 
            src='/assets/images/sasuke.PNG'
            alt='logo'
            width={55}
            height={55}
            className='object-contain'
        />

        <Image 
            src='/assets/images/azdiacf.PNG'
            alt='logo'
            width={55}
            height={55}
            className='object-contain'
        />

        <Image 
            src='/assets/images/qefqwv.PNG'
            alt='logo'
            width={55}
            height={55}
            className='object-contain'
        />
      </div>
    </div>
  )
}

export default Team
