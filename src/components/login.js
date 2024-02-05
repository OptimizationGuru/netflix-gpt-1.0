import React, { useRef, useState } from 'react'
import Header from './header'
import { netflix_home_page_background_url } from '../utils/netflix-logo'
import {ValidateForm} from '../utils/validateSingInForm'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, updatePassword } from "firebase/auth";
import { auth } from '../utils/firsbase';



const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMsg ,setErrorMsg] =useState()

    const phone = useRef(null)
    const email= useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const toggleForm=()=>{
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick =()=>{
       const error =  ValidateForm(isSignInForm, phone?.current?.value, email?.current?.value, password?.current?.value )
       setErrorMsg(error) 
       if(!errorMsg && !isSignInForm){
        createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .then(()=>{
          updateProfile(auth.currentUser, {
            userName: name?.current?.value, 
            userEmail: email?.current?.value,
            userPhone:phone?.current?.value,
          })
            console.log('New User Added to Database')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
           
          setErrorMsg(errorMessage + ' - ' + errorCode)
          // ..
        });
      }
      else if(!errorMsg && isSignInForm){
        console.log('sign in button pressed')
        signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message)
          setErrorMsg(errorMessage + ' - ' + errorCode)

        });
      }
    }
  return (
   
    <div>
        <Header/>
        <div className='absolute'>
        <img src={netflix_home_page_background_url} alt='background' className='h-screen w-screen'/>
       </div>
       <div className='absolute w-4/12 p-12 mx-auto right-0 left-0 bg-black my-48  text-white rounded-lg bg-opacity-80' >
       <h1 className='text-3xl font-bold py-4 px-2'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
      { !isSignInForm && <input 
        type='text' 
        ref={name}
        placeholder='Full Name' 
        className='p-4 my-2 w-full bg-gray-700  rounded-lg bg-opacity-70'
        />}
        {!isSignInForm && <input 
        type='phone' 
        ref={phone}
        placeholder='Phone' 
        className='p-4 my-2 w-full bg-gray-700  rounded-lg bg-opacity-70'
        />}
        <input 
        type='email' 
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
         <p className='text-white cursor-pointer text-lg py-2 hover:underline-offset-4'>Forgot Password ?</p>
        <button 
        className='p-2 my-4 bg-red-600 w-full rounded-lg'
        onClick={handleButtonClick}>
        {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className='p-2 m-2'onClick={toggleForm} > {isSignInForm ? 'New to Netflix ? Sign Up now' : 'Already Registered ? Sign In now'}</p>
       </div>
    </div>
   
   
  )
}

export default Login