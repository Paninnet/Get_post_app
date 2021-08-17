import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { PostList } from './Components/postlist/PostList';
import { PostForm } from './Components/PostForm';
import { MySelect } from './Components/UI/select/MySelect';

function App() {
  const [post, setPost] = useState([
    { id: 1, title: "HTML", body: "Learn HTML" },
    { id: 2, title: "CSS", body: "Learn CSS" },
    { id: 3, title: "JS", body: "Learn JS" },
    { id: 4, title: "REACT.JS", body: "Learn REACT.JS" },
  ])

  const createPost = (newPost) => {
    setPost([newPost, ...post])

  }

  const removePost = (postId) => {
    setPost(post.filter(item => item.id !== postId))
  }

  const [select, setSelect] = useState('')

  const selectedSelect = (newSelect) =>{
    setSelect(newSelect)
    setPost([...post].sort((a,d) => a[newSelect].localeCompare(d[newSelect])))
    console.log(newSelect);
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <MySelect defaultSelect="Selected by" 
      options={[
        {value:'title', text:'Title'},
        {value:'body', text:'Description'}
      ]}
      selectedSelect={selectedSelect}
      value={select}
      />
      {post.length !== 0 ? <PostList deletePost={removePost} posts={post} /> : <h1>Post not Found</h1>}

    </div>
  );
}

export default App;
