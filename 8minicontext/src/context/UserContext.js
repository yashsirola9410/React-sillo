import React from "react";

const UserContext  = React.createContext()  // ye hai kya ?
         //createContext in React is used to make a "global" space where you can
         //  store data that you want to share with many components, 
         // without having to pass the data down manually through each component.

         //EXAMPLE : For example, if you have a theme (like dark mode or light mode) and you want many components 
         // to use it, instead of passing the theme as props through every component, 
         // you can create a context. Then, any component can easily access that theme directly.

export default UserContext;  // usercontext ek provoder hai 


// DO CHAT GPT U WILL FIND A LOT OF THING TEHRE AND IT WILL BE EASY TO UNDERSTAND 

// AUR EK IMP BAAT 

// SUPPOSE 

{/* <UserContext>
    <LOGIN/>
    <CARD/>
</UserContext> */}  // JAISE MAINE YAHAN PE USERCONTEXT PASS KIYA TO AB MAI USKE UNDAR KI VALUES LOGIN AUR  
                     // CARD DONO MAI LE SAKTA HU