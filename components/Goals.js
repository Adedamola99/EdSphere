import React from 'react'
import Link from 'next/link'
const Goals = () => {
  return (
    <div className="goals container">
      <Link className="header-link" href="/">To-do List &gt;</Link> 
      <div className="goal-box">
        <label htmlFor="goals">
          <input type="checkbox" name="goals" id="goals" /> Read Chemistry
        </label>
        <label htmlFor="goals">
          <input type="checkbox" name="goals" id="goals" /> Read Physics
        </label>
        <label htmlFor="goals">
          <input type="checkbox" name="goals" id="goals" /> Read Math
        </label>
        <label htmlFor="goals">
          <input type="checkbox" name="goals" id="goals" /> Read Biology
        </label>
        <label htmlFor="goals">
          <input type="checkbox" name="goals" id="goals" /> Eat
        </label>
      </div>
    </div>
  )
}

export default Goals