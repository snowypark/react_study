import React, { useState } from 'react';

function InfoInput({setCount}) {

    const [ inputValue, setInputValue ] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setCount(e.target.value);
      }

    return (
        <>         
        <input type="text" onChange={ handleInputChange } 
        value={ inputValue }></input>;
        </>            
    );
}

export default InfoInput;