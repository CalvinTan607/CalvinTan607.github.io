import React, {useEffect, useState} from 'react'
import {geoCentroid} from 'd3-geo'
import axios from 'axios'
import ReactTooltip from 'react-tooltip'





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




const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

function Map(){
const [toolTipContent,setToolTipContent] = useState(``)

function getData (abbreviation){
    axios.get(`https://data.cdc.gov/resource/9mfq-cb36.json?$limit=1&state=${abbreviation}&$order=submission_date%20DESC`)
    .then(res=>{
        console.log(res.data)
        setToolTipContent(res.data)
    }).catch(err=>{
        console.log(err)
    })
}

    return(
    <div>
        {toolTipContent?toolTipContent.map(contents=>
            <div>
                Contents has been rendered          <br></br>
                State: {contents.state}             <br></br>
                Total Case: {contents.tot_cases}    <br></br>
            </div>
            ):null
        }
        <ComposableMap 
            data-tip="" 
            projection="geoAlbersUsa"> 
            
                <Geographies geography={geoUrl}>
                {({geographies})=>
                    geographies.map((geo)=>(
                    <Geography 
                        key={geo.rsmKey} 
                        geography = {geo} 
                        stroke ="#FFF" 
                        fill="#DDD"
                        //maybe declare a function with this axios call
                        onMouseDown={()=>{
                            const abbreviation = stateAbbreviation(geo.properties) 
                            getData(abbreviation)                                 
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

/*                              onMouseLeave={()=>{
                                setContent('')
                                console.log("mouse left")
                            }}   */
                        />
                        ))
                    }
                </Geographies>
                 
        </ComposableMap>

    </div>
    )
}

export default Map;