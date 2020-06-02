import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CardList from './CardList';
const DISASTER_API = 'https://api.reliefweb.int/v1/disasters?appname=project2&limit=1000&filter[field]=status&filter[value]=current';

export default function Dashboard() {
  const [disasters, setDisasters] = useState([]);
  const [areasWithDisasters, setAreas] = useState([]);

  // added for drop down menu
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

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
      
      <div className='dropContainer'>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
          WORLD
          </DropdownToggle>

          <DropdownMenu>
            <DropdownItem>country1</DropdownItem>
            <DropdownItem>country2</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <CardList disasters={disasters} />
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