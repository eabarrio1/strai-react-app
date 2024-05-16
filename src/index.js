import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

console.log('hello world!!')

const body = document.getElementById('body');
const h2 = document.getElementsByClassName("text-3xl");

// document.onload = function() {
//     console.log('loaded')
//     // document.getElementsByTagName('body').className = 'visible';
// };

// body.classList.add("visible")
// console.log('loaded')

window.addEventListener("DOMContentLoaded", function() {
    console.log('hey')
    // body.classList.add("visible");
});

if(document.head.querySelector('link[href*="/index.css"]') != null) {
    console.log('css load')
}

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    console.info(delta);
});