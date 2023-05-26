import React from 'react'
import './header.css'

const Header = () => {
   return (
      <header>
         <div className="d-flex header-div  container justify-content-between align-items-center">
            <div className='content d-flex'>
               <h2>Lorem ipsum</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Saepe vitae reiciendis officiis, numquam laborum atque <br />  assumenda necessitatibus repellat, obcaecati ani suscipit <br /> similique ut nam magnam odit itaque deleniti ea nihile
               </p>
               <span className='break'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Saepe vitae reiciendis officiis, numquam laborum atque assumenda necessitatibus repellat, obcaecati ani suscipit  similique ut nam magnam odit itaque deleniti ea nihile
               </span>
               <div className="button-main">
                  <span className='button'>Know More
                     <svg style={{ color: "#fff" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                     </svg>
                  </span>
               </div>


            </div>
            <div className="banner d-flex justify-content-between align-items-center">
               <p></p>
            </div>
         </div>
      </header>
   )
}

export default Header

