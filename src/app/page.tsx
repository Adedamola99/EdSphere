'use client'
import React, { useState } from 'react'
import HomePage from './home/page'
import LoginPage from './login/page'

const page = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <div>
      {
        loggedIn ? (
          <HomePage />
        ) :  (
          <LoginPage />
        )
      }
    </div>
  )
}

export default page
