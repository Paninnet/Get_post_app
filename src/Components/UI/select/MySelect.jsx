import React from 'react'
export const MySelect = ({defaultSelect,options, selectedSelect, value}) => {
   debugger
   return(
      <select value={value} onChange={(e)=>selectedSelect(e.target.value)}>
        <option disabled value = ''>{defaultSelect}</option>
        {options.map(item =>{
           return <option key={item.value}value={item.value}>{item.text}</option>
        })}
   
      </select>
   )
}