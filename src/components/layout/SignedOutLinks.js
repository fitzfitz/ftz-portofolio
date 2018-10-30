import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div>
            <Link to='/' className="brand-logo">Fitzgeral</Link>
            <ul className="right">
                <li><NavLink to='/signup'>Signup</NavLink></li>
                <li><NavLink to='/signin'>Login</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks