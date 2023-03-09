import React from 'react'
 
 export default function Buttons({handleNext, handlePrevious}) {
   return (
     <div>
         <article className='border-t border-b border-slate-300 mb-10'>
                            <ul className='flex items-center justify-between px-3 py-3'>
                                <li><button className='hover:text-indigo-700' onClick={handlePrevious}>&larr; Previous</button></li>
                                <li><button className='hover:text-indigo-700' onClick={handleNext}>Next &rarr;</button></li>
                            </ul>
                        </article>
     </div>
   )
 }