import React from 'react';
const MyPersonComponent = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}
export default MyPersonComponent;

// functional components use an arrow function that accepts an argument, we can
// access the passed down data via props.

// HOOKS ARE A WAY TO ACCESS STATE, WITHOUT CLASS COMP, WE USE FUNC COMP
// WE IMPORT USESTATE, STATE IS WHAT WE USE TO ACCESS STATE, SET STATE IS USED FOR UPDATING STATE
// A hook, generally speaking, is just a function, either built-in or custom, that allows you to "hook" in or use a certain piece of functionality.