import React, { useEffect, useState } from 'react'
import CreateForm from '../components/CreateForm'
import DisplayForm from '../components/DisplayForm'
import axios from "axios"

const DisplayProd = () => {
    const [prods, setProds] = useState([])

    // grabs songs from DisplayForm
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/prods`)
        .then( response=>{
            setProds(response.data)
        })
        .catch(err=>console.log(err))
    },[])

    


    return (
        <div>
            <h1>DisplayProd</h1>
            <CreateForm />
            <DisplayForm prods={prods} />

        </div>
    )
}

export default DisplayProd