import React from 'react'

const Header = () => {
  return (
   <header>
    <section className='flex flex-row justify-between '>
    <section>
        <h1 className='font-bold'>c<span className='text-2xl tracking-wide'>o</span>dynn</h1>
    </section>
    <nav>
        <ul>
            <li>Home</li>
            <li>Compiler</li>
            <li>Versus Battles</li>
            <li>Questions</li>
            <li>Challenges</li>
            <li>About</li>
        </ul>
    </nav>

    <section>
        <button className='bg-[]'>LOGIN</button>
    </section>
    </section>
   </header>
  )
}

export default Header