/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <div>
//       <h1>Custom </h1>
//     </div>
//   )
// }

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherelement = (
  <a href="https://google.com" target = '_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',target: '_blank'
  },
  'click me to visit google',
  anotherelement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
