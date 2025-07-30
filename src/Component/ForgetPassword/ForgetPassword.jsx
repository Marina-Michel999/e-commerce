import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { sendDataToForgetPassword } from '../../services/auth-service'


export default function ForgetPassword() {
const navigate = useNavigate()
const[isError , setIsError] =useState(false)
const [errorMessage , setErrorMessage]=useState(null)
  async function handleForgetPassword(values) {
    console.log(values)
    try {
    const response = await sendDataToForgetPassword(values)
   if (response.success) {
    setTimeout(()=>{
      navigate('/verification')
    } , 1000)
   
   }
    } catch (error) {
      setIsError(true)
      setErrorMessage(error.message)
    }  
  };
const validationSchema = yup.object({
    email:yup.string().required("*Email is requird").email("Email is invalid"),    
})
    const formik = useFormik({
        initialValues:{
            email:"",      
    },
    validationSchema,
    onSubmit: handleForgetPassword,
    })
  return (
    <>
    <div className="container mx-auto py-32 min-h-96 px-7  ">
        <form action=""
        onSubmit={formik.handleSubmit}
        className='space-y-5'
        >
            <p className='text-3xl font-bold'>Please enter your verfication email</p>
            <input 
            className='w-full p-3 border border-mainColor outline-0 rounded-md'
            id='email' 
            placeholder='Enter your email' 
            type='email'
            name='email'
            value={formik.values.email}
            onBlur={formik.handleBlur} 
            onChange={(e)=>{
                formik.setFieldValue('email' , e.target.value) 
            }
            } 
            />
            {formik.touched.email && formik.errors.email && <p className='text-red-600'>{formik.errors.email}</p>}
            <button type='submit' className='btn bg-mainColor text-xl text-white font-light p-6 hover:bg-fuchsia-700'>send code</button>
            {isError?<p className='text-red-500'>*{errorMessage}</p>
             :""
             }
        </form>
    </div>
    </>
  )
}
