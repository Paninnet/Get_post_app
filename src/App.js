import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { PostList } from './Components/postlist/PostList';
import { MyInput } from './Components/UI/input/MyInput';
import { MyButton } from './Components/UI/btn/MyButton';
import { PostForm } from './Components/PostForm';

function App() {
  const [title, setTitle] = useState('')
  const [body,setBody] = useState("")


  
  const [post, setPost] = useState([
    { id: 1, title: "HTML", body: "Learn HTML" },
    { id: 2, title: "CSS", body: "Learn CSS" },
    { id: 3, title: "JS", body: "Learn JS" },
    { id: 4, title: "REACT.JS", body: "Learn REACT.JS" },
  ])

  const createPost = (newPost) => {
    setPost([newPost, ...post])

  }
  return (
    <div className="App">
      {/* <form className='form' action="#">
        <MyInput onChange={e => setTitle(e.target.value)} value={title} type='text' placeholder='Pull the title'></MyInput>
        <MyInput onChange={e => setBody(e.target.value)} value={body} type='text' placeholder='Pull description'></MyInput>
        <MyButton onClick={addNewPost} >Add Post</MyButton>
      </form> */}
      <PostForm create = {createPost}/>
      <PostList posts={post} />
    </div>
  );



 

  

  
  // }
}

export default App;
