import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const Update=()=>{
    const [putovanje,setPutovanje]=useState({
        title:"",
        desc:"",
        price:null,
        cover:"",
    })

    const navigate= useNavigate()
    const location=useLocation()

    const putovanjeId=location.pathname.split("/")[2]

    console.log(location.pathname.split("/")[2])

    const handleChange=(e)=>{
        setPutovanje(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleClick= async e =>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/putovanja/"+ putovanjeId,putovanje);
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(putovanje)

    return(
        <div className='form'>
            <h1>Azuriraj putovanje</h1>
            <input type="text" placeholder='title' onChange={handleChange} name="title"/>
            <input type="text" placeholder='desc' onChange={handleChange} name="desc"/>
            <input type="number" placeholder='price'onChange={handleChange} name="price"/>
            <input type="text" placeholder='cover' onChange={handleChange} name="cover"/>

            <button onClick={handleClick}>Update</button>
        </div>
    )
}

export default Update