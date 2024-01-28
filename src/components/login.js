import React, { useRef, useState } from 'react'
import Header from './header'
import { netflix_home_page_background_url } from '../utils/netflix-logo'
import {ValidateForm} from '../utils/validateSingInForm'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMsg ,setErrorMsg] =useState()

    const phone = useRef(null)
    const email= useRef(null)
    const password = useRef(null)
    const toggleForm=()=>{
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick =()=>{
       const error =  ValidateForm(isSignInForm, phone?.current?.value, email?.current?.value, password?.current?.value )
       setErrorMsg(error)
    }
  return (
   
    <div>
        <Header/>
        <div className='absolute'>
        <img src={netflix_home_page_background_url} alt='background' />
       </div>
       <form onSubmit={(e)=>e.preventDefault()} className='absolute w-4/12 p-12 mx-auto right-0 left-0 bg-black my-48  text-white rounded-lg bg-opacity-80' >
       <h1 className='text-3xl font-bold py-4 px-2'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
      { !isSignInForm && <input 
        type='text' 
        placeholder='Full Name' 
        className='p-4 my-2 w-full bg-gray-700  rounded-lg bg-opacity-70'
        />}
        {!isSignInForm && <input 
        type='number' 
        ref={phone}
        placeholder='Phone' 
        className='p-4 my-2 w-full bg-gray-700  rounded-lg bg-opacity-70'
        />}
        <input 
        type='text' 
        ref={email}
        placeholder='Email Address' 
        className='p-4 my-2 w-full bg-gray-700  rounded-lg bg-opacity-70' 
        />
        <input 
        type='password'
        ref={password}
         placeholder='Password' 
         className='p-4 my-2 w-full  bg-gray-700  rounded-lg bg-opacity-70' 
         />

         <p className='text-red-600 font-bold text-lg py-2'>{errorMsg}</p>
        <button 
        className='p-2 my-4 bg-red-600 w-full rounded-lg'
        type='submit'
        onClick={handleButtonClick}>
        {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className='p-2 m-2'onClick={toggleForm} > {isSignInForm ? 'New to Netflix ? Sign Up now' : 'Already Registered ? Sign In now'}</p>
       </form>
    </div>
   
   
  )
}

export default Login