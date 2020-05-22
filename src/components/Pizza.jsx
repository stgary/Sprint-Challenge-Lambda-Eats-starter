import React from 'react'

function Pizza(props) {
    
    const { details } = props

    console.log(details.name)
        
  return (
    <div className='container'>
        <h1>Your Order:&nbsp;</h1>
        <h2>{details.name}</h2>
        <p>Crust:&nbsp;{details.crust}</p>
        <p>Size:&nbsp;{details.size}</p>
        <p>Comments:&nbsp;{details.comments}</p>

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