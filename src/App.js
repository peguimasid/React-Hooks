import React, { useState, useEffect } from 'react';

function App() {
  const [techs, setTechs] = useState([])
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech])
    setNewTech('')
  }

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if(storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }
  },[])

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs])

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
