import React from 'react'
import './exam.css'
import { exams } from '../../data'

const Exam = () => {
  return (
    <section className='exam-main'>
      <div className="container d-flex exams">
        <div className='time-exam d-flex flex-column'>
          <h3>Upcoming <br /> Examinations</h3>
          <p>Enquire about the examation & <br /> register for the exams </p>
        </div>
        <div className='d-flex main-div-exam justify-content-center  align-items-center'>
          {
            exams.map(exam => (
              <div className="d-flex levels">
                <div className="timing">
                  <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#26619C" class="bi bi-calendar4-week" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  </svg>
                </div>
                <div className="exam-content">
                  <p >{exam.date}</p>
                  <span>{exam.level}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Exam




