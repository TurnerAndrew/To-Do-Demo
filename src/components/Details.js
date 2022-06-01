import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [name, setName] = useState("")

  const {pokemon} = useParams()

  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => {
      setName(res.data.name)
    })
  }, [])
  
  
  return (
    <div>
      <h1>Details Page</h1>
      <h2>{name}</h2>
      <h3>This page is dynamic, and can show information based off of parameters in the URL!</h3>

    </div>
  )
}

export default Details
