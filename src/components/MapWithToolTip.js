import React from 'react'
import {useState} from 'react'
import ReactTooltip from 'react-tooltip'

import Map from './Map.js'

export default function MapWithToolTip(){
    const [content,setContent] = useState('');
    return(
         <div className ='map'>
            <Map setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
        </div> 
    )
}