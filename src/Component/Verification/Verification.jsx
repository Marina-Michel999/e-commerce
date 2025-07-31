import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { sendDataToVerifyCode } from '../../services/auth-service'
import { useState } from 'react'



export default function Verification() {
const navigate = useNavigate()
const[isError , setIsError] =useState(false)
const [errorMessage , setErrorMessage]=useState(null)

  async function handleVerification(values) {
    console.log(values)
    try {
    const response = await sendDataToVerifyCode(values)
   if (response.success) {
    setTimeout(()=>{
      navigate('/resetPassword')
    } , 1000)
   
   }
    } catch (error) {
      setIsError(true)
      setErrorMessage(error.message)
    }  
  };
const validationSchema = yup.object({
    resetCode:yup.string().required("*verification code is requird"),    
})
    const formik = useFormik({
        initialValues:{
            resetCode:"",      
    },
    validationSchema,
    onSubmit: handleVerification,
    })
  return (
    <>
    <div className="container mx-auto py-36 min-h-[700px] px-7  ">
        <form action=""
        onSubmit={formik.handleSubmit}
        className='space-y-5'
        >
            <p className='text-3xl font-bold'>Please enter your verfication code</p>
            <input 
            className='w-full p-3 border border-mainColor outline-0 rounded-md'
            id='resetCode' 
            placeholder='Enter the reset code' 
            type='text'
            name='resetCode'
            value={formik.values.resetCode}
            onBlur={formik.handleBlur} 
            onChange={(e)=>{
                formik.setFieldValue('resetCode' , e.target.value) 
            }
            } 
            />
            {formik.touched.resetCode && formik.errors.resetCode && <p className='text-red-600'>{formik.errors.email}</p>}
            <button type='submit' className='btn bg-mainColor text-xl text-white font-light p-6 hover:bg-fuchsia-700'>verfy</button>
            {isError?<p className='text-red-500'>*{errorMessage}</p>
            :""
            }
        </form>
    </div>
    </>
  )
}
