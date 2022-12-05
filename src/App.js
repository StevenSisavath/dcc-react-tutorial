import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries'

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-3-2021'}])

  return (
    <div className="App">
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
