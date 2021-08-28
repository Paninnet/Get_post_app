import React, { useContext, useEffect } from 'react'
import { postsContext } from '../../Context/Posts/postsContext'
import classes from './PostItem.module.css'

export const PostItem = () => {
   const { state, deletePost } = useContext(postsContext)

   if (state.filteredPost.length) {
      return (
         <div >
            {state.filteredPost.map(item => {
               return <div key={item.title} className={classes.PostItem_wrapper}>
                  <div className={classes.post_data}>
                     <div className={classes.post_date}>{item.date} {item.time}</div>
                     <div><strong>{item.id}) {item.title}</strong></div>
                     <div className={classes.post_body}>{item.body}</div>
                  </div>
                  <div>
                     <button onClick={() => deletePost(item.id)}>delete</button>
                  </div>
               </div>
            })}
         </div>
      )
   }
   return (
      <p className={classes.notFounr}>Posts not found</p>
   )

}