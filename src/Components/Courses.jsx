import React from 'react';
import CoursesData from '../CourseData/data';
import Locker from "../assets/File.png"

const Courses = () => {
  return (
   <section className=' flex flex-row gap-7 py-5 px-7 flex-wrap justify-center items-center mt-12 '>
    {
        CoursesData.map((items)=>{
            return (
                <>
                <section className='h-[300px] w-[300px] bg-[#ecf0f1] px-7 py-4 overflow-hidden'>
                <h1 className='text-center font-bold text-3xl py-4'>{items.Title}</h1>
                <p >{items.Description}</p>
                <section className='flex flex-row justify-evenly space-x-1'>
<section>
    <a href='' className='underline font-bold'>Start Learning</a>
</section>
<section className='h-[20px] w-[20px] border border-gray-950 rounded-full flex flex-col justify-center items-center px-2 py-2 mt-2'>
<i class="fa-solid fa-arrow-right"></i>
</section>
<section>
    <img src={Locker} alt='Locker' className='mr-70 h-[100px] w-[100px]' />
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