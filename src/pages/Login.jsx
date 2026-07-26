import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='text-white flex justify-center items-center h-[calc(100vh-17rem)] p-5'>
      <div className='w-full max-w-sm'>
        <div className='flex justify-center flex-col items-center'>
          <h1 className='text-3xl font-semibold'>Welcome back</h1>
          <p className='text-mute-text'>Sign in to pick up where you left off.</p>
        </div>
        <div className='bg-secondary-background mt-8 mb-4 p-5 rounded-xl'>
          <form className='flex flex-col gap-4'>
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id='username'
              placeholder='example@gmail.com'
              className='border border-ink-700 rounded-lg focus:outline-none focus:border-ring pl-2 py-2 ' />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id='password'
              placeholder='*********'
              className='border border-ink-700 rounded-lg focus:outline-none focus:border-ring pl-2 py-2' />
            <button type="submit" className='bg-primary-button text-black font-medium rounded-lg py-2 flex justify-center items-center gap-2 cursor-pointer'>Sign in {<ArrowRight size={20} />}</button>
          </form>
        </div>
        <div className='flex justify-center items-center'>
          <p>Don't have account? <Link to='/register' className='text-ring'>Create one</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
