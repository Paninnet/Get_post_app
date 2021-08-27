import React, { useState } from 'react'

export const Input = ({serachPost}) => {

   const [inputValue, setInputValue] = useState("")
   debugger
   
   const changeInput = (inputText) => {
      setInputValue(inputText)
      if(inputText.trim()){
         serachPost(inputText)
      }
   }
   return (
      <input value={inputValue} onChange={(e)=>changeInput(e.target.value)} type="text" placeholder="search" />
   )
}