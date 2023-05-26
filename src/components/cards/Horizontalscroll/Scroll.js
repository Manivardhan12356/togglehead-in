import React from 'react'
import './scroll.css'

const Scroll=(props)=> {
  return <div className="horizontal-scroll-container">{props.children}</div>;
}

export default Scroll
