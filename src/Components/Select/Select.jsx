import React from 'react'

export const Select = ({ disabledValue, optionValue, changeSelect, value, state, selectById }) => {
   if (state.postsData.length <=1) {
      return (
         <select disabled onChange={(event) => changeSelect(event.target.value)}>
            <option  value='#'>{disabledValue}</option>
         </select>
      )
   }
   return (
      <select onChange={(event) =>{
         if (event.target.value === 'id'){
            selectById(event.target.value)
         }else{
            changeSelect(event.target.value)
         }
      } }>
         <option disabled value='#'>{disabledValue}</option>
         {optionValue.map(item => {
            return <option key={item.value} value={item.value}>{item.text}</option>
         })}
      </select>
   )
}