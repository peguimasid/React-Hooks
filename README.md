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

***useState*** --> Substitui os estados (state) <br>
***useEffect*** --> Substitui os metodos de ciclo de vida (***EX:*** `componentDidMount`) <br>
***useMemo*** --> Fazer calculos <br>
***useCallBack*** --> Fazer com que funções so sejam chamadas quando coisas específicas forem alteradas no estado/código <br>

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

  //TEMOS UMA CONST techs E O VALOR setTechs, E AGORA EM VEZ DE USAR O setState, VAMOS UTILIZAR O setTechs E PASSAR O NOVO VALOR DO ESTADO.

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

## Aula 03 - Hook useEffect

O ***useEffect*** substitui os metodos de ciclo de vida que tinhamos antes como `componentDidMount`, `componentDidUpdate` e `componentWillUnmount`
```
                    QUANDO ELA VAI SER CHAMADA
                    **
useEffect(() => {}, [])
          ********
          FUNÇĀO QUE VAI SER CHAMADA
```
podemos usar como exemplo, um armazenamento que antes faziamos no `localStorage`, agora em vez de usar o `ComponentDidMount` podemos fazer assim.

```
import React, { useState, useEffect } from 'react';
                          *********
...
//PEGA OS ITENS ARMAZENADOS NO LOCALSTORAGE
useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if(storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }
  },[])
    **
    //SO VAI SER CHAMADO UMA UNICA VEZ QUANDO A PAGINA CARREGAR

//ARMAZENA OS ITENS NO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs])
     *******
     //SEMPRE QUE O ARRAY DE TECHS MUDAR ESSE USEEFFECT VAI SER CHAMADO
```

## Aula 04 - Hook useMemo

Usamos sempre que precisarmos fazer um calculo e so queremos que esse calculo seja feito quando uma propriedade especifica mudar.

***Exemplo:***

```
import React, { useState, useEffect, useMemo } from 'react';
                                     *******
...
                                              //SERA RECALCULADO SOMENTE QUANDO O ESTADO "TECHS" MUDAR
                                              *****
const techSize = useMemo(() => techs.length, [techs])
                               ************
                               //CALCULO QUE DESEJAMOS FAZER
...

<strong>Voce tem {techSize} tecnologias na lista</strong>
```
## Aula 05 - Hook useCallBack

Ela evita de uma funçāo ser chamada sem necessidade, gastando espaco e processamento.

***Exemplo:***

Temos nossa funcao `handleAdd()` que é chamada toda vez que alteramos qualquer coisa na pagina:

```
function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }
```

usando o ***useCallBack*** ela so sera chamada quando propriedade especificas da funcao mudarem:

***EX:***
```
import React, { useState, useEffect, useMemo, useCallback } from 'react';
                                              ***********
...
const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);
      **************
      //SO SERÁ CHAMADA NOVAMENTE QUANDO O VALOR DE "newTech" ou "techs" MUDAR
```
