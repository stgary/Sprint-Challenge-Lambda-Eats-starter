import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <Link to='/order'>
                <button>Order</button>
            </Link>
            <Link to='/pizza'>
                <button>Pizza</button>
            </Link>
        </div>
    )
}