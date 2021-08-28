import axios from 'axios'
import React, { useReducer } from 'react'
import { postsContext } from './postsContext'
import { ADD_NEW_POST, DELETE_POST, LOADING, postsReducer, SEARCH, SELECTED, SELECTED_ID, SHOW_ACTIVE_PAGE, SHOW_ALL_POSTS } from './postsReducer'

export const PostsState = ({ children }) => {

   const url = `https://jsonplaceholder.typicode.com`

   const initialState = {
      postsData: [],
      filteredPost:[],
      loading:false,
      currentPage:1,
      totalPage:1,
      pagesize:10
   }

   const loading = () => {
      dispatch({type:LOADING})
   }

   const [state, dispatch] = useReducer(postsReducer, initialState)

   const addNewPost = (newPost) => {
      const filteredPost = {
         title: newPost.title, id:Date.now(), body: newPost.body, date: newPost.date, time: newPost.time
      }
      dispatch({ type: ADD_NEW_POST, filteredPost })
   }


   const showPosts = async () => {
      loading()
      const postsData =  await axios.get(`${url}/posts?_limit=10&_page=${state.currentPage}`)
      dispatch({ type: SHOW_ALL_POSTS, postsData })
   }

   const deletePost = (id) => {
      dispatch({type:DELETE_POST, filteredPost:id})
   }

   const selectSelect = (value) => {
      dispatch({type:SELECTED, value})
   }

   const selectById =( value)=> {
      dispatch({type:SELECTED_ID, value})
   }

   const serachPost = (serchText) => {
      dispatch({type:SEARCH , serchText})
   }


   const showActivePage= (page) => {
      dispatch({type:SHOW_ACTIVE_PAGE, page})
   }

 

   return (
      <postsContext.Provider value={{ state, addNewPost, showPosts, deletePost,selectSelect, serachPost,selectById,showActivePage }}>
         {children}
      </postsContext.Provider>
   )
}