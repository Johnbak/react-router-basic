import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {

    const navStyle ={
        color: 'white',
        textDecoration: 'none'  
    };

    return (
        <div>
            <nav className="nav-bar">
                <h3>This is H3</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to='/about'>
                        <li>About</li>
                    </Link>
                    <Link style={navStyle} to='/shop'>
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
