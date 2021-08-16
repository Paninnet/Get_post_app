import React, { useRef, useState } from 'react'
import { PostItem } from '../postitem/PostItem'


export const PostList = (props) => {
   
   return (
      <div className='posts'>
       
         <h1>Posts List</h1>
         {props.posts.map(post => {
            return <PostItem data={post} key={post.id} />
         })}
      </div>
   )
}