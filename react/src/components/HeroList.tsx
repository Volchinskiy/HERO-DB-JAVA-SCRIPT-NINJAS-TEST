import React from 'react'
import ListItem from './ListItem'
import axios from 'axios';
import { Link } from "react-router-dom";

export default function HeroList() {
  const [heroes, setHeroes] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:5000/api/heroes").then((res) => {
      setHeroes(res.data);
    })
  },[])

  return (
  <div className='heroes-list'>
    {
      heroes.length > 0 ? 
        heroes.map((item, index) => <ListItem key={index} {...item}  />) 
        :
        <div>Loading...</div>
    }

    <Link to='/addHero'>
      <button className="add-button">Add Hero</button>
    </Link>
  </div>
  )
}
