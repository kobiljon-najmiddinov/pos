import { useState } from 'react'
import Statusbar from './components/Statusbar.jsx';
import Content from './components/Content.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='status-bar' className=''>
        <Statusbar />
      </div>
      <div id='content'></div>
      <Content />
      <header>
        <button>New Order</button>
      </header>
      <section id='categories'>
        <div></div>
      </section>
    </>
  )
}

export default App;