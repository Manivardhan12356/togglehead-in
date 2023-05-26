import React from 'react'
import { cards } from '../../data'
import './cards.css'
import Scroll from './Horizontalscroll/Scroll'

const Cards = () => {
   return (
      <section className='cards-main'>
         <div className="container cards d-flex">
            <Scroll>
               {cards.map(card => (

                  <div className="card-content">
                     <h4>{card.name}</h4>
                     <p>Lorem ipsum dolor sit amet, consetetur <br /> sadipscing elitr, sed diam nonumy eirmod</p>
                     <div className="know d-flex align-items-center">
                        <p>Know More</p>
                        <div className="svg">
                           <svg className='svg' svgxmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#26619C" class="bi bi-chevron-right" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        </div>
                     </div>
                  </div>

               ))}
            </Scroll>
         </div>
      </section>
   )
}

export default Cards
