import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ countries }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    countries = countries.map(country => {
      let countryName = country.toLowerCase();
      if (countryName === 'republic of congo') {
        return 'republic of the congo';
      } else if (countryName === 'dr congo') {
        return 'democratic republic of the congo'
      }

      return countryName;
    });
    
    setData(countries);
  }, [countries]);

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              let hasDisaster = data.includes(
                geo.properties.NAME_LONG.toLowerCase()
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="#FFF"
                  fill={hasDisaster ? "#ff6961" : "#D6D6DA"}
                />
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  );
};

export default MapChart;
