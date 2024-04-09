import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

function ShowUser() {
    let [data,setData] = useState([])

    async function demo (){
    try{
        let res = await axios.get('http://localhost:5000/users')
        setData(res.data)
    }
    catch{
        let i1 = document.getElementById('i1')
        i1.innerHTML('Server down .....' )
    }
        
    }
    useEffect(()=>{demo()},[])
    
    let body = []
    let head =[['ROLL', 'FIRST NAME', 'LAST NAME', 'MARK']]
    data.forEach((rec)=>{
            return(
                body.push([`${rec.roll}`, `${rec.fname}`, `${rec.lname}`, `${rec.mark}`])
            )
    })
    
    const doc = new jsPDF()
    function downloadPdf(){
        //doc.autoTable({ html: '#tbldt' })
        
        
        autoTable(doc, {
            head: head,

            body: body,

          })
        doc.save('table.pdf')
        head=[]
        body =[]
    }
  return (
    <div>
        <div>
            <button onClick={downloadPdf} class="btn btn-info mb-2" style={{marginLeft:"1200px"}}>Download Pdf</button>
        </div>
         <table className='table table-dark table-striped' id="tbldt">
            <thead>
                <tr>
                    <th>ROLL</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>MARK</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {data.map((obj)=>{
                    return(
                        <tr>
                            <td>{obj.roll}</td>
                            <td>{obj.fname}</td>
                            <td>{obj.lname}</td>
                            <td>{obj.mark}</td>
                            <td>
                                <NavLink to={`/user/update/${obj.id}`}>< button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                <NavLink to={`/user/delete/${obj.id}`}><button className='btn btn-outline-danger btn-sm me-3'>DELETE</button></NavLink>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
         </table>
         <h4 style={{color:'red'}} id='i1'></h4>
    </div>
  )
}

export default ShowUser