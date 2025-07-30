import React, { useContext, useState } from 'react'
import { Link , useLocation, useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from "yup"
import { sendDataToLogin } from '../../services/auth-service';
import { AuthContext } from '../../context/AuthContext';


 
export default function LogIn() {
  const location = useLocation()
  console.log(location)
  // const from = location.state.from || '/';
  let passRegex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const navigate = useNavigate();
  const [logInMessage , setLogInMessage] = useState(null);
  const [showPassword , setshowPassword] = useState(false);
  const {setToken , token} = useContext(AuthContext);
  function handleShowingPassword() {
    setshowPassword(!showPassword)
  };
  function handleChange(e) {
    formik.handleChange(e);
    setLogInMessage(null);
  }
  async function handleLogIn(values) {
    console.log(values)
    try {
    const response = await sendDataToLogin(values)

   if (response.success) {
    setTimeout(()=>{
      navigate('/')
    } , 1000)
    setToken(response.data.data.token);
    if (values.rememberMe) {
    localStorage.setItem('token' , response.data.data.token )      

    }else{
    sessionStorage.setItem('token' , response.data.data.token )      
      
    }
   }
    } catch (error) {
      console.log(error)
      console.log(error.message)
      setLogInMessage(error.message)
    }
 
  
  };
    const validationSchema = yup.object({
      email:yup.string().required("*Email is requird").email("Email is invalid"),
      password:yup.string().required("*Password is requird").matches( passRegex , "Write minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"), 
    })
 const formik = useFormik({
    initialValues:{
    email:"",   
    password:"",
    rememberMe:''
    },
    validationSchema,
    onSubmit: handleLogIn,
  }
   
  );
      console.log(token)

  return (
    <>
    <main>
      <div className="container m-auto flex justify-center items-center">
        <div className="log-in  w-5/6 sm:w-[500px]  shadow-xl mt-20 mb-20 p-7 sm:p-15">
          <div className='text-center'>
            <h2 className='text-mainColor text-4xl pb-2 font-bold'>Shopinity</h2>
            <p className='text-2xl pt-2'>welcome back!</p>
            <p className='text-gray-500'>log in to continue your shopining experience</p>
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
            <div className='email flex flex-col gap-1'>
              <label htmlFor='email'>Email</label>
              <input 
                className='form-control' 
                id='email' 
                placeholder='Enter your email' 
                type='email'
                name='email'
                value={formik.values.email}
                onChange={handleChange}
                onBlur={formik.handleBlur}                 
                />            
                {formik.touched.email && formik.errors.email && <p className='text-red-600'>{formik.errors.email}</p>}
   
            </div>   
            <div className='password flex flex-col gap-1'>
              <label htmlFor='password'>Password</label>
              <div className='w-full relative'>
                <input 
                  className='form-control w-full' 
                  id='password' 
                  placeholder='Enter your password' 
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={formik.values.password}
                  onChange={handleChange}
                  onBlur={formik.handleBlur} 
                />
                <button 
                className='absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500' 
                type='button'
                onClick={handleShowingPassword}
                >
                {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                  
                </button>                
              </div>
            
              {formik.touched.password && formik.errors.password && <p className='text-red-600'>{formik.errors.password}</p>}
              {logInMessage && <p className='text-red-500'>*{logInMessage}</p>}
            </div>
            <Link to={'/forgetPassword'} className='text-gray-500 hover:text-mainColor'>forget password?</Link>

            <div className="terms flex gap-3 items-center pb-2">
              <input 
              type='checkbox' 
              id='terms' 
                name='rememberMe'
                value={formik.values.rememberMe}
                onChange={handleChange}
                onBlur={formik.handleBlur}
              className= 'accent-mainColor size-4'
              />
              <label htmlFor='terms'>keep me signed in</label>
            </div>  
            <button type='submit' className='btn w-full bg-mainColor text-white border border-mainColor  hover:bg-fuchsia-500 hover:border-fuchsia-500'>
              <p>Log in</p>
            </button>      
          </form>
          <div>
            <p className='text-sm pt-3 text-center '>New to shopinity? <Link to={`/Register`} className='text-mainColor underline'>create an account</Link></p>
          </div>
        </div>

      </div>
    </main>
    </>
  )
}
