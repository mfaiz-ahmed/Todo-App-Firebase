import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getData , sendData } from '../Config/firebasemethods'



export default function TodoScreen() {
        const [model , setModel] = useState<any>({})

        const addTodo = ()=>{
            sendData('tasks' , model)
            .then((res=>{
                console.log('Data Send Successfully');
            }))
            .catch((err)=>{
                console.log(err , 'Error');
            })
        }



        const get = ()=>{
            getData('tasks')
        }

        useEffect(()=>{
            get()
        }, [])





  return (
    <div className='text-center mt-5'>
      <Box>
        <Typography className='fs-1 fw-bold' color='error'>TODO APP</Typography>
        <Box >
            <TextField onChange={(e)=>{
                setModel({...model , Tasks:e.target.value})
            }} className='mt-3' color='error' label='Enter Task'></TextField>
            <Button onClick={addTodo} className='m-4' color='error' variant='contained'>Add Todo</Button>
        </Box>
      </Box>
    </div>
  )
}
