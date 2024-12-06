import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='w-full py-6'>
        <section className='container flex  justify-between  '>
          <h1 className=' text-xl'>İpoteka<span className='text-cyan-500'>.az</span> </h1>
          <nav className='space-x-5'>
            <NavLink className={"bg-cyan-500 py-2 px-4 text-white rounded-xl"} to={"/login"}>Login</NavLink>
            <NavLink className={"bg-cyan-500 py-2 px-4 text-white rounded-xl"} to={"/signup"} >Signup</NavLink>
          </nav>
        </section>
      </header>
    </>
  )
}

export default Header