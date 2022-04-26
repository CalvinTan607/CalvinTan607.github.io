import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './Card'

export default function Data() {
  const [data, setData] = useState('')

  
  const selectState = (e) => {
    e.preventDefault()
    const selected = document.getElementById('selectedState')
    const days = document.getElementById('numberOfDays')
    const numberOfDays = days.value
    const state = selected.value
    console.log(state)
    axios.get(`https://data.cdc.gov/resource/9mfq-cb36.json?$limit=${numberOfDays}${state}&$order=submission_date%20DESC`)
      .then(res => {
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <form onSubmit={selectState}>
        <select id="selectedState">
          <option value="&state=AL">Alabama</option>
          <option value="&state=AK">Alaska</option>
          <option value="&state=AZ">Arizona</option>
          <option value="&state=AR">Arkansas</option>
          <option value="&state=CA">California</option>
          <option value="&state=CO" >Colorado</option>
          <option value="&state=CT">Connecticut</option>
          <option value="&state=DE">Delaware</option>
          <option value="&state=FL">Florida</option>
          <option value="&state=GA">Georgia</option>
          <option value="&state=HI">Hawaii</option>
          <option value="&state=ID">Idaho</option>
          <option value="&state=IL">Illinois</option>
          <option value="&state=IN">Indiana</option>
          <option value="&state=IA">Iowa</option>
          <option value="&state=KS">Kansas</option>
          <option value="&state=KY">Kentucky</option>
          <option value="&state=LA">Louisana</option>
          <option value="&state=ME">Maine</option>
          <option value="&state=MD">Maryland</option>
          <option value="&state=MA">Massachusetts</option>
          <option value="&state=MI">Michigan</option>
          <option value="&state=MN">Minnesota</option>
          <option value="&state=MS">Mississippi</option>
          <option value="&state=MO">Missouri</option>
          <option value="&state=MT">Montana</option>
          <option value="&state=NE">Nebraska</option>
          <option value="&state=NV">Nevada</option>
          <option value="&state=NH">New Hampshire</option>
          <option value="&state=NJ">New Jersey</option>
          <option value="&state=NM">New Mexico</option>
          <option value="&state=NY">New York</option>
          <option value="&state=NC">North Carolina</option>
          <option value="&state=ND">North Dakota</option>
          <option value="&state=OH">Ohio</option>
          <option value="&state=OK">Oklahoma</option>
          <option value="&state=OR">Oregon</option>
          <option value="&state=PA">Pennsylvania</option>
          <option value="&state=RI">Rhode Island</option>
          <option value="&state=SC">South Carolina</option>
          <option value="&state=SD">South Dakota</option>
          <option value="&state=TN">Tennessee</option>
          <option value="&state=TX">Texas</option>
          <option value="&state=UT">Utah</option>
          <option value="&state=VT">Vermont</option>
          <option value="&state=VA">Virginia</option>
          <option value="&state=WA">Washington</option>
          <option value="&state=WV">West Virginia</option>
          <option value="&state=WI">Wisconsin</option>
          <option value="&state=WY">Wyoming</option>
        </select>
        How many days 
        <input id="numberOfDays"></input>
        <button>Submit</button>
      </form>

      {/*conditional rendering of data*/}
      {
        data ? data.map(
          datas =>
            <Card
                date_submitted = {datas.submission_date}
                state = {datas.state}
                tot_cases = {datas.tot_cases}
                tot_death = {datas.tot_death}
            >
            </Card>
        ) : null
      }
    </div>
  )
}