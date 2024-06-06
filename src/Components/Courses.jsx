import React from 'react';
import CoursesData from '../CourseData/data';

const Courses = () => {
  return (
   <section className=' flex flex-row gap-7 py-5 px-7 flex-wrap justify-center items-center mt-12 '>
    {
        CoursesData.map((items)=>{
            return (
                <>
                <section className='h-[300px] w-[300px] bg-[#ecf0f1] px-7 py-4'>
                <h1 className='text-center font-bold text-3xl py-4'>{items.Title}</h1>
                <p >{items.Description}</p>
                <section className='flex flex-row justify-around'>
<section>
    <a href='' className='text-dec'>Start Learning</a>
</section>
                </section>
                </section>
                </>

            )
            

            
        })
    }
   </section>
  )
}

export default Courses