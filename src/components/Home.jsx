import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <Link to='/order'>
                <button className='order'>Order</button>
            </Link>
            <Link to='/help'>
                <button className='help'>Help</button>
            </Link>
        </div>
    )
}