import React, { useContext, useEffect, useState } from 'react'
import classes from './Posts.module.css'
import { PostItem } from '../PostItem/PostItem'
import { postsContext } from '../../Context/Posts/postsContext'
import { Modal } from '../Modal/Modal'
import { Select } from '../Select/Select'
import { Input } from '../Input/Input'
import { Loader } from '../Loader/Loader'

export const Posts = () => {
   const [modal, setModal] = useState(false)

   const { state, showPosts, selectSelect,serachPost,selectById } = useContext(postsContext)

   useEffect(() => {
      showPosts()
   },[])
   
   if(state.loading) {
      return(<Loader/>)
   }

   return (
      <div className={classes.Posts_wrapper}>
         <h1>Posts List</h1>
         <div className={classes.mowe_with_posts}>
            <button onClick={()=>setModal(true)}>Add Post</button>
            <Modal setModal ={setModal} visible={modal}/>
            <Input showPosts={showPosts} serachPost={serachPost}/>
            <Select state={state}  disabledValue='Selected by' changeSelect={selectSelect} selectById={selectById}
            optionValue={[{value: 'title', text: "Title"},{value:'body', text:"Description"},{value:'id', text:"ID"}]}/>
         </div>

         {state.filteredPost.length > 0 ? <PostItem /> : <p className={classes.notFounr}>Posts not found</p> }

      </div>
   )
}