import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counet';
import ClassCounet from './Components/ClassCouner';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
      <ClassCounet/>
    </div>
  );
}

export default App;
