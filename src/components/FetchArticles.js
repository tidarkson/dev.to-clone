import React, { useState, useEffect } from 'react'
import { RiHeart3Line } from 'react-icons/ri'
import { BiComment } from 'react-icons/bi'
import { format } from 'date-fns'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Person from "./Person";

export default function FetchArticles() {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)


    useEffect(() => {
        setIsLoading(false)

        const FetchArticles = async () => {
            const res = await fetch(`https://dev.to/api/articles?per_page=10&page=${page}`)
            const data = await res.json()
            setArticles(data)
        }

        FetchArticles()
        // setIsLoading(false)
    }, [page])

    const handlePrevious = () => {
        if (page === 1) {
            setPage(1)
            toast("You have reached the end of the page")
        }
        else {
            setPage(page - 1)
        }
        window.scrollTo(0, 0)
    }

    const handleNext = () => {
        if (page > 1000) {
            setPage(1000)
            toast("You have reached the last page")
        }
        else {
            setPage(page + 1)
        }
        window.scrollTo(0, 0)
    }


    return (
        <>

            <section className='max-width'>
                {isLoading ? <div className='spinner'>
                    <article></article>
                </div> :
                    <>

                        <header className='max-w-100% flex items-center justify-between'>
                            <div className='flex items-center justify-start'>
                                <img src="./image/dev.png" alt="dev" className='w-12 mr-2' />
                                <input type="text" placeholder='Search...' className='h-10 w-80 border-2 rounded p-2 border-slate-300 outline-indigo-700' />
                            </div>
                            {/* <div className='flex items-center justify-start gap-3'>
                                <button className='login hover:bg-indigo-200 py-2 px-4 rounded-lg '>Log in</button>
                                <button className='border border-indigo-600 hover:bg-indigo-700 text-indigo-700 hover:text-white py-2 px-4 rounded-lg'>Create account</button>
                            </div> */}
                        </header>

                        <article className='border-t border-b border-slate-300 mb-10'>
                            <ul className='flex items-center justify-between px-3 py-3'>
                                <li><button className='hover:text-indigo-700' onClick={() => setPage(handlePrevious)}>&larr; Previous</button></li>
                                <li><button className='hover:text-indigo-700' onClick={() => setPage(handleNext)}>Next &rarr;</button></li>
                            </ul>
                        </article>

                        <ToastContainer position='top-right' />

                        <section className='grid grid-cols-1 gap-5'>
                            {articles.map(({ id, description, title, url, comments_count, public_reactions_count, published_timestamp, positive_reactions_count, cover_image, tag_list, user, reading_time_minutes }) =>

                                <article key={id} className="border border-slate-300 rounded-lg">
                                    {cover_image && <a href={url} rel='noreferrer' target="_blank"><img src={cover_image} alt={title} className="rounded-t" loading='lazy' /></a>}

                                    <div className='p-5 relative'>
                                        <article className='name flex items-center justify-start mb-5'>
                                            <img src={user.profile_image_90} alt={user.name} className="mr-3 w-14 rounded-2xl" />
                                            <ul>
                                                <li className='font-bold text-slate-700'>{user.name}</li>
                                                <li>{format(new Date(published_timestamp), 'MMMM dd yyy')}</li>
                                            </ul>
                                            <article className='person'>
                                                <Person user={user} />
                                            </article>
                                        </article>

                                        <article className='mb-5'>
                                            <a href={url} target="_blank" rel="noreferrer" className='font-bold text-3xl hover:text-indigo-700'>{title}</a>
                                            <p className='mt-5'>{description}</p>
                                        </article>

                                        <article className='mb-5'>
                                            <ul className='flex items-center justify-start flex-wrap'>
                                                {tag_list.map((tags, index) =>
                                                    <li key={index} className="bg-slate-200 px-1 rounded-lg hover:bg-slate-300 cursor-pointer mr-2 mb-2">
                                                        #{tags}
                                                    </li>)}
                                            </ul>
                                        </article>

                                        <article className='flex flex-wrap items-center justify-between'>
                                            <ul className='flex'>
                                                <li className="text-sm flex items-center justify-start mr-3"><RiHeart3Line className='mr-2' />{positive_reactions_count} Reactions</li>
                                                <li className="text-sm flex items-center justify-start"><BiComment className='mr-2' />{comments_count} Comments</li>
                                            </ul>
                                            <p className='text-sm'>{reading_time_minutes} min read</p>
                                        </article>
                                    </div>
                                </article>
                            )}
                        </section>
                        <article className='border-t border-b border-slate-300 mb-10'>
                            <ul className='flex items-center justify-between px-3 py-3'>
                                <li><button className='hover:text-indigo-700' onClick={() => setPage(handlePrevious)}>&larr; Previous</button></li>
                                <li><button className='hover:text-indigo-700' onClick={() => setPage(handleNext)}>Next &rarr;</button></li>
                            </ul>
                        </article>
                    </>
                }
            </section>
        </>
    )
}
