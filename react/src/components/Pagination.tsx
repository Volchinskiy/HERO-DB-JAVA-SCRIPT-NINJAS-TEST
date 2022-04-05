import React from 'react'

export default function Pagination({heroesPage, totalHeroes, paginate}: any) {
  const pageNumbers = [];
  for(let index = 1; index <= Math.ceil(totalHeroes / heroesPage); index++){
    pageNumbers.push(index);
  }
  return (
    <ul className='pagination'>
      { 0 < pageNumbers.length ?  
        pageNumbers.map((item) => <li onClick={() => paginate(item)} key={item}>{item}</li>)
        :
        <li>1</li>
      }      
    </ul>
  )
}
