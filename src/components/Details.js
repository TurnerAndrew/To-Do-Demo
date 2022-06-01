import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const {id} = useParams()
  return (
    <div>
      <h1>Details Page</h1>
      <h2>{id}</h2>
      <h3>This page is dynamic, and can show information based off of parameters in the URL!</h3>

    </div>
  )
}

export default Details