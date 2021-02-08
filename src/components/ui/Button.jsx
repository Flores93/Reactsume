import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({to, icon, text}) => {

    return (
        <NavLink exact to={to} activeClassName='activeBtn' className='btn btn-primary col-12'>
            <span className='hiddeOnSm'>{text}</span> {icon}
        </NavLink>
    )
}

export default Button
