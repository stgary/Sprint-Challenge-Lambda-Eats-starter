import React from 'react'

function Pizza({ details }) {
  if (!details) {
    return <h3>Working on your pizza...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.name}</h2>
      <p>Crust: {details.crust}</p>
      <p>Size: {details.size}</p>
      <p>Email: {details.comments}</p>

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((tpg, idx) => <li key={idx}>{tpg}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Pizza