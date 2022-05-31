import React,{memo} from 'react'
import axios from 'axios'
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

  function stateAbbreviation(state){
    const stateName = state.name;
    const abbreviation = {
        "Arizona": "AZ",
        "Alabama": "AL",
        "Alaska": "AK",
        "Arkansas": "AR",
        "California": "CA",
        "Colorado": "CO",
        "Connecticut": "CT",
        "Delaware": "DE",
        "Florida": 'FL',
        "Georgia":"GA",
        "Hawaii": "HI",
        "Idaho": "ID",
        "Illinois": "IL",
        "Indiana": 'IN',
        "Iowa": 'IA',
        "Kansas": 'KS',
        "Kentucky": 'KY',
        "Louisiana": 'LA',
        "Maine": 'ME',
        "Maryland": 'MD',
        "Massachusetts": 'MA',
        "Michigan": 'MI',
        "Minnesota": 'MN',
        "Mississippi": 'MS',
        "Missouri": 'MO',
        "Montana": 'MT',
        "Nebraska": 'NE',
        "Nevada": 'NV',
        "New Hampshire": 'NH',
        'New Jersey': 'NJ',
        'New Mexico': 'NM',
        'New York': 'NY',
        'North Carolina': 'NC',
        'North Dakota': 'ND',
        'Ohio': 'OH',
        'Oklahoma': 'OK',
        'Oregon': 'OR',
        'Pennsylvania': 'PA',
        'Rhode Island': 'RI',
        'South Carolina': 'SC',
        'South Dakota': 'SD',
        'Tennessee': 'TN',
        'Texas': 'TX',
        'Utah': 'UT',
        'Vermont': 'VT',
        'Virginia': 'VA',
        'Washington': 'WA',
        'West Virginia': 'WV',
        'Wisconsin': 'WI',
        'Wyoming': 'WY',
    }
    return abbreviation[`${stateName}`]
}

 async function getData (abbreviation){
    const url = 
    `https://data.cdc.gov/resource/9mfq-cb36.json?$limit=1&state=${abbreviation}&$order=submission_date%20DESC`
    
    const response =
        await axios.get(url)
        .then(res=>{
          const result = res.data[0]
          const statistics = {
            state: result.state,
            tot_cases: result.tot_cases,
            tot_death: result.tot_death,
          }
          return statistics
      }).catch(err=>{
          console.log(err)
      }) 
  return response
}




const Map = ({ setTooltipContent }) => {

  return (
    <>
      <div>
        <h3>
          Hover over a state to see the most recent Covid Statistic for that jurisdiction
        </h3>
      </div>
      <ComposableMap data-tip="" projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke ="#FFF" 
                  fill="#DDD" 
                
                  onMouseEnter={async() => {
                     const abbreviation = stateAbbreviation(geo.properties)
                     const response = await getData(abbreviation)
                     const stats = {
                       state: response.state,
                       tot_cases: response.tot_cases,
                       tot_death: response.tot_death,
                     }
                     setTooltipContent(`${stats.state} --- ${stats.tot_cases} total cases --- ${stats.tot_death} total deaths `)
                  }}

                  onMouseLeave={() => {
                    setTooltipContent("")
                  }} 

                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(Map);
