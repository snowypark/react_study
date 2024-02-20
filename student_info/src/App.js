import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import StudentInfo from './components/StudentInfo';
import InfoInput from './components/InfoInput';

function App() {

  const studentObj = {
    name: "",
    age: "",
    address: ""

  }

  const [student, setStudent ] = useState(studentObj);

  const [inputValues, setInputValues] = useState(studentObj);
  const [refresh, setRefresh] = useState(false);

  //처음 한번 실행됨
  useEffect(() => {
    if(refresh) {
      setInputValues(studentObj);

    }
    setRefresh(true);
  }, [student]);

    let email = "email";
    let phone = "01234567";

    let user = {
      "username": "test",
      ["password"]: "1234",
      email: "test",
      phone
    }

  const handleInputChange = (e) => {
      const {name, value } = e.target;
      
      setInputValues({
      ...inputValues,
      [name]: value
      });
  }

    /** 
     * js객체 특징
     * 1. 키값은 문자열이어도 된다.
     * 2. 변수의 문자열 값을 키값으로 쓰고 싶을 때 []대괄호로
     *    묶어서 참조할 수 있다.
     * 3. 변수명만 입력하면 객체의 속성과 value로 한번에 정의할 수 있다.
    */

   const handleOnOK = () => {
    setStudent(inputValues);
  }

  const handleOnClean = () => {
    setStudent(studentObj);
    
  }
  
  return (
    <>

      <h1>이름: {student.name} </h1>
      <h1>나이: {student.age}</h1>
      <h1>주소: {student.address} </h1>

      <input type="text" 
        name='name' onChange={handleInputChange} 
        value={inputValues.name} 
        placeholder='이름' />

      <input type="text" 
        name='age' onChange={handleInputChange} 
        value={inputValues.age} 
        placeholder ='나이' />

      <input type="text" 
        name='address' onChange={handleInputChange} 
        value={inputValues.address} 
        placeholder='주소'/>

      <button onClick={handleOnOK}>확인</button>
      <button onClick={handleOnClean}>비우기</button>

    </>
  );
  
}  
  export default App;
  