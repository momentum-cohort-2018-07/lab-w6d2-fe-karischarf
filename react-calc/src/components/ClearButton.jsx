import React from 'react'
import './ClearButton.css'

// using parentheses instead of {} so no return statement is needed
export const ClearButton = (props) => (
  <div className='clear-btn' onClick={props.handleClear}>
    {props.children}
  </div>
)
