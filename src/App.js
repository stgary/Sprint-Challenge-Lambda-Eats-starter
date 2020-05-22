import React, { useState, useEffect } from 'react'
import Pizza from './components/Pizza'
import PizzaForm from './components/PizzaForm'
import Home from './components/Home'
import Help from './components/Help'
import formSchema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'
import { Route } from 'react-router-dom'

const initialFormValues = {
    name: '',
    comments: '',
    size: '',
    crust: '',
    toppings: {
      sausage: false,
      pepperoni: false,
      pineapple: false,
      bacon: false,
    },
  }

  const initialFormErrors = {
    name: '',
    comments: '',
    size: '',
    crust: '',
    toppings: ''
  }

  const initialOrder = []
  const initialDisabled= true

  export default function App() {
    const [order, setOrder] = useState(initialOrder)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const postOrder = newOrder => {
        axios.post('https://reqres.in/api/order', newOrder)
          .then(res => {
            setOrder([res.data, ...order])
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => {
            setFormValues(initialFormValues)
          })
    }

    const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
    
        yup
          .reach(formSchema, name)
          .validate(value)
          .then(valid => {
            setFormErrors({
              ...formErrors,
              [name]: ''
            })
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0]
            })
          })
    
        setFormValues({
          ...formValues,
          [name]: value 
        })
    }

    
  const onCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      name: formValues.name.trim(),
      comments: formValues.comments.trim(),
      size: formValues.size,
      crust: formValues.crust,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true)
    }
    postOrder(newOrder)
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>Make Your Own Pizza</h1></header>

    <Route exact path='/order'>
      <PizzaForm
          values={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          disabled={disabled}
          errors={formErrors}
          onCheckboxChange={onCheckboxChange}
      />
    </Route>

      {
          order.map(ord => {
            console.log(ord)
          return (
              <Pizza key={ord.id} details={ord} />
          )
          })
      }

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/help'>
        <Help />
      </Route>
      
    </div>
    )
  }