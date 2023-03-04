import React, { useState }  from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import '@assets/css/pages/page-index.css'

const Button = () => {

  const [count, setCount] = useState(0);

  return(
    <button onClick={() => setCount((count) => count + 1)} className="btn btn-dark">
      count is {count}
    </button>
  )

};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App Component={Button} editCode="clients/pages/page-index.jsx" />
  </React.StrictMode>,
)
