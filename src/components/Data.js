import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Data() {
  const [data, setData] = useState('')
  const state = `&state=CA`
  const getData = () => {
    axios.get(`https://data.cdc.gov/resource/9mfq-cb36.json?&$limit=10${state}`)
      .then(res => {
        console.log(res)
        setData(res.data)
        console.log(res.data)

      }).catch(err => {
        console.log(err)
      })
  }

  const selectState = () =>{
    var selected = document.getElementById('thisState')
    var value = selected.value
    console.log(value)
  }
  return (
    <div>
      <button onClick={getData}>Click Me</button> 

      <form onSubmit={selectState}>
        <select id = "thisState">
          <option value="CA">California</option>
          <option value="CO" >Colorado</option>
          <option value="AZ">Arizona</option>
        </select>
        <button type='submit'>Submit</button>
      </form>

      {
        data ? data.map(
          datas =>
            <div>
              Submission Date: {datas.submission_date} <br></br>
              State: {datas.state}                     <br></br>
              Total Cases: {datas.tot_cases}           <br></br>

            </div>

        ) : null
      }
    </div>
  )
}