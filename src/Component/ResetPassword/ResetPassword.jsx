import { useFormik } from 'formik'
import React, { useContext } from 'react'
import * as yup from "yup"
import { sendDataToResetPassword } from '../../services/auth-service'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function ResetPassword() {
const navigate = useNavigate()
const {setToken } = useContext(AuthContext)
let passRegex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
const[isError , setIsError] =useState(false)
const [errorMessage , setErrorMessage]=useState(null)


  async function handleResetPassword(values) {
    console.log(values)
    try {
    const response = await sendDataToResetPassword(values)
   if (response.success) {
    setToken(response.data.data.token)
    setTimeout(()=>{
      navigate('/')
    } , 1000)
    console.log(response)
   
   }
    } catch (error) {
      setIsError(true)
      setErrorMessage(error.message)
    }  
  };
const validationSchema = yup.object({
    email:yup.string().required("*Email is requird").email("Email is invalid"),    
    newPassword:yup.string().required("*Password is requird").matches( passRegex , "Write minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"), 
    
})
    const formik = useFormik({
        initialValues:{
            email:"",  
            newPassword: ""
    
    },
    validationSchema,
    onSubmit: handleResetPassword,
    })
  return (
    <>
    <div className="container mx-auto py-15 min-h-96 px-7 ">
        <form action=""
        onSubmit={formik.handleSubmit}
        className='space-y-5'
        >
            <p className='text-3xl font-bold'>Reset your password</p>
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
            <input 
            className='w-full p-3 border border-mainColor outline-0 rounded-md'
            id='newPassword' 
            placeholder='Enter your newPassword' 
            type='password'
            name='newPassword'
            value={formik.values.newPassword}
            onBlur={formik.handleBlur} 
            onChange={(e)=>{
                formik.setFieldValue('newPassword' , e.target.value) 
            }
            } 
            />
            {formik.touched.newPassword && formik.errors.newPassword && <p className='text-red-600'>{formik.errors.newPassword}</p>}
            <button type='submit' className='btn bg-mainColor text-xl text-white font-light p-6 hover:bg-fuchsia-700'>Reset</button>
            {isError?<p className='text-red-500'>*{errorMessage}</p>
            :""
            }
        </form>
    </div>
    </>
  )
}

