import React from 'react'
import { useEffect , useState } from 'react'
import { getData } from '../Config/firebasemethods'

export default function TodoList() {

    const [todo , setTodo] = useState<any>([]) 

    const get =async ()=>{
        getData('tasks')
        .then((res:any)=>{
            console.log(res);
            setTodo([...res])
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        get()
    } , [])

  return (
    <div>
        
    </div>
  )
}
