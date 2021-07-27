import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='border-b-4 border-purple-700 text-center fixed w-full top-0 bg-purple-500
        font-bold text-lg text-white'>
            <ul>
                <li className='inline-block pt-4 pb-4'>
                    <Link to='/' className='pl-6 pr-8'>
                        Home
                    </Link>
                    <Link to='/about' className='pl-6 pr-8'>
                        About
                    </Link>
                    <Link to='/articles-list' className='pl-6 pr-8'>
                        Articles
                    </Link>
                    <Link to='/article' className='pl-6 pr-8'>
                        Article
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
