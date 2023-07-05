import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteProduct, getProducts } from "../redux/productReducer/action";
import { Link, useSearchParams } from "react-router-dom";

export const ProductCard = ({
  id,
  image,
  name,
  brand,
  price,
  category,
  gender,
}) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams()

  let obj = {
    params: {
        gender: searchParams.getAll("gender"),
        category: searchParams.getAll("category"),
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order")
    }
  }
  
  const handleDelete = () => {
    dispatch(deleteProduct(id)).then((res) => {
      dispatch(getProducts(obj))
    })
  }

  return (
    <DIV>
      <div className="ImageContainer">
        <img src={image} alt="" />
      </div>
      <h3>{name}</h3>
      <div className="left">
        <p>
          <span>Brand:</span> {brand}
        </p>
        <p>
          <span>Category:</span> {category}
        </p>
        <p>
          <span>Gender:</span> {gender}
        </p>
        <p>
          <span>Price:</span> {price}
        </p>
      </div>
      <div className="flex">
        <button><Link to={`/edit/${id}`}><span className="editspan">Edit</span></Link></button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  border: 1px solid gray;
  padding: 10px;
  height: 430px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  .left {
    text-align: left;
    padding-left: 5%;
    line-height: 15px;
  }
  .ImageContainer{
    width: 100%;
    height: 50%;
    /* border: 1px solid gray; */
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
  }
  img {
    width: 50%;
    height: 96%;
    margin-top: 4px;
  }
  img:hover{
    width: 60%;
  }
  .flex{
    display: flex;
    justify-content: space-around;
  }
  span {
    font-weight: bold;
    text-decoration: underline;
  }
  button {
    width: 40%;
    padding: 5px;
    font-size: 16px;
    background-color: #000000;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
  .editspan{
    color:  white;
    font-weight: 500;
    text-decoration: none;
  }
`;
