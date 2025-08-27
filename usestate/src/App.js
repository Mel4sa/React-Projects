import './App.css';
import { useState } from 'react';

function App() {
  const [sayı, setSayı] = useState(0);

  return (
    <div className="App">
      <h1 className="title">🧮 Sayaç Uygulaması</h1>
      <h2 className="counter">{sayı}</h2>
      <div className="buttons">
        <button className="btn increase" onClick={() => setSayı(sayı + 1)}>+ Arttır</button>
        <button className="btn decrease" onClick={() => setSayı(sayı - 1)}>- Azalt</button>
        <button className="btn reset" onClick={() => setSayı(0)}>🔄 Sıfırla</button>
      </div>
    </div>
  );
}

export default App;
