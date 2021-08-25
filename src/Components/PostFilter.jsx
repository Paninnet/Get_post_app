import React from 'react'
import { MyInput } from './UI/input/MyInput'
import { MySelect } from './UI/select/MySelect'

export const PostFilter = ({filter, setFilter}) => {
   return (

      <div className="serch_select">
         <MyInput placeholder="Serach" onChange={e => setFilter({...filter, search:e.target.value})} value={filter.search} />
         <MySelect defaultSelect="Selected by"
            options={[
               { value: 'title', text: 'Title' },
               { value: 'body', text: 'Description' }
            ]}
            selectedSelect={selectedSelect=>setFilter({...filter,select:selectedSelect})}
            value={filter.select} />
      </div>

   )
}