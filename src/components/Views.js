import React from 'react'
import {Route,Routes} from 'react-router-dom'

import MapWithToolTip from './MapWithToolTip'
import Data from './Data'
import Homepage from '../pages/Homepage'
import LineChartPage from '../pages/LineChartPage'


export default function Views(){
    return (
    <Routes>
        <Route path ='/' element = {<Homepage/>}/>
        <Route path ='/cards' element = {<Data/>}/>
        <Route path = '/map' element = {<MapWithToolTip/>}/>
        <Route path = '/lineChartPage' element={<LineChartPage/>}></Route>
    </Routes>
    )
}