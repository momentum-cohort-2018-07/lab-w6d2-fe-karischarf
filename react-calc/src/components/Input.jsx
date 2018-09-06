import React from 'react'
import './Input.css'

//presentational component that adds class name of 'input' to these props
export const Input = (props) => (<div className='input'> {props.input} </div>)
