import React from 'react';
import Header from './Components/Header';
import Searchbar from './Components/Searchbar';
import Courses from './Components/Courses';

const App = () => {
  return (
    <div className='h-auto w-[100%] bg-custom-gradient'>
      <Header/>
      <section className='flex flex-row gap-2 justify-evenly items-center' >
        <section className='text-4xl font-bold tracking-wide'>RESOURCES</section>
     <Searchbar/>
     </section>
<Courses/>

    </div>
    
  )
}

export default App