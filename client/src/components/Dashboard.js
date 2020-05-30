import React, { useState, useEffect } from 'react';
const DISASTER_API = 'https://api.reliefweb.int/v1/disasters?appname=project2&limit=1000&filter[field]=status&filter[value]=current';

export default function Dashboard() {
  const [disasters, setDisasters] = useState({});
  const [areasWithDisasters, setAreas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDisasters();
 
      setAreas(Object.keys(result).sort());
      setDisasters(result);
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      {console.log(disasters, areasWithDisasters)}
    </div>
  )
}

// Fetch and organize data from the Disaster API.
function getDisasters() {
  let disasters = fetch(DISASTER_API)
    .then(res => res.json())
    .then(data => {
      let disasters = [];
      console.log('call');
      data.data.forEach(disaster => {
        let disasterDescription = disaster.fields.name;
        let colonIndex = disasterDescription.indexOf(':');
        let dashIndex = disasterDescription.indexOf('-');
        if (colonIndex !== -1) {
          let country = disasterDescription.substring(0, colonIndex);
          let slashIndex = country.indexOf('/');
          let disasterType = disasterDescription.substring(colonIndex+2, dashIndex-1);
          if (slashIndex === -1) {
            if (disasters[country]) {
              disasters[country].push(disasterType);
            } else {
              disasters[country] = [];
              disasters[country].push(disasterType);
            }
          } else {
            let seperateCountries = country.split('/');
            seperateCountries.forEach(country => {
              if (disasters[country]) {
                disasters[country].push(disasterType);
              } else {
                disasters[country] = [];
                disasters[country].push(disasterType);
              }
            });
          }
        } else {
          let disasterType = '';
          let details = disaster.href;
          fetch(details)
            .then(res => res.json())
            .then(data => {                
              disasterType = data.data[0].fields.primary_type.name;
              data.data[0].fields.country.forEach(country => {
                if (disasters[country.name]) {
                  disasters[country.name].push(disasterType);
                } else {
                  disasters[country.name] = [];
                  disasters[country.name].push(disasterType);
                }
              });;
            })
        }
      });

      return disasters;
  })
  .catch((err) => console.log(err));

  return disasters;
}
