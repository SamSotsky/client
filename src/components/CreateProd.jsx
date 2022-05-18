import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

// have form, send info to backend after submit
// backend : axios
// form: state (for each input, one state)
// after creating, redirect to dashboard (navigate)

const CreateProd = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    const handleSubmit=(e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/prods`, {title, price, description})
            .then(response=>navigate(`/`))
            .catch(err=>console.log(err.response.data))
    }
    

    return (
        <div>
            <h1> Product Manager (CreateProd page)</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title</label>
                    <input type="text" name="title" value={title}
                        onChange={e=>setTitle(e.target.value)} />
                </div>
                <div>
                    <label> Price</label>
                    <input type="number" name="price" value={price}
                        onChange={e=>setPrice(e.target.value)} />
                </div>
                <div>
                    <label> Description</label>
                    <input type="text" name="description" value={description}
                        onChange={e=>setDescription(e.target.value)} />
                </div>
                <button type="submit">Add new product</button>
            </form>


        </div>
    )
}

export default CreateProd