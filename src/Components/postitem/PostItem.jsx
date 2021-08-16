import React from 'react'
import classes from './PostItem.module.css'

export const PostItem = (props) => {
   console.log(props);
   return (
      <div className={classes.post_wrapper}>
         <div className={classes.post_description}>
            <p>{props.data.date} {props.data.time} </p>
            <h3>{props.data.title}</h3>
            <p>{props.data.body}</p>
         </div>
         <div className={classes.delete_btn}>
            <button>Delete</button>
         </div>
      </div>
   )
}