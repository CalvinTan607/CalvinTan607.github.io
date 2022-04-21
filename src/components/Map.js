import React, {useState} from 'react'
import {geoCentroid} from 'd3-geo'
import axios from 'axios'



import {
    ComposableMap,
    Geography,
    Geographies,
    Marker,
    Annotation,
    ZoomableGroup,
} from 'react-simple-maps'

function stateAbbreviation(state){
    const stateName = state.name;
    console.log(stateName)
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

function getStateData(state){
    const abbreviation = stateAbbreviation(state)
    const url = `https://data.cdc.gov/resource/9mfq-cb36.json?$limit=1&state=${abbreviation}&$order=submission_date%20DESC`
    axios.get(url)
    .then(res=>{
        
    }).catch(err=>{
        console.log(err)
    })
}

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

function Map(){

    const [content,setContent] = useState('')
    return(
        
        <div>
        
        <ComposableMap projection="geoAlbersUsa">
            
                <Geographies geography={geoUrl}>
                    {({geographies})=>
                        geographies.map((geo)=>(
                        <Geography 
                            key={geo.rsmKey} 
                            geography = {geo} 
                            stroke ="#FFF" 
                            fill="#DDD"
                            //maybe declare a function with this axios call
                            onMouseDownCapture={()=>{
                                //console.log(stateAbbreviation(geo.properties))
                                //console.log(stateAbbreviation(geo.properties))
                                const abbreviation = stateAbbreviation(geo.properties)
                                axios.get(`https://data.cdc.gov/resource/9mfq-cb36.json?$limit=1&state=${abbreviation}&$order=submission_date%20DESC`)
                                .then(res => {
                                  console.log(res.data)
/*                                const dataToArray = Array.from(res.data)
                                  console.log(dataToArray) */
                                  setContent(res.data)
                                  
                                  //
                                  /*
                                  {
                                    content.map(contents=>{
                                        const tot_cases = contents.tot_cases;
                                        console.log(tot_cases)
                                    })
                                  }
                                */
                                  console.log(typeof(content))
                                  console.log("content of content is " + content)
                                  //console.log(content.tot_cases)
                                  //console.log(res.data)
                                }).catch(err => {
                                  console.log(err)
                                })
                            }}

                            style={{
                                hover:{
                                    fill:"#F53",
                                    outline:"none"}
                                }}

                            onMouseLeave={()=>{
                                setContent('')
                            }}
                        />
                        ))
                    }
                </Geographies>
                 
        </ComposableMap>
        </div>
    )
}

export default Map;