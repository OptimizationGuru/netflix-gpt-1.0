import React, { useState } from 'react'
import Header from './header'
import { netflix_home_page_background_url } from '../utils/netflix-logo'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
   
    <div>
        <Header/>
        <div className='absolute'>
        <img src={netflix_home_page_background_url} alt='background' />
       </div>
       <form className='absolute w-4/12 p-12 mx-auto right-0 left-0 bg-black my-48  text-white rounded-lg bg-opacity-80' >
       <h1 className='text-3xl font-bold py-4 px-2'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
      { !isSignInForm && <input 
        type='text' 
        placeholder='Full Name' 
        className='p-4 my-2 w-full bg-gray-700  rounded-lg bg-opacity-70'
        />}
        {!isSignInForm && <input 
        type='number' 
        placeholder='Phone' 
        className='p-4 my-2 w-full bg-gray-700  rounded-lg bg-opacity-70'
        />}
        <input 
        type='text' 
        placeholder='Email Address' 
        className='p-4 my-2 w-full bg-gray-700  rounded-lg bg-opacity-70' 
        />
        <input 
        type='password'
         placeholder='Password' 
         className='p-4 my-2 w-full  bg-gray-700  rounded-lg bg-opacity-70' 
         />
        <button 
        className='p-2 my-4 bg-red-600 w-full rounded-lg'>
        {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className='p-2 m-2'onClick={toggleForm} > {isSignInForm ? 'New to Netflix ? Sign Up now' : 'Already Registered ? Sign In now'}</p>
       </form>
    </div>
   
   
  )
}

export default Login