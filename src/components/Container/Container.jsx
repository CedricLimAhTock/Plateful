import React from 'react'
import './container.css'
import food from '../../statics/apple-pie.png'

const Container = () => {
  return (
    <div className="card">
      <div className="img">
        <img src={food} alt="food" />
      </div>
      <div className="description">
        <h2 className="title">Apple Pie</h2>
        <div className="info">
          <p>Calories: 27kCal</p>
          <p>No of ingredients: 9</p>
        </div>
      </div>
      <div className="options">

      </div>
    </div>
  )
}

export default Container

