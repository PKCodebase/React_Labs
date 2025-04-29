
import React from 'react'
const Navigation = () => {
    return (
        <nav className='conatiner'>

        <div className="logo">
          <img src="/Images/Logo.png" alt="logo" />
        </div>

        <ul>
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
          <li href="#">Location</li>
        </ul>

        <button className="btn">Login</button>

      </nav>
    )
}
export default Navigation;