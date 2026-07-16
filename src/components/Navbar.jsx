import React from 'react'

const Navbar = () => {
    return (
        <header className='w-screen h-16 z-40 sticky top-0 bg-black/30 backdrop-blur-md py-3'>
            <div className='max-w-6xl mx-auto px-6 flex items-center justify-between'>
                <h1 className='text-2xl text-primary-text'>Taskflow</h1>
                <nav className='text-secondary-text/80 text-sm flex justify-around items-center gap-5'>
                    <a href="#feature">Features</a>
                    <a href="#how-it-work">How it works</a>
                    <a href="#faq">FAQ</a>
                </nav>
                <div className='flex items-center justify-center gap-5'>
                    <button className='text-base text-secondary-text px-5 py-2 rounded-xl font-medium cursor-pointer hover:bg-secondary-background'>Sign in</button>
                    <button className='text-base bg-primary-button text-background px-5 py-2 rounded-xl font-medium cursor-pointer hover:bg-hover-button'>Get Started</button>
                </div>
            </div>

        </header>
    )
}

export default Navbar