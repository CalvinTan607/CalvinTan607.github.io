import React from 'react'
import {useState} from 'react'
import LineChart from '../components/LineChart'
import { DeleteThisData } from '../data/DeleteThisData'

export default function Homepage(){
    const [chartData,setChartData] = useState('')
    function handleSubmit (){
        setChartData({
            labels: DeleteThisData.map((data) => data.year),
            datasets : [{
                label: "Users Gained",
                data: DeleteThisData.map((data)=>data.userGain)
            }]
        })
    }
    return(
        <div>
            <button onClick={handleSubmit}> click</button>
            {
                chartData
                ? <LineChart chartData={chartData}/>
                :null
            }
        </div>
    )
}