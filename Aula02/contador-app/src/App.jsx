import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function cliqueDoBotao() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h1>Contador</h1>
        <p>{count}</p>
        <button onClick={cliqueDoBotao}>Incrementar</button>
      </div>
    </>
  );
}

export default App;
