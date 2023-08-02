import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

import { Editor } from '@monaco-editor/react'
import NavBar from './components/NavBar';
import StaticBadge from './components/StaticBadge';
import Donating from './components/Donating';

function App() {
  const [count, setCount] = useState(0);

  const code = '// my infomation\nconst INFO = {\n\tname: "Reza Mousavi",\n\tgithub: "https://github.com/iamrezamousavi"\n}';

  return (
    <>
      <NavBar />
      {/* <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>A Software engineer</h1>
      <StaticBadge />
      <Editor theme='vs-dark' width='100%' height='50vh' defaultLanguage='javascript' defaultValue={code} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on github link to learn more
      </p>
      <Donating />
    </>
  )
}

export default App;
