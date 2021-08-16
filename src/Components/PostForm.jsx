import React, { useState } from 'react'
import { MyButton } from './UI/btn/MyButton'
import { MyInput } from './UI/input/MyInput'

export const PostForm = ({create}) => {
   const [title, setTitle] = useState('')
   const [body,setBody] = useState("")

   const addNewPost = (e) => {
      const newPost = {
         id: Date.now(), title, body, date: new Date().toLocaleDateString(), time:new Date().toLocaleTimeString()
       }
      if(title.trim() && body.trim()){
         e.preventDefault()
         create(newPost)
         setBody('')
         setTitle('')
      }
    }

   return (
      <form className='form' action="#">
         <MyInput onChange={e => setTitle(e.target.value)} value={title} type='text' placeholder='Pull the title'></MyInput>
         <MyInput onChange={e => setBody(e.target.value)} value={body} type='text' placeholder='Pull description'></MyInput>
         <MyButton onClick={addNewPost} >Add Post</MyButton>
      </form>
   )
}