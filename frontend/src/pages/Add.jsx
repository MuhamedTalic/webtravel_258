import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add=()=>{
    const [putovanje,setPutovanje]=useState({
        title:"",
        desc:"",
        price:null,
        cover:"",
    })

    const navigate= useNavigate()

    const handleChange=(e)=>{
        setPutovanje(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleClick= async e =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/putovanja",putovanje)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(putovanje)

    return(
        <div className='form'>
            <h1>Dodaj novo putovanje</h1>
            <input type="text" placeholder='title' onChange={handleChange} name="title"/>
            <input type="text" placeholder='desc' onChange={handleChange} name="desc"/>
            <input type="number" placeholder='price'onChange={handleChange} name="price"/>
            <input type="text" placeholder='cover' onChange={handleChange} name="cover"/>

            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add