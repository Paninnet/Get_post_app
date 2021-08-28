import logo from './logo.svg';
import './App.css';
import { Posts } from './Components/Posts/Posts';
import { PostsState } from './Context/Posts/PostsState';

function App() {

  return (
    <div className="App">
        <PostsState>
          
          {/* <Loader/> */}
          <Posts />
        </PostsState>

    </div>
  );
}

export default App;
