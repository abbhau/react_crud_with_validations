import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function DeleteUser() {
    let {userId} = useParams()
    let navi = useNavigate()
    function deleteData(){
        axios.delete(`http://localhost:5000/users/${userId}`)
        navi('/user/show')
    }
  return (
    <div style={{textAlign:'center'}}>
        <h4>Are you Confirm to delete this record</h4>
        <button className='btn btn-outline-danger col-3' onClick={deleteData}>YES</button>
        <NavLink to ='/user/show'><button className='btn btn-outline-warning col-3'>NO</button></NavLink>

    </div>
  )
}

export default DeleteUser