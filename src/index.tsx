import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App =()=>{
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const updateInput =(e : React.ChangeEvent<HTMLTextAreaElement>)=>{
    setInput(e.target.value);
  }

  const onClick =()=>{
    
  }

  return (
    <div>
      <textarea
       value={input}
       onChange={updateInput}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  )
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App/>
);

