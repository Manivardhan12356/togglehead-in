import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper.min.css';
import { cards } from '../../data'
import './cards.css'

const Cards = () => {
   useEffect(() => {
      new Swiper('.swiper-container');
   }, []);

   return (
      <section className='cards-main'>
         <div className="container">
            <div className="swiper-container">
               <div className="swiper-wrapper">
                  {cards.map((item, index) => (
                     <React.Fragment key={index}>
                        <div className="swiper-slide" key={index}>
                           <div className="card-content">
                              <h4>{item.name}</h4>
                              <p>{item.content} <br /> sadipscing elitr, sed diam nonumy eirmod </p>
                           </div>
                           <div className="know d-flex align-items-center">
                              <p>Know More</p>
                              <div className="svg">
                                 <svg className='svg' svgxmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#26619C" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                 </svg>
                              </div>
                           </div>
                        </div>
                        
                     </React.Fragment>
                  ))}
               </div>

            </div>
         </div>
      </section>
   );
};

export default Cards;