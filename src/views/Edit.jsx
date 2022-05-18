import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'

// getOne + create
// get prod id from routes (params)
// using id to go to the backend (axios)
// state


const Edit = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState(3)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/prods/${id}`)
            .then(response => {
                const prod = response.data // prod= {title: ...., price:.... description:...}
                setTitle(prod.title)
                setPrice(prod.price)
                setDescription(prod.description)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/prods/${id}`, { title, price, description })
            .then(response => navigate(`/prods`))
            .catch(err => console.log(err))
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/prods/${id}`)
            .then(response => navigate(`/prods`))
            .catch()
    }


    return (
        <div>
            <p>Edit.jsx page</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title</label>
                    <input type="text" name="title" value={title}
                        onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label> Price</label>
                    <input type="number" name="price" value={price}
                        onChange={e => setPrice(e.target.value)} />
                </div>
                <div>
                    <label> Description</label>
                    <input type="text" name="description" value={description}
                        onChange={e => setDescription(e.target.value)} />
                </div>
                <button type="submit">Edit the prod</button>
            </form>

            <button onClick={handleDelete}> Delete</button>

        </div>
    )
}

export default Edit