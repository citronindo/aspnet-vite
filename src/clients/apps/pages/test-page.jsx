import React, { useEffect, useRef, useImperativeHandle, useState, forwardRef } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import HelloHTML from './hello';
import { renderToString } from 'react-dom/server';

import '@assets/css/app.css';

const root = document.getElementById('root');
const dom = ReactDOM.createRoot(root);

const CustomButton = forwardRef(function CustomButton(props, ref) {
  const btnRef = useRef();
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    handleClick
  }))

  const handleClick = () => {
    setCount((count) => count + 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <button {...props} ref={btnRef} onClick={reset} className="btn btn-dark">
      count is {count}
    </button>
  )
});

function MainPage() {

  const myref = useRef(null);

  const btnOutside = document.getElementById("btnOutside");

  const handleClick = () => {
    myref.current.handleClick();
  }

  useEffect(() => {

    btnOutside.addEventListener('click', handleClick);
    return () => {
      btnOutside.removeEventListener('click', handleClick);
    };

  }, [btnOutside]);


  return (
    <>
      <CustomButton ref={myref} />
      <button onClick={handleClick} className="btn btn-dark">Click From Inside</button>
    </>
  )
}

function TestPage(){
  const hellostring = renderToString(<HelloHTML />);
  
  // const helloMarkupHTML = {__html: hellostring};
  // <div dangerouslySetInnerHTML={helloMarkupHTML} />

  const greetEl = document.getElementById("greet");
  
  useEffect(() => {
    greetEl.innerHTML = hellostring;
  }, [greetEl, hellostring]);

  return (
    <>
      <App Component = {MainPage} editCode="clients/pages/test-page.jsx"/>
    </>
  )
}

dom.render(<TestPage/>);
