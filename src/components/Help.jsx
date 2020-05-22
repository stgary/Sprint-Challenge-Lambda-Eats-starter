import React from 'react'
import { Link } from 'react-router-dom'

export default function Help() {
    return (
        <div>
            <h2>Help Page</h2>
            <Link to='/'>
                <button>Home</button>
            </Link>
        </div>
    )
}