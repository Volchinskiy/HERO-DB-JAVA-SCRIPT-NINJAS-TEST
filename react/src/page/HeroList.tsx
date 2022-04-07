import React from 'react'
import ListItem from '../components/ListItem'
import axios from 'axios';
import { Link } from "react-router-dom";
import Pagination from '../components/Pagination';

export default function HeroList() {
  const [heroes, setHeroes] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [heroesPrePage] = React.useState(5);

  React.useEffect(() => {
    const getHeroes = async () => {
      await axios.get("http://localhost:5000/api/heroes").then((res) => {
        setHeroes(res.data);
      })
    }
    getHeroes();
  },[])

  const lastHeroIndex = currentPage * heroesPrePage;
  const firstHeroIndex = lastHeroIndex - heroesPrePage;
  const currentHero = heroes.slice(firstHeroIndex, lastHeroIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
  <div className='heroes-list'>
    {
      heroes.length > 0 ? 
      currentHero.map((item, index) => <ListItem key={index} {...item}  />) 
        :
        <div>Loading...</div>
    }
    <Pagination heroesPage={heroesPrePage} totalHeroes={heroes.length} paginate={paginate}/>
    <Link to='/addHero'>
      <button className="add-button">Add Hero</button>
    </Link>
  </div>
  )
}
