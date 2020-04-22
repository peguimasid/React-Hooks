<h1 align="center">
  <img src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67" width="200px" />
</h1>

<h3 align="center">
  :rocket: [Bootcamp GoStack#10] React Hooks
</h3>

### Rodando na sua maquina:

1. Baixe o arquivo ***.ZIP***
2. `cd react-hooks-master`
3. `yarn` para instalar as dependencias
4. `yarn start` para iniciar o servidor e abrirá automaticamente

# React Hooks

<!-- Manipular estados Globais de uma aplicaçāo de forma robusta e escalavel. -->

## Aula 01 - Configurando estrutura

1. Criamos um projeto comum com `yarn create react-app <nome-do-projeto>` e deixamos somente um `Hello world` na tela e configuramos tambem o ***ESLint***, ***Prettier*** e ***.editorconfig***

2. Depois adicionamos uma lib que avisa se estivermos usando os Hooks de forma errada:

`yarn add eslint-plugin-react-hooks -D`

Depois de adicionarmos vamos la em `.eslintrc.js` e adicionamos dentro de `plugins`:

```
plugins: [
    'react-hooks'
  ],
```

E dentro de `rules` passamos:

```
'react-hooks/rules-of-hooks': 'error',
'react-hooks/exhaustive-deps': 'warn'
```

## Aula 02 - Hook useState

Ate agora no React se quisermos utilizar o estado na nossa aplicaçāo (state) nos nao poderiamos fazer o componente em forma de funçāo (`function App()`) e sim em formato de class (`class App extends Component`) e o useState chegou para reduzir a quantidade de codigo e diminuir a complexidade de um estado.

Vamos utilizar em um exemplo pratico, olhe o codigo abaixo:

```
import React, { useState } from 'react';

function App() {
  const [techs, setTechs] = useState(['ReactJS', 'React Native'])
  const [newTech, setNewTech] = useState('');

  //TEMOS UMA CONST TECHS E O VALOR SETTECHS, E AGORA EM VEZ DE USAR O SETSTATE, VAMOS UTILIZAR O SETTECHS E PASSAR O NOVO VALOR DO ESTADO.

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

```
