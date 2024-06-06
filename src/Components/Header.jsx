import React from 'react'

const Header = () => {
  return (
   <header className='flex flex-row justify-around items-center py-7 '>
  
    <section>
        <h1 className='font-bold'>c<span className='text-2xl tracking-wide'>o</span>dynn</h1>
    </section>
    <nav>
        <ul className='flex flex-row gap-12 font-bold'>
            <li>Home</li>
            <li>Compiler</li>
            <li>Versus Battles</li>
            <li>Questions</li>
            <li>Challenges</li>
            <li>About</li>
        </ul>
    </nav>

    <section>
        <button className='bg-[#000000] font-bold px-7 py-2 text-[#FFFFFF] rounded-3xl tracking-wide'>LOGIN</button>
    </section>

   </header>
  )
}

export default Header