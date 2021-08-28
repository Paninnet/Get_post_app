import React, { useEffect } from 'react'
import { Loader } from '../Loader/Loader'
import classes from './Pages.module.css'
import { NavLink } from 'react-router-dom'

export const Pages = ({ state, showActivePage, showPosts }) => {

   let paginationPages = state.totalPage / state.pagesize
   const paginationPagesArray = []
   for (let index = 1; index <= paginationPages; index++) {
      paginationPagesArray.push(index)
   }
   useEffect(() => {
      showPosts()
   }, [state.currentPage])



   return (
      <div className={classes.pages}>
         {paginationPagesArray.map((page, index) => {
            return <button onClick={(e) => {
               showActivePage(e.target.id)
            }}
               key={index} id={index + 1} className={state.currentPage == page ? classes.pageButtonActive : classes.pageButton}>{page}
            </button>
 
         })}

      </div>

   )
}