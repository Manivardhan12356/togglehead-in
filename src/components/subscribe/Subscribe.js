import React from 'react'
import './subscribe.css'

const Subscribe = () => {
  return (
    <section className='Subscribe container d-flex justify-content-between align-items-center'>
      <div className='sub-main'>
        <h2>Subscribe</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et dolore magna</p>
        <div className="input-div">
          <input type="text" placeholder='Enter your Email Address' />
          <div className="now d-flex align-items-center justify-content-center">
            <span>Subscribe Now</span>
             <svg style={{ color: "#fff" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                     </svg>
          </div>
        </div>
      </div>
      <div className='subscribe-image'>
        <span></span>
      </div>
    </section>
  )
}

export default Subscribe
