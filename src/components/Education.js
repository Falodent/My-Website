import React from 'react'

const Education = ({school,degree,year}) => {
  return (
    <div className="education-card">
        <h3>{school}</h3>
        <span>{degree}</span>
        <span>{year}</span>
    </div>
  )
}

export default Education