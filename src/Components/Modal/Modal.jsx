import React from 'react'
import { ModalFrom } from '../ModalForm/ModalForm'
import classes from './Modal.module.css'

export const Modal = ({visible,setModal,}) => {


   const modalVisible = [classes.Modal_wrapper]
   
   if(visible){
      modalVisible.push(classes.active)
   }
  

   return(
      <div className={modalVisible.join(" ")} onClick={() =>setModal(false)}>
         <div onClick={e =>e.stopPropagation()} className={classes.Modal_content}>
            <ModalFrom/>
         </div>
      </div>
   )
}