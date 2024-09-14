import * as esbuild from 'esbuild-wasm'
// compiled Go code to do trnaspile and bunddler work 
import { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';

const App =()=>{
  const ref = useRef<any>();
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async ()=>{
    ref.current = await esbuild.startService({
      worker : true,
      wasmURL : '/esbuild.wasm'
    });
    // getting all the compiled Go code in service obj ,so that service obj can be used in transpile and bunddler funtion
    // console.log(service) =>{build: ƒ, serve: ƒ, transform: ƒ, stop: ƒ}
    //  build for -> bunddling , transform for -> transpilling
  }
  
  useEffect(()=>{
    startService();
  },[]);

  const updateInput =(e : React.ChangeEvent<HTMLTextAreaElement>)=>{
    setInput(e.target.value);
  };

  const onClick = async()=>{
    if(!ref.current)
       return;
    
    // console.log(ref.current)
    const result = await ref.current.transform(input,{
        loader :'jsx',
        target : 'es2015',
    });
    //  console.log(result);
     setCode(result.code);
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

