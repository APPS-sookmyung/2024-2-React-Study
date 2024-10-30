import { useState } from 'react';
import Counter from './components/Counter';

function App() {

  // number
  const [num, setNum] = useState(0);

  // string
  const [name, setName] = useState('');

  // boolean
  const [isChecked, setIsChecked] = useState(false);

  return (
   <div className="App">
     <Counter />
     <div>
      <input 
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <input 
          type="checkbox"
          value={isChecked}
          onChange={(e) => setIsChecked(e.target.value)}
        />
        {isChecked ? <span>체크됨</span> : <span>체크안됨</span>}
      </div>
     </div>
   </div>
  );
}

export default App;
