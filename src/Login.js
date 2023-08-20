import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit=async()=>{
    console.log(username,password);
    try{
    const response= await fetch("https://dummyjson.com/auth/login",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username,password})
    })
    const data=await response.json();
    if(response.status==200){
        localStorage.setItem("user",JSON.stringify(data));
        window.location.href="/";
    }else{
        setError(data.error);
    }}catch(err){
        setError("Something went wrong, Please try again");
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <label for="username">UserName:</label>
      <input
        type="text"
        value={username}
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
};

export default Login;
