import React, { useState } from 'react';

function App() {
  const [techs, setTechs] = useState(['ReactJS', 'React Native'])
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech])
    setNewTech('')
  }

  return (
    <div className="App">
      <>
      <ul>
        { techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="submit" onClick={handleAdd}>Add Tech</button>
      </>
    </div>
  );
}

export default App;
