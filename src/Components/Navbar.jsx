import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div style={{backgroundColor:'black',padding:'10px'}}>
            <NavLink to='/register' style={{color:'white',marginRight:'5px'}}>Register</NavLink>
            <NavLink to='/admin' style={{color:'white',marginRight:'5px'}}>Admin</NavLink>
        </div>
    </div>
  )
}

export default Navbar