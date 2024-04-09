import axios from 'axios'
import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
function UpdateUser() {
    let {register,setValue,handleSubmit,formState:{errors}} =useForm()
    let {userId} = useParams()
    let navi = useNavigate()

    async function fetchData(){
        let result = await axios.get(` http://localhost:5000/users/${userId}`)
        setValue('roll',result.data.roll)
        setValue('fname',result.data.fname)
        setValue('lname',result.data.lname)
        setValue('mark',result.data.mark)
       
    }
    useEffect(()=>{fetchData()},[])

    function updateData(data){
        axios.put(`http://localhost:5000/users/${userId}`,data)
        navi('/user/show')
    }
  return (
    <div>
         <div className='container mt-5'>
            <form onSubmit={handleSubmit(updateData)}>
            <label htmlFor='a'><b>ENTER ROLL</b></label>
            <input type='number' id='a' className='form-control' 
            {...register('roll',{required:'please Enter Roll No',
            min:{value:'101',message:'roll no must greater than 100'}, 
            max:{value:'199',message:'roll no must be less than 200'}, })}></input>

           <h6 style={{color:'red'}}>{errors.roll ? errors.roll.message :null}</h6>
            <br></br><br></br>

            <label htmlFor='b'><b>FIRSTNAME</b></label>
            <input type='text' id='b' className='form-control'
             {...register('fname',{required:'please enter First Name',
             minLength:{value:'3', message :'Name must be greater than 3 characters' },  } )}></input>

            <h6 style={{color:'red'}}>{errors.fname ? errors.fname.message :null}</h6>
            <br></br><br></br>
            <label htmlFor='c'><b>LASTNAME</b></label>
            <input type='text' id='c' className='form-control'
            {...register('lname',{required:'please enter Last Name',
              minLength:{value:'3', message :'LastName must be greater than 3 characters' }},)}></input>

            <h6 style={{color:'red'}}>{errors.lname ? errors.lname.message :null}</h6>
            <br></br><br></br>

            <label htmlFor='d'><b>MARKS</b></label>
            <input type='number' step='0.01' id='d' className='form-control'
             {...register('mark',{required:'please Enter Marks ',
             min:{value:'0',message:'marks must be +ve'}, 
             max:{value:'100',message:'Marks must be less than 101'}},)}></input>
 
             <h6 style={{color:'red'}}>{errors.mark ? errors.mark.message :null}</h6>
            <br></br><br></br>

            <input type='submit' value='UPDATE STUDENT' className='btn btn-outline-success col-6'></input>
            <input type='reset' value='RESET' className='btn btn-outline-warning col-6'></input>
            </form>

        </div>
    </div>
  )
}

export default UpdateUser