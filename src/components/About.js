import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    alert("We are headed to the details page, with the parameter of 'aSpecificWord'")
    navigate('/details/aSpecificWord')
  }

  return (
    <div>
      <h1>About this Project</h1>
      <p>This demo project will allow us to build a full-stack application. As we are building this, we are working on routing, but eventually we will manage state globally, have a backend, and a database to connect and store information. </p>
      <button id="link-btn" onClick={handleClick}>Go to Details Page</button>
    </div>
  )
}

export default About