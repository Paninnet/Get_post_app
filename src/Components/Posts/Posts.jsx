import React, { useContext, useEffect, useState } from 'react'
import classes from './Posts.module.css'
import { PostItem } from '../PostItem/PostItem'
import { postsContext } from '../../Context/Posts/postsContext'
import { Modal } from '../Modal/Modal'
import { Select } from '../Select/Select'
import { Input } from '../Input/Input'
import { Loader } from '../Loader/Loader'
import { Pages } from '../Pages/Pages'

export const Posts = () => {
   const [modal, setModal] = useState(false)

   const { state, showPosts, selectSelect,serachPost,selectById,showActivePage } = useContext(postsContext)

   return (
      <div className={classes.Posts_wrapper}>
         <h1>Posts List</h1>
         <div className={classes.mowe_with_posts}>
            <button onClick={()=>setModal(true)}>Add Post</button>
            <Modal  setModal ={setModal} visible={modal}/>
            <Input showPosts={showPosts} serachPost={serachPost}/>
            <Select state={state}  disabledValue='Selected by' changeSelect={selectSelect} selectById={selectById}
            optionValue={[{value: 'title', text: "Title"},{value:'body', text:"Description"},{value:'id', text:"ID"}]}/>
         </div>
         <Pages showPosts={showPosts} serachPost={serachPost} showActivePage={showActivePage} state={state}/>
         {state.loading ? <Loader/>: <PostItem/>}

         {/* {state.filteredPost.length  ? <PostItem /> : <p className={classes.notFounr}>Posts not found</p> } */}

      </div>
   )
}