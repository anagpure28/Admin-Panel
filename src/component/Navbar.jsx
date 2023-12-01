import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../redux/productReducer/action";

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  let ref = useRef();

  const paramObj = {
    params: {
      q: query && query,
    },
  };

  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      // console.log("ggggg",paramObj)
      dispatch(getProducts(paramObj));
    }, 1000);
  }, [query]);

  return (
    <DIV>
      <div className="cont1">
        <h1>Product List</h1>
      </div>
      <div className="cont2">
        <input
          type="text"
          autoComplete="on"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="cont3">
        <Link style={{textDecoration: "none", fontWeight: "500"}} to={"/"}>Home</Link>
        <Link style={{textDecoration: "none", fontWeight: "500"}} to={"/add-product"}>Admin</Link>
        <Link style={{textDecoration: "none", fontWeight: "500"}} to={"/login"}>Login</Link>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  align-items: center;
  /* gap: 25px; */
  margin: 5px 0;
  border-bottom: 1px solid gray;
  .cont1{
    width: 30%;
    /* border: 1px solid red; */
  }
  .cont2{
    width: 40%;
    padding: 10px 0;
    /* border: 1px solid red; */
  }
  input{
    width: 50%;
    padding: 6px;
  }
  .cont3{
    width: 30%;
    font-size: 20px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
  }
`;
