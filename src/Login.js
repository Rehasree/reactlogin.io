import React from "react";
import './App.css'
const Login=(props)=>{
    const{email, setEmail, password, setPassword, handleLogIn, handleSignUp, hasAccount, setHasAccount, emailError, passwordError}=props;
    return(
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                    <input type="text" outofocus="true" required value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    ></input>
                    <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                    <input type="Password" required value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                {hasAccount ?(
                    <div>
                    <button onClick={handleLogIn}>SignIn</button>
                    <p>Don't have an account ?
                    <span onClick={()=>setHasAccount(!hasAccount)}>SignUp </span></p>
                    </div>
                ):(
                    <div>
                    <button onClick={handleSignUp}>SignUp</button>
                    <p>Have an account ?
                    <span onClick={()=>setHasAccount(!hasAccount)}>SignIn</span></p> 
                    </div>
                )}
               </div>
            </div>
        </section>
    );
}

export default Login