import ReactDOM from 'react-dom/client';

const App =()=>{
  return (
    <div>
      Hi
    </div>
  )
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App/>
);

