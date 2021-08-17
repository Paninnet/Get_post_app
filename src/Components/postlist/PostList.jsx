import React, { useRef, useState } from 'react'
import { PostItem } from '../postitem/PostItem'


export const PostList = ({posts, deletePost}) => {

   return (
      <div className='posts'>
         <h1>Posts List</h1>
         {posts.map(post => {
            return <PostItem deletePost={deletePost} data={post} key={post.id} />
         })}
      </div>
   )
}