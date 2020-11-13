import React,{useState,useEffect} from "react";
import fire from './fire';
import "./App.css";
import Login from './Login'
import Sidenav from './Hero'
const App=()=> {
  const[user,setUser]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[emailError,setEmailError]=useState('');
  const[passwordError,setPasswordError]=useState('');
  const[hasAccount,setHasAccount]=useState(false);
  const clearInputs=()=>{
      setEmail('');
      setPassword('');
  }
  const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
  }
const handleLogIn=()=>{
  clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user.not-fount":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
};
const handleSignUp=()=>{
  clearErrors();
  fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err=>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
};

const authListener=()=>{
fire.auth().onAuthStateChanged(user=>{
  if(user){
    clearInputs();
    setUser(user);
  }else{
    setUser('');
  }
})
};
useEffect(()=>{
authListener();
},[])
  return (
    <div className="App">
    {user?(<Sidenav/>):(<Login 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogIn={handleLogIn} 
      handleSignUp={handleSignUp} 
      hasAccount={hasAccount} 
      
      setHasAccount={setHasAccount} 
      emailError={emailError} 
      passwordError={passwordError}/>)}
     
    
    </div>
  );
}

export default App;