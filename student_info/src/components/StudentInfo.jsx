
import React, { useState } from 'react';

function StudentInfo({title, setValue}) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    const handleOnName = (e) => {
       setName(e.target.value);
       setValue(e.target.value);
    }

    const handleOnAge = (e) => {
        setAge(e.target.value);
        setValue(e.target.value);
    }

    const handleOnAddress = (e) => {
        setAddress(e.target.value);
        setValue(e.target.value);
    }

    return (
       <>    
       <h1 >{title}</h1>
    </>
       
    );
}

export default StudentInfo;