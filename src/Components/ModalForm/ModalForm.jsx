import { placeholder } from '@babel/types'
import React, { useContext, useReducer, useState } from 'react'
import { postsContext } from '../../Context/Posts/postsContext'
import classes from './ModalForm.module.css'

export const ModalFrom = () => {

   const {addNewPost} =useContext(postsContext)
   const [inputTitle, setInputTitle] = useState('')
   const [inputBody, setInputBody] = useState('')

   const newPost = {
      title:inputTitle, body:inputBody, date: new Date().toLocaleDateString() , time: new Date().toLocaleTimeString()
   }

   const sendNewPost = () =>{
      if (newPost.title.trim() && newPost.body.trim()){
         addNewPost(newPost)
         setInputTitle('')
         setInputBody('')
      }
   }

   return(
      <div className={classes.ModalForm_wrapper}>
         <input onChange={e =>setInputTitle(e.target.value)} value={inputTitle} className={classes.Modalinput} type="text" placeholder="Pull the title"/>
         <textarea onChange={e =>setInputBody(e.target.value)} value={inputBody} className={classes.ModalPtextarea} type="text" placeholder="Pull the description"/>
         <button onClick={(e) => sendNewPost()} className={classes.ModalButton}>Add Post</button>
      </div>
   )
}