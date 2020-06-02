import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CardList from './CardList';
import MapChart from "./MapChart";
const DISASTER_API = 'https://api.reliefweb.int/v1/disasters?appname=project2&limit=1000&filter[field]=status&filter[value]=current';

export default function Dashboard() {
  const [disasters, setDisasters] = useState([]);
  const [disaster, setDisaster] = useState([]);
  const [areasWithDisasters, setAreas] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownSelected, setDropdownSelected] = useState('World');
  const toggle = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
    const fetchData = async () => {
      let result = await getDisasters();
 
      let countries = result.map(disaster => disaster.country);
      setAreas(countries);
      setDisasters(result);
      setDisaster(result);
    };

    fetchData();
  }, []);

  let dropdownItems = areasWithDisasters.map(country => <DropdownItem key={country} onClick={(e) => {
    let disaster = disasters.filter(disaster => disaster.country === e.target.textContent);
    setDisaster(disaster);
    setDropdownSelected(e.target.textContent);
  }}>{country}</DropdownItem>);

  return (
    <div className='container center'>
      <MapChart countries={areasWithDisasters} />
      
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          {dropdownSelected}
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem onClick={() => {
            setDisaster(disasters)
            setDropdownSelected('World');
            }}>World</DropdownItem>
          {dropdownItems}
        </DropdownMenu>
      </Dropdown>

      <CardList disasters={disaster} />
    </div>
  )
}

// Fetch and organize data from the Disaster API.
function getDisasters() {
  let disasters = fetch(DISASTER_API)
    .then(res => res.json())
    .then(data => {
      let disasters = [];

      data.data.forEach(disaster => {
        let disasterDescription = disaster.fields.name;
        let id = disaster.id;
        let colonIndex = disasterDescription.indexOf(':');
        let dashIndex = disasterDescription.indexOf('-');
        if (colonIndex !== -1) {
          let country = disasterDescription.substring(0, colonIndex);
          let slashIndex = country.indexOf('/');
          let disasterType = disasterDescription.substring(colonIndex+2, dashIndex-1);
          if (slashIndex === -1) {
            if (disasters.length === 0) {
              disasters.push({country, disasters: [{disasterType, id}]});
            } else {
              let addNewData = true;
              disasters.forEach(data => {
                if (data.country === country) {
                  data.disasters.push({disasterType, id});
                  addNewData = false;
                }
              });

              if (addNewData) {
                disasters.push({country, disasters: [{disasterType, id}]});
              }
            }
          } else {
            let seperateCountries = country.split('/');
            seperateCountries.forEach(country => {
              if (disasters.length === 0) {
                disasters.push({country, disasters: [{disasterType, id}]});
              } else {
                let addNewData = true;
                disasters.forEach(data => {
                  if (data.country === country) {
                    data.disasters.push({disasterType, id});
                    addNewData = false;
                  }
                });
  
                if (addNewData) {
                  disasters.push({country, disasters: [{disasterType, id}]});
                }
              }
            });
          }
        }
      });

      return disasters;
  })
  .catch((err) => console.log(err));

  return disasters;
}