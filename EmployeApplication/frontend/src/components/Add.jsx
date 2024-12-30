import React, { useEffect, useState } from 'react'
import { Button,TextField, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Add = (props) => {
  var [input, setinput] = useState({ Name: "", Age: "", Dept: "", Salary: "" })
  var navi = useNavigate()
  var loc = useLocation()
  console.log("a",loc.state)
  const inputHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const addHandler = () => {
    if (loc.state !== null)
    {
      axios.put("http://localhost:3004/update/"+loc.state.val._id ,input)
        .then((response) => {
          alert(response.data.message)
          navi('/dis')
      })
    }
    else {
      axios.post("http://localhost:3004/add", input)
        .then((response) => {
          alert(response.data.message)
          navi('/dis')
        })
    }
  }
  useEffect(() => {
    if (loc.state !== null)
      setinput({
        ...input,
        Name: loc.state.val.Name,
        Age: loc.state.val.Age,
        Dept: loc.state.val.Dept,
        Salary: loc.state.val.Salary
      })
  },[])

    return (
        
        <div>
            <br /><br /><br /><br /><br />
        <Typography variant='h3' align='center' color="primary">Add Details</Typography><br /><br />
          <TextField
          required
          id="outlined-required"
                label="Name"
          type='text'
          name='Name'
          value={input.Name}
          onChange={inputHandler}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
                required
                id="outlined-required"
                label="Age"
          type='number'
          name='Age'
          value={input.Age}
          onChange={inputHandler}
            />
            <br /><br /><br />
          <TextField
                required
                id="outlined-required"
                label="Department"
          type='text'
          name='Dept'
          value={input.Dept}
          onChange={inputHandler}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
                required
                id="outlined-required"
                label="Salary"
          type='number'
          name='Salary'
          value={input.Salary}
          onChange={inputHandler}
            
            />
            <br /><br /><br />
            <Button variant="contained" onClick={()=>{addHandler()}}>Submit</Button>
    </div>
  )
}

export default Add