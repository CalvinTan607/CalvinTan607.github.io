import React from 'react'
import {Route,Routes} from 'react-router-dom'

import MapWithToolTip from './MapWithToolTip'
import Data from './Data'
import Homepage from '../pages/Homepage'
import LineChartPage from '../pages/LineChartPage'


export default function Views(){
    return (
    <Routes>
        <Route path ='/' element = {<MapWithToolTip/>}/>
        <Route path ='/Data' element = {<Data/>}/>
        <Route path = '/home' element = {<Homepage/>}/>
        <Route path = '/lineChartPage' element={<LineChartPage/>}></Route>
    </Routes>
    )
}