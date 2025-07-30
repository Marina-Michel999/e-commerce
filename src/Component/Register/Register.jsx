import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from "yup"
// import axios from 'axios'
// import { meta } from '@eslint/js'
// import { config_url } from '../../config'
import { sendDataToRegester } from '../../services/auth-service'
import { checkPassStrength } from '../../utils/password-strength'
import bgImg from '../../assets/woman-5899643_1280.jpg'


export default function Register() {
  const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/;
  const passRegex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const [signUpMessage , setsignUpMessage] = useState('');
  const [isErrorExist , setIsErrorExist] = useState(null);
  const navigate = useNavigate();
  

  async function handleSignUp(values) {
    
    try {

 
      const response = await sendDataToRegester(values);

   setsignUpMessage(response.success)
      if (response.success) {
        setTimeout(()=>{
          navigate('/LogIn')

        } , 3000)
      };
    } catch (error) {
      console.log(error)
      setIsErrorExist(error.message)
      // console.log(isErrorExist)
    }
 
  
  };
  const validationSchema = yup.object({
    name:yup.string().required("*Name is requird"),
    email:yup.string().required("*Email is requird").email("Email is invalid"),
    phone:yup.string().required("*Phone is requird").matches(phoneRegex ,"we accept egyption numbers only"),
    password:yup.string().required("*Password is requird").matches(passRegex , "Write minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    rePassword:yup.string().required("*Confirm password is requird").oneOf([yup.ref("password")] , "password should be the same"),
    terms:yup.boolean().oneOf([true] , 'you must agree our terms')

  })
  const formik = useFormik({
    initialValues:{
    name: "",
    email:"",
    phone:"",
    password:"",
    rePassword:"",
    terms:''
    },
    validationSchema,
    onSubmit: handleSignUp,
  }
   
  );
  const passwordFeedback = checkPassStrength(formik.values.password)

  return (
    <>
    <main className=''>
      <div className="container mx-auto grid md:grid-cols-2 lg:gap-4 py-28 px-4">
        {/* left */}
        <div>
        <div className='p-10 space-y-10 bg-cover bg-center h-sreen min-h-[1000px] w-full relative '
        style={{backgroundImage:`url(${bgImg})`}}
        >
        <div className="bg-layer bg-gray-950/60 absloute absolute top-0 right-0 left-0 bottom-0 px-10 py-20 space-y-10 ">
         <div className="welcome-msg space-y-4">
            <h2 className='text-4xl font-bold font-Pacifico text-white'>Welcome to </h2>
            <p className='text-mainColor text-5xl text-center font-bold p-4 font-dancing'>Shopinity</p>
            <p className='text-lg mt-2 text-gray-300'>
            Discover a seamless online shopping experience with Shopinity, your one-stop destination for trendy fashion, tech gadgets, home essentials, and more. We bring you quality products, unbeatable deals, and fast delivery all wrapped in a user-friendly platform you'll love.              </p>

          </div>
                    <ul className='*:flex *:items-center *:gap-3 space-y-6  '>
            <li>
              <div className="icon size-12 rounded-full bg-fuchsia-300 text-lg flex justify-center items-center text-mainColor">
                <i className="fa-solid fa-star"></i>
              
              </div>
              <div className="content">
                <h3 className='font-bold text-gray-300'>height quality.</h3>
              </div>
            </li>
            <li>
              <div className="icon size-12 rounded-full bg-fuchsia-300 text-lg flex justify-center items-center text-mainColor">
                  <i className="fa-solid fa-truck-fast"></i> 
              </div>
              <div className="content">
                <h3 className='font-bold text-gray-300 '>fast delivery.</h3>
              </div>
            </li>
            <li>
              <div className="icon size-12 rounded-full bg-fuchsia-300 text-lg flex justify-center items-center text-mainColor">
                <i className="fa-solid fa-shield-halved"></i>              
                </div>
              <div className="content">
                <h3 className='font-bold text-gray-300'>secure shopping</h3>
              </div>
            </li>
          </ul>
        </div>
      
        </div>
        </div>

        {/* right */}
        <div className='p-10' >
          <div className="title text-center">
            <h3 className='text-4xl font-semibold pb-2'>create your account</h3>
            <p>start journey with us today</p>
          </div>
          <div className='*:flex *:gap-2 *:items-center *:w-full space-y-2 py-3'>
            <button className='btn bg-transparent border-mainColor hover:bg-fuchsia-300 hover:border-fuchsia-300'>
              <i className="fa-brands fa-google text-red-500"></i>
              <span>Google</span>
            </button>
             <button className='btn bg-transparent border-mainColor hover:bg-fuchsia-300 hover:border-fuchsia-300'>
              <i className="fa-brands fa-facebook text-blue-700"></i>
              <span>facebook</span>
            </button>
          </div>
          <div className='flex gap-3 items-center'>
            <div className='h-0.5 w-full bg-gray-100'></div>
            <span>or</span>
            <div className='h-0.5 w-full bg-gray-100'></div>
          </div>
          <form action="" className='space-y-3' onSubmit={formik.handleSubmit}>
            <div className='name flex flex-col gap-1'>
              <label htmlFor='name'>Name</label>
              <input 
                className='form-control' 
                id='name' 
                placeholder='Enter your name' 
                type='text'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                
                />
                {formik.touched.name && formik.errors.name && <p className='text-red-600'>{formik.errors.name}</p>}
            </div>
            <div className='email flex flex-col gap-1'>
              <label htmlFor='email'>Email</label>
              <input 
                className='form-control' 
                id='email' 
                placeholder='Enter your email' 
                type='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <p className='text-red-600'>{formik.errors.email}</p>}
                {isErrorExist && <p className='text-red-600'>*{isErrorExist}</p>}
            </div>
            <div className='phone flex flex-col gap-1'>
              <label htmlFor='phone'>Phone</label>
              <input 
                className='form-control' 
                id='phone' 
                placeholder='Enter your phone' 
                type='text'
                name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}                
              />
              {formik.touched.phone && formik.errors.phone && <p className='text-red-600'>{formik.errors.phone}</p>}

            </div>
            <div className='password flex flex-col gap-1'>
              <label htmlFor='password'>Password</label>
              <input 
                className='form-control' 
                id='password' 
                placeholder='Enter your password' 
                type='text'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
              />
              

              <div className="flex flex-col">
                <div className='password-stength flex  gap-2 items-center'>
                  {formik.values.password &&  
                  <div className="bar w-full bg-gray-200 h-1 overflow-hidden rounded-xl">
                    <div className={`progress-bar ${passwordFeedback.width} ${passwordFeedback.background} h-1`}>
                    </div>
                  </div>
                  }
                  <span className='text-sm text-nowrap w-24'>{passwordFeedback.text}</span>
                </div>

                <div>
                  {(formik.touched.password && formik.errors.password)
                  ?(<p className='text-red-600'>{formik.errors.password}</p>
                  ):<p className='text-sm mt-2'>must be at least 8 characters with symbols and numbers</p>
                  }
                </div>

              </div>

            </div>
            <div className='repassword flex flex-col gap-1'>
              <label htmlFor='repassword'>Repassword</label>
              <input 
                className='form-control' 
                id='repassword' 
                placeholder='confirm your repassword' 
                type='text'
                name='rePassword'
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
              />
              {formik.touched.rePassword && formik.errors.rePassword && <p className='text-red-600'>{formik.errors.rePassword}</p>}

            </div>
            <div className="terms flex gap-3 items-center">
              <input 
              type='checkbox' 
              id='terms' 
              className= 'accent-mainColor size-4'
              name='terms' 
              value={formik.values.terms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              onInput={console.log(formik.values.terms)}             
              />

              <label htmlFor='terms'>I agree to the <Link to={`/terms`} className='text-mainColor underline'>terms</Link> of service</label>
              {formik.touched.terms && formik.errors.terms && <p className='text-red-600'>{formik.errors.terms}</p>}

            </div>
            <button type='submit' className='btn w-full bg-mainColor text-white border border-mainColor  hover:bg-fuchsia-500 hover:border-fuchsia-500'>
              <i className="fa-solid fa-user-plus"></i>
              <span>create my account</span>
            </button>
            {(signUpMessage === 'success' ) ? (<p className='text-center text-mainColor'>your account has been created successfully</p>) : null}          
            
          </form>
          <div>
            <p className='text-sm pt-3'>Already have an account <Link to={`/logIn`} className='text-mainColor underline'>sign in</Link></p>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
