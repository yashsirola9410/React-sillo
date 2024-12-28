// This code demonstrates how to manually implement a simple
//  rendering function for rendering a React-like element 
// to the DOM

function customRender(reactelement , container){  // yahan par custom render function ki shuruwat hoti hai 

        /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

   const domElement = document.cresteElement(reactelement.type)// yahan ek new element bana hai 

   domElement.innerHTML = reactelement.child    // ye inner html mai "click me to visit google" add karta hai 

   for(const prop in reactelement.props){    //ye loop chalta hai har ek reactelement ki prop pe aur usse set karta hai attribute apne mai 

    if(prop === 'children') continue ;
    domElement.setAttribute(prop , reactelement.props[prop])
   }

   container.appendChild(domElement)  // yahan pe child mai appen hota hai 
}

const reactelement = {
    type : 'a',
    props :{
        href : "https://google.com",
        target : '_blank'
    },
    children : "click me to visit google"
}

const maincontainer = document.querySelector('#root')

customRender(reactelement , maincontainer)