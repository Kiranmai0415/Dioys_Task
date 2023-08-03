import React from 'react'
import { Button } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <div>
        <Button href='/add'>Add</Button>
        <Button href='/edit'>Edit</Button>
        <Button href='/deleteuser'>Delete</Button>
        <Button href='/table'>Table</Button>
    </div>
  )
}

export default Dashboard