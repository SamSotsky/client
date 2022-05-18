import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const SingleDisplay = () => {
    const {id} = useParams()
    const [prods, setProds] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/prods/${id}`)
        .then( response=>{
            setProds(response.data)
        })
        .catch(err=>console.log(err))
    },[])




    return (
        <div>
            <h1>ONE SINGLE PRODUCT</h1>
            {
                prods&&
                <div>
                    <h2>Product Title: {prods.title}</h2>
                    <h2>Product Price: {prods.price}</h2>
                    <h2>Product Title: {prods.description}</h2>
                </div>
            }
        </div>
    )
}

export default SingleDisplay