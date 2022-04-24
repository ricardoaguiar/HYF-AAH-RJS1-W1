import { useState } from 'react';
import './App.css';
import UnorderedList from './components/UnorderedList';

function App() {
  return (
    <div className="App">
      <UnorderedList />
      <Counter />
    </div>
  );
}

export default App;

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
