import React from 'react';
import { Link } from 'react-router-dom';

export default function CardList({ disasters }) {
  let cards = [];
  for (let data of disasters) {
    data.disasters.forEach(disaster => {
      cards.push(<Card key={data.country+disaster.disasterType} country={data.country} disaster={disaster} />);
    });
  }
  return (
    <div id='card-container'>
      {cards}
    </div>
  );
}

export function Card({ country, disaster }) {
  return(
    <Link to={'/articles/' + country + '-' + disaster.disasterType + '-' + disaster.id}>
      <div className='card'>
        <h1>{disaster.disasterType}</h1>
        <h2>{country}</h2>
      </div>
    </Link>
  );
}
