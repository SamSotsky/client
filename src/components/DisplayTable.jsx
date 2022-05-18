import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const DisplayTable = (props) => {
    const {removeFromDom} = props

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/prods/${deleteId}`)
            .then(response=>{removeFromDom(deleteId)})
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1> List of Products (DisplayTable)</h1>
            <table>
                <thead>
                    <tr>
                        <th> Title</th>
                        <th colSpan={2}> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.prods.map((eachProd, i) => {
                            return (
                                <tr key={i}>
                                    <td> <Link to={"/prods/" + eachProd._id} >{eachProd.title}</Link></td>
                                    <td> <Link to={`/prods/${eachProd._id}/edit`}> Edit</Link></td>
                                    <td> <button onClick={()=> handleDelete(eachProd._id)}>Delete</button></td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayTable