import React from 'react'

export default function Header() {
    return (
        <div>
            <header className='max-w-100% flex items-center justify-between'>
                <div className='flex items-center justify-start'>
                    <img src="./image/dev.png" alt="dev" className='w-12 mr-2' />
                    <input type="text" placeholder='Search...' className='h-10 w-70 border-2 rounded p-2 border-slate-300 outline-indigo-700' />
                </div>
                <div className='flex items-center justify-start gap-3 invisible sm:visible' >
                    <button className='login hover:bg-indigo-200 py-2 px-4 rounded-lg '>Log in</button>
                    <button className='border border-indigo-600 hover:bg-indigo-700 text-indigo-700 hover:text-white py-2 px-4 rounded-lg'>Create account</button>
                </div>
            </header>
        </div>
    )
}
