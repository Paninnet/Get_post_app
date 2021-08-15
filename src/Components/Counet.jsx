import React, { useState } from 'react' 

export const Counter = () =>{

   const [count, setCount] = useState(0)

   const addOne = () =>{
      setCount(prev => prev + 1)
   }

   const minusOne = () =>{
      setCount(prev => prev - 1)
   }
   return(
      <div>
         <p>Counter: {count}</p>
         <button onClick={addOne}>ADD</button>
         <button onClick={minusOne}>MINUS</button>
      </div>
   )
}