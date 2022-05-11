import React from 'react'
import {Route,Routes} from 'react-router-dom'

import MapWithToolTip from './MapWithToolTip'
import Data from './Data'


export default function Views(){
    return (
    <Routes>
        <Route path ='/' element = {<MapWithToolTip/>}/>
        <Route path ='/Data' element = {<Data/>}/>
    </Routes>
    )
}