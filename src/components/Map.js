import React, {useState} from 'react'
import {geoCentroid} from 'd3-geo'



import {
    ComposableMap,
    Geography,
    Geographies,
    Marker,
    Annotation,
    ZoomableGroup,
} from 'react-simple-maps'



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
                            
                            />
                        ))
                    }
                </Geographies>
                
            </ComposableMap>
        </div>
    )
}

export default Map;