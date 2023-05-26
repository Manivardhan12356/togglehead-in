import React from 'react'
import './testimonals.css'
import { test } from '../../data'

const Testimonals = () => {
  return (
    <section className='Testimonals'>
        <div className="main-color">
           <div className="container d-flex main-div-test">
              {
                 test.map(item => (
                    <div className="values">
                       <span className='name'>{item.name}</span>
                       <h3 className='numbers'>{ item.numbers}</h3>
                       <p className='strong'>{ item.name}</p>
                       <p className='content'>{ item.content}</p>
                    </div>
                 ))
             }
           </div>
      </div>
    </section>
  )
}

export default Testimonals
