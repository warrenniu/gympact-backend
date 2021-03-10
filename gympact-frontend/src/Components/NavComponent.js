import React from 'react'
import { NavLink} from 'react-router-dom'

export default function NavComponent(){

    return(
        <div>
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Log In</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                    <NavLink to="/groups">Groups</NavLink>
                </ul>
            </nav>
        </div>
    )
}