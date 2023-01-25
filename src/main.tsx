import React from 'react'; // coração do react
import ReactDOM from 'react-dom/client'; // conection do coração com DOM (document object Model)
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
