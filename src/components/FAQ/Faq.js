import React, { useState } from 'react';
import { FAQ } from '../../data';
import './faq.css';

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className='faq'>
      <h2 className='text-center faq-h2'>FAQ</h2>
      {FAQ.map((item, index) => (
        <React.Fragment key={index}>
          <div className="MF container d-flex justify-content-between align-items-center" style={{borderBottom:expandedIndex === item.name.length-1 ? "none":'1px solid #bbc3cc'}}>
            <p style={{ color: expandedIndex === index ? "#26619C" : "" }}>{item.name}</p>
            <div onClick={() => handleExpand(index)}>
              {expandedIndex === index ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#26619C" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#777e85" className="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              )}
            </div>
          </div>
          <div className="account-content container">
            {expandedIndex === index && <p >{item.content}</p>}
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Faq;


