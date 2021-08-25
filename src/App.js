import logo from './logo.svg';
import './App.css';
import { useMemo, useRef, useState } from 'react';
import { PostList } from './Components/postlist/PostList';
import { PostForm } from './Components/PostForm';
import { MySelect } from './Components/UI/select/MySelect';
import { MyInput } from './Components/UI/input/MyInput';
import { Modal } from './Components/UI/modal/Modal';
import { MyButton } from './Components/UI/btn/MyButton';

function App() {
  const [post, setPost] = useState([
    { id: 1, title: "HTML", body: "Learn HTML" },
    { id: 2, title: "CSS", body: "Learn CSS" },
    { id: 3, title: "JS", body: "Learn JS" },
    { id: 4, title: "REACT.JS", body: "Learn REACT.JS" },
  ])
  const [search, setSerach] = useState('')
  const [select, setSelect] = useState('')
  const [modal, setmodal] = useState(false)


  const sortedPost = useMemo(() => {
    console.log('getSortedPost');
    if (select) {
      return [...post].sort((a, d) => a[select].localeCompare(d[select]))
    }
    return post
  }, [select, post])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLocaleLowerCase().includes(search))

  }, [search, sortedPost])

  const createPost = (newPost) => {
    setPost([newPost, ...post])
    setmodal(false)

  }

  const removePost = (postId) => {
    setPost(post.filter(item => item.id !== postId))
  }

  const selectedSelect = (newSelect) => {
    setSelect(newSelect)
  }

  

  return (
    <div className="App">
      <MyButton onClick ={() => setmodal(true)}>Add Post</MyButton>
      <Modal visible={modal} setVisible={setmodal}>
        <PostForm create={createPost}  />
      </Modal>
      <hr className="hr_line"></hr>
      <div className="serch_select">
        <MyInput placeholder="Serach" onChange={e => setSerach(e.target.value)} value={search} />
        <MySelect defaultSelect="Selected by"
          options={[
            { value: 'title', text: 'Title' },
            { value: 'body', text: 'Description' }
          ]}
          selectedSelect={selectedSelect}
          value={select} />
      </div>
      {sortedAndSearchPosts.length !== 0 ? <PostList deletePost={removePost} posts={sortedAndSearchPosts} /> : <h1>Post not Found</h1>}

    </div>
  );
}

export default App;
