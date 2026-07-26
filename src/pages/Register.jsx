import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='text-white flex flex-col items-center p-5'>
      <div className='w-full max-w-sm'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-semibold'>Create your account</h1>
          <p className='text-mute-text'>Start moving your work through one flow.</p>
        </div>
        <div className='bg-secondary-background mt-8 mb-4 p-5 rounded-xl'>
          <form className='flex flex-col gap-3'> 
            <label htmlFor="username">USERNAME</label>
            <input 
            type="text" 
            id='username' 
            placeholder='Tom' 
            className='border border-ink-700 rounded-lg focus:outline-none focus:border-ring pl-2 py-2 '/>

            <label htmlFor="email">EMAIL</label>
            <input 
            type="email" 
            id='email' 
            placeholder='example@gmail.com' 
            className='border border-ink-700 rounded-lg focus:outline-none focus:border-ring pl-2 py-2 '/>

            <label htmlFor="password">PASSWORD</label>
            <input 
            type="password" 
            id="password" 
            placeholder='********'
            className='border border-ink-700 rounded-lg focus:outline-none focus:border-ring pl-2 py-2 '/>

            <label htmlFor="gender">GENDER</label>
            <select  
            id="gender" 
            className='border border-ink-700 rounded-lg focus:outline-none focus:border-ring pl-2 py-2  bg-secondary-background'>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
            <button type="submit" className='bg-primary-button text-black font-medium rounded-lg py-2 flex justify-center items-center gap-2 cursor-pointer'>Create account {<ArrowRight size={20} />}</button>
          </form>
        </div>
        <div className='flex justify-center items-center'>
          <p>Already have an account? <Link to='/login'>Sign in</Link> </p>
        </div>
      </div>
    </div>
  )
}

export default Register
