import React from 'react'
import './Button.css'

// some confusing shit that says a thing is an operator
const isOperator = val => {
  return !isNaN(val) || val === '.' || val === '='
}

// whatever value is pressed on button is returned here. If it is a number, decimal or =,
// render nothing. If not, add class 'operator.'
export const Button = props => (
  <div className={`button-wrapper ${
    isOperator(props.children) ? null : 'operator'
  }`}
  onClick={ () => props.handleClick(props.children) } 
  >
    {props.children}
  </div>
)

export default Button
