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
    const name = state.name
    console.log(name)
    if(name=="California"){
        return "CA"
    } else if (name=="Colorado"){
        return "CO"
    }
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
                            /*
                            onMouseLeave={
                                setContent('')
                            }
                            */
                            onMouseDownCapture={()=>{
                                //console.log(stateAbbreviation(geo.properties))
                                //console.log(stateAbbreviation(geo.properties))
                                const abbreviation = stateAbbreviation(geo.properties)
                                var url = `https://data.cdc.gov/resource/9mfq-cb36.json?$limit=1&state=${abbreviation}&$order=submission_date%20DESC`
                                console.log(url)
                              axios.get(`https://data.cdc.gov/resource/9mfq-cb36.json?$limit=1&state=${abbreviation}&$order=submission_date%20DESC`)
                                .then(res => {
                                  console.log(res.data)
                                  setContent(res.data)
                                  //console.log(content.tot_cases)
                                  //console.log(res.data)
                                  
                                }).catch(err => {
                                  console.log(err)
                                }) 
                                
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