import React from 'react'
import './Navbar.css'
import { navbar } from '../../data'

const Navbar = () => {
   return (
      <nav className='navbar-main'>
         <div className="main-div d-flex container justify-content-between align-items-center">
            <div className="logo">
               LOGO
            </div>
            <div className="nav-links d-flex justify-content-center align-items-center">
               {
                  navbar.map((nav) => (
                     <div className='links d-flex'>
                        <span className='nav-names'>{nav}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                     </div>
                  ))
               }
               <svg className='serach-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-zoom-out" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                  <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
               </svg>

               <div className="enroll d-flex justify-content-center align-items-center">
                  <p>Enrollement </p>
              </div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar



