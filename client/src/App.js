import React, {useState} from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState();
  const handleChangeValues = value =>{
    setValues((prevValue)=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
  
  const handleClickButton = value=>{
    console.log(values);
    
  }

  return (
    <div className='app--container'>
      <div className='login--container'>
        <h1 className='title'>NG-CASH</h1>
        
        <input
        type="text" 
        name="user"
        placeholder="Nome de usuário"
        className="login--input"
        onChange={handleChangeValues}
        />
        
        <input 
        type="password" 
        name="password"
        placeholder="Senha"
        className="login--input"
        onChange={handleChangeValues}
        />

        <button 
        className='btn'
        onClick={handleClickButton}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
