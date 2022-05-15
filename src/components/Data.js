import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './Card'
import {Alert,Form,Button} from 'react-bootstrap'

import "../css/Data.css"



export default function Data() {
  const [error,setError] = useState('')
  const [data, setData] = useState('')
  const [msg,setMsg] = useState('')
  
  const selectState = (e) => {
    e.preventDefault()
    const selected = document.getElementById('selectedState')
    const days = document.getElementById('numberOfDays')
    const numberOfDays = days.value
    const state = selected.value
    //check if number is integer
    if(numberOfDays%1!==0){
      setError('Please enter an integer');
      return 
    }
    //limiting the number of days
    else if(numberOfDays>365||numberOfDays<=0){
      setError('Your input must be within the days limit')
      return
    }


    axios.get(`https://data.cdc.gov/resource/9mfq-cb36.json?$limit=${numberOfDays}${state}&$order=submission_date%20DESC`)
      .then(res => {
        const response = res.data;
        //spliting the time so only the date shows up
        response.map(responses=>{
          const split = responses.submission_date.split("T")
          responses.submission_date=split[0]
        })
        setMsg(`Covid statistics for ${res.data[0].state}`)
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      {error
          ? <Alert key = 'danger' variant='danger' onClose={() => setError('')} dismissible> {error}</Alert>
          : null
      }

      <Form onSubmit={selectState}>
        <Form.Group  controlId = 'selectedState'>
            <Form.Label className='mb-3'>Select a State</Form.Label>
            <Form.Select  >
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
            </Form.Select>
        </Form.Group>
        <Form.Group controlId ='numberOfDays'>
          <Form.Label>How many days</Form.Label>
          <Form.Control type = 'input'></Form.Control>
          <Form.Text>Enter an integer between 1 - 365</Form.Text>
        </Form.Group>
        <Button type = 'submit' >Submit</Button>
      </Form>



      <form  className = 'form' onSubmit={selectState}>
        <h2 className='formTitle'>
          Look up Covid 19 Statistics by State
        </h2>
        <label className='label'>Select a State</label>
        <select className='input' id="selectedState">
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
        <label className='label'>
          How many days (between 1-365 days)
        </label> 
        <input className='input' id="numberOfDays" required></input>
        <button className='submitButton'>Submit</button>
      </form>
    {
      msg?<h1 style={{textAlign:"center"}}>{msg}</h1> : null
    }
    <div className = "cardsSection">
      {/*conditional rendering of data*/}
      {
        data 
        ? data.map(
          datas =>
            <Card
                date_submitted = {datas.submission_date}
                state = {datas.state}
                tot_cases = {datas.tot_cases}
                tot_death = {datas.tot_death}
                death_rate = {datas.tot_death/datas.tot_cases}
            >
            </Card>
          ) 
        : null
      }
    </div>

    </div>
  )
}