import React, { useEffect, useState } from 'react'
import CreateProd from '../components/CreateProd'
import DisplayTable from '../components/DisplayTable'
import axios from "axios"

const DisplayProd = () => {
    const [prods, setProds] = useState([])

    // grabs products from DisplayForm
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
            <CreateProd />
            <DisplayTable prods={prods} />

        </div>
    )
}

export default DisplayProd