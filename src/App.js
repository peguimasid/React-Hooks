import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <div className="App">
      <>
        <strong>Voce tem {techSize} tecnologias na lista</strong> <br />
        <ul>
          {techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input value={newTech} onChange={(e) => setNewTech(e.target.value)} />
        <button type="submit" onClick={handleAdd}>
          Add Tech
        </button>
      </>
    </div>
  );
}

export default App;
