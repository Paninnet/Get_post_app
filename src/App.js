import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { PostList } from './Components/postlist/PostList';
import { MyInput } from './Components/UI/input/MyInput';
import { MyButton } from './Components/UI/btn/MyButton';

function App() {
  const [title, setTitle] = useState('')
  const [body,setBody] = useState("")

  const addNewPost = (e) => {
    const newPost = {
      id: Date.now(), title, body, date: new Date().toLocaleDateString(), time:new Date().toLocaleTimeString()
    }
    e.preventDefault()
    setBody('')
    setTitle('')
    setPost([newPost, ...post])
    console.log(newPost);
  }
  
  const [post, setPost] = useState([
    { id: 1, title: "HTML", body: "Learn HTML" },
    { id: 2, title: "CSS", body: "Learn CSS" },
    { id: 3, title: "JS", body: "Learn JS" },
    { id: 4, title: "REACT.JS", body: "Learn REACT.JS" },
  ])
  return (
    <div className="App">
      <form className='form' action="#">
        <MyInput onChange={e => setTitle(e.target.value)} value={title} type='text' placeholder='Pull the title'></MyInput>
        <MyInput onChange={e => setBody(e.target.value)} value={body} type='text' placeholder='Pull description'></MyInput>
        <MyButton onClick={addNewPost} >Add Post</MyButton>
      </form>
      <PostList posts={post} />
    </div>
  );



 

  

  
  // }
}

export default App;
