import React from 'react'

export default function PizzaForm(props) {
  const {
    values,
    onInputChange,
    onSubmit,
    disabled,
    errors,
    onCheckboxChange,
  } = props

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Build Your Own Pizza</h2>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.comments}</div>
          <div>{errors.crust}</div>
          <div>{errors.toppings}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h6>Build Your Own Pizza</h6>

        <label>Name For The Order&nbsp;
          <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
          />
        </label>

        <label>Choice Of Size
          <select
            onChange={onInputChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select an option -</option>
            <option value='small'>Small 10in</option>
            <option value='medium'>Medium 12in</option>
            <option value='Large'>Large 14in</option>
            <option value='Extra'>Extra-Large 16in</option>
          </select>
        </label>

        <h6>Choice Of Crust</h6>

        <label>Original
          <input
            type='radio'
            name='crust'
            value='original'
            onChange={onInputChange}
          />
        </label>

        <label>Garlic
          <input
            type='radio'
            name='crust'
            value='garlic'
            onChange={onInputChange}
          />
        </label>

        <label>Butter
          <input
            type='radio'
            name='crust'
            value='butter'
            onChange={onInputChange}
          />
        </label>

        <h6>Choice Of Toppings</h6>

        <label>Sausage
          <input
            type='checkbox'
            name='sausage'
            checked={values.toppings.sausage}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Pepperoni
          <input
            type='checkbox'
            name='pepperoni'
            checked={values.toppings.pepperoni}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Pineapple
          <input
            type='checkbox'
            name='pineapple'
            checked={values.toppings.pineapple}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Bacon
          <input
            type='checkbox'
            name='bacon'
            checked={values.toppings.bacon}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Special Instructions
            <input 
                type='textarea'
                name='comments'
                onChange={onInputChange}
            />
        </label>

        <button disabled={disabled} className='submit'>Add To Order</button>

      </div>
    </form>
  )
}
