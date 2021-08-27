import axios from 'axios'
import React, { useReducer } from 'react'
import { postsContext } from './postsContext'
import { ADD_NEW_POST, DELETE_POST, LOADING, postsReducer, SEARCH, SELECTED, SELECTED_ID, SHOW_ALL_POSTS } from './postsReducer'

export const PostsState = ({ children }) => {

   const url = `https://jsonplaceholder.typicode.com`

   const initialState = {
      postsData: [],
      filteredPost:[],
      loading:false
   }

   const loading = () => {
      dispatch({type:LOADING})
   }

   const [state, dispatch] = useReducer(postsReducer, initialState)

   const addNewPost = (newPost) => {
      const postsData = {
         title: newPost.title, id:Date.now(), body: newPost.body, date: newPost.date, time: newPost.time
      }
      dispatch({ type: ADD_NEW_POST, postsData })
   }


   const showPosts = async () => {
      loading()
      const postsData =  await axios.get(`${url}/posts`)
      dispatch({ type: SHOW_ALL_POSTS, postsData })
   }

   const deletePost = (id) => {
      dispatch({type:DELETE_POST, filteredPost:id})
   }

   debugger
   const selectSelect = (value) => {
      console.log(value);
      dispatch({type:SELECTED, value})
   }

   const selectById =( value)=> {
      dispatch({type:SELECTED_ID, value})
   }

   debugger
   const serachPost = (serchText) => {
      dispatch({type:SEARCH , serchText})
   }

 

   return (
      <postsContext.Provider value={{ state, addNewPost, showPosts, deletePost,selectSelect, serachPost,selectById }}>
         {children}
      </postsContext.Provider>
   )
}