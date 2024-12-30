import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const Display = () => {
    var [user, setuser] = useState([])
    var navi=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3004/view")
            .then((response) => {
                console.log(response.data)
                setuser(response.data)
            })
            .catch((error) => console.log(error))
            
    },[])
    const delval = (id) => {
        console.log(id)
        axios.delete("http://localhost:3004/remove/" + id)
            .then((response) => {
                alert(response.data.message)
                window.location.reload()
            })
    }
    const edit = (val) => {
        navi("/add",{state:{val}})

        
    }
  return (
      <div>
          <br /><br /><br />
          <Typography variant='h5'>
              Employee Details
          </Typography>
          <TableContainer sx={{ maxHeight: 440 }}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table" border='2'>
                  <TableHead >
                      <TableRow>
                          <TableCell sx={{fontWeight:'bold'}}>Name</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Salary</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}> </TableCell>
                              </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return (
                              <TableRow >
                                  <TableCell>{val.Name }</TableCell>
                                  <TableCell>{val.Age}</TableCell>
                                  <TableCell>{val.Dept}</TableCell>
                                  <TableCell>{val.Salary} </TableCell>
                                  <TableCell sx={{ fontWeight: 'bold' }}>
                                      <Button variant='contained' onClick={() => { delval(val._id) }}>Delete</Button>&nbsp;&nbsp;
                                      <Button variant='contained' onClick={()=>{edit(val)}}>Edit</Button>
                                  </TableCell>
                              </TableRow>
                          )
                      })}
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}
export default Display 