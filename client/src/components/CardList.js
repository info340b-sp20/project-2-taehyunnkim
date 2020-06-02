import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function CardList({ disasters }) {
  const [page, setPage] = useState(0);

  let cards = [];
  for (let data of disasters) {
    data.disasters.forEach(disaster => {
      cards.push(<Card key={disaster.id} country={data.country} disaster={disaster} />);
    });
  }  

  const cardsPerPage = 4;
  let numPages = cards.length / cardsPerPage;
  let start = cardsPerPage * page;
  let end = start + cardsPerPage;
  let updatedDisasters = [];
  if (disasters.length > cardsPerPage) {
    updatedDisasters = cards.slice(start, end);
  } else {
    updatedDisasters = cards;
  }
  
  return (
    <div className='card-list-container'>
      <div id='card-container'>
        {updatedDisasters}
      </div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={numPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        forcePage={page}
        onPageChange={(data) => {setPage(data.selected)}}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        initialPage={page}
      />
    </div>
  );
}

export function Card({ country, disaster }) {
  return(
    <Link to={'/articles/' + country + '-' + disaster.disasterType + '-' + disaster.id}>
      <div className='card' aria-label={disaster.disasterType + 'in' + country}>
        <h1>{disaster.disasterType}</h1>
        <h2>{country}</h2>
      </div>
    </Link>
  );
}
