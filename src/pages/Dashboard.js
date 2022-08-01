import React                  from 'react';
import { Card }               from 'react-bootstrap';
import CardUsers              from '../components/CardUsers';
import { useState,useEffect } from 'react';



const Dashboard = () => {

  const [data,setData] = useState([])

  const getAllData  =  async () => {
      const response  = await fetch('https://reqres.in/api/users')
      const myData    = await response.json()
      const items     = [...data, myData]
      items.forEach((dua) => {
        setData(dua.data)
        console.log(dua.data);
      })
  } 

  useEffect(() => {
    getAllData()
  },[])

  return (
    <div>
        <Card style={{ width: '100%' }}>
          <Card.Body>
              <CardUsers dataAPI={data} />
          </Card.Body>
      </Card>
    </div>
  )
}

export default Dashboard