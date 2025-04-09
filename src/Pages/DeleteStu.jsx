import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const DeleteStu = () => {

    const{student}=useParams()

    const[stu,setStu]=useState('')

    const getData=async ()=>{
        const res=await axios.get(`http://localhost:8005/student/${student}`)
        setStu(res.data)
    }

    useEffect(()=>{
        getData()
    },[])

    const navigate=useNavigate()

    const deleteData=()=>{
        axios.delete(`http://localhost:8005/student/${student}`)
        alert('Deleted...')
    }

  return (
    <div>
        <div>
            <h3>Delete</h3>
            <h3>{stu.id}</h3>
            <h3>{stu.name}</h3>
            <button onClick={deleteData}>YES</button>
            <NavLink to='/studentinfo'><button>NO</button></NavLink>
        </div>
    </div>
  )
}

export default DeleteStu