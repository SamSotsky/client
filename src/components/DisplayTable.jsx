import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const DisplayTable = (props) => {
    
    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/prods/${deleteId}`)
            .then(response=>props.reloadList())
            .catch(err=>console.log(err))
    }

    // const handleDelete2 = (deleteId) => {
    //     axios.delete(`http://localhost:8000/api/prods/${deleteId}`)
    //         .then(response=>{
    //             const filteredList = props.prods.filter((prod, i)=>prod._id !== deleteId)
    //             props.updateList(filteredList)
    //         })
    //         .catch(err=>console.log(err))
    // }


    return (
        <div>
            <h1> List of Products (DisplayTable)</h1>
            <table>
                <thead>
                    <tr>
                        <th> Title</th>
                        <th> Price</th>
                        <th> Description</th>
                        <th colSpan={2}> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.prods.map((eachProd, i) => {
                            return (
                                <tr key={i}>
                                    <td> <Link to={"/prods/" + eachProd._id} >{eachProd.title}</Link></td>
                                    {/* <td> {eachProd.price}</td>
                                    <td> {eachProd.description}</td>
                                    <td> <Link to={`/prods/${eachProd._id}/edit`}> Edit</Link></td>
                                    <td> <button onClick={()=> handleDelete(eachProd._id)}>Delete</button></td> */}
                                    {/* <td> <button onClick={()=> handleDelete2(eachProd._id)}>Delete 2</button></td> */}

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