import React from 'react'
import {FaDev, FaTwitter, FaGlobe, FaGithub} from 'react-icons/fa'

export default function Person({user}) {
  return (
    <div className='absolute bg-slate-200 p-5 rounded shadow left-0 top-0'>
        <article className='flex items-center justify-center flex-col'>
            <img src={user.profile_image_90} alt="" className='w-20 rounded-2xl shadow'/>
            <h3 className='text-center font-bold text-slate-700 text-xl my-5'>{user.name}</h3>
        </article>

        <button className='bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded-lg cursor-pointer py-2 px-4 w-full'>Follow</button>

        <article className='mt-5'>
        <ul className='grid grid-cols-2 gap-3'>
            <li  className='text-sm flex items-center justify-start hover:text-black cursor-pointer mb-2'><FaDev className='mr-2'/> @{user.username}</li>
            <li className='text-sm flex items-center justify-start hover:text-black cursor-pointer mb-2'><FaTwitter/> @{user.twitter_username}</li>
            <li className='text-sm flex items-center justify-start hover:text-black cursor-pointer mb-2'><FaGlobe className='mr-2'/><a href={user.website_url} target='_blank' rel='noreferrer'>Website</a></li>
            <li className='text-sm flex items-center justify-start hover:text-black cursor-pointer mb-2'><FaGithub className='mr-2'/> @{user.github_username}</li>
        </ul>
        </article>
        
    </div>
  )
}
