import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main className='About'>
      <h2>Post Not found</h2>
      <p>Well, that's disappointing</p>
      <p>
        <Link to='/'>Visit to Home Page</Link>
      </p>
    </main>
  )
}

export default About
