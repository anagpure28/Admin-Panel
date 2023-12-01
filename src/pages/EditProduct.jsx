import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { editProduct } from "../redux/productReducer/action";

export const EditProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [success, setSuccess] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((store) => store.productReducer.products);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prev) => {
      return {...prev, [name]: name=="price" ? +value : value};
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(id,data)).then(() => {
      setSuccess(true)
    })
    setTimeout(() => {
      navigate("/")
    }, 2500);
  }

  useEffect(() => {
    const data = product.find((el) => el.id === +id);
    console.log(data);
    setData(data)
    console.log(id);
  },[])

  return (
    <DIV>
      <form success={success} onSubmit={handleSubmit}>
        <div className="div">
          <p>Edit Product: {id}</p>
          <p className="success">{success ? "Product Edited Successfully!!" : ""}</p>
        </div>
        <input
          type="text"
          name={"image"}
          value={data.image}
          placeholder="Product Image"
          onChange={handleChange}
        />

        <input
          type="text"
          name={"name"}
          value={data.name}
          placeholder="Product Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name={"brand"}
          value={data.brand}
          placeholder="Product Brand"
          onChange={handleChange}
        />

        <input
          type="text"
          name={"price"}
          value={data.price}
          placeholder="Product Price"
          onChange={handleChange}
        />

        <div className="flex">
          <select
            name={"category"}
            value={data.category}
            className="category-select"
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="top-wear">Top-Wear</option>
            <option value="bottom-wear">Bottom-Wear</option>
            <option value="shoes">Shoes</option>
          </select>

          <select
            name={"gender"}
            value={data.gender}
            className="gender-select"
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Men</option>
            <option value="female">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <button type="submit">Edit Product</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: auto;
  margin-top: 5%;
  border: 1px solid gray;
  font-size: 18px;
  border-radius: 10px;
  background-color: #f4f4f4;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .success{
    color: ${({success}) => (success ? "" : "green")}
  }
  .div{
    width: 80%;
    line-height: 12px;
    /* border: 1px solid gray; */
  }
  .div>p:nth-child(1){
    font-size: 25px;
    font-weight: 700;
  }
  .flex {
    width: 82%;
    height: 30px;
    display: flex;
    justify-content: space-between;
  }
  .category-select {
    width: 48%;
    height: 30px;
    border: 1px solid gray;
  }
  .gender-select {
    width: 48%;
    height: 30px;
    border: 1px solid gray;
  }
  input {
    height: 30px;
    font-size: 18px;
    padding: 5px;
    width: 80%;
    border-radius: 5px;
  }
  select {
    height: 30px;
    font-size: 18px;
    width: 80%;
  }
  button {
    width: 50%;
    /* height: 35px; */
    font-size: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 8px;
    background-color: #3a3a3a;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background-color: #000000;
  }
`;
