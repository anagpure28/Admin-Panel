import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/authReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate()

  const auth = useSelector((store)=> store.authReducer.isAuth)
  const err = useSelector((store)=> store.authReducer.isErrorMessage)

  const handleLogin = () => {
    const userData = {email, password};
    dispatch(login(userData)).then(() => {
      navigate(location.state)
    })
  }  

  return (
    <DIV auth={auth} error={err}>
      <h1>{auth ? "Login Successfull!" : "Login to Continue"}</h1>
      <input
        type="email"
        placeholder="User Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="User Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </DIV>
  );
};

const DIV = styled.div`
    width: 400px;
    margin: 5% auto;
    border: 1px solid gray;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    gap: 20px;
    align-items: center;
    background-color: #f4f4f4;
    padding: 0 0 20px 0;

    h1{
      color: ${({auth}) => (auth ? "green" : "red")}
    }

    input{
        height: 30px;
        font-size: 18px;
        padding: 5px;
        width: 80%;
        /* border: ${({error}) => (error ? "1px solid red" : "1px solid gray")}; */
        border-radius: 5px;
    }

    button{
        width: 50%;
        /* height: 35px; */
        font-size: 20px;
        border-radius: 5px;
        padding: 8px;
        background-color: black;
        color: white;
        cursor: pointer;
    }

    button:hover{
        background-color: #000000;
    }
`