import React, { useState } from 'react';
import styled from "styled-components";
import { useDispatch } from "react-redux"
import { addProduct } from '../redux/productReducer/action';

const initialState = {
    name: "",
    image: "",
    brand: "",
    price: "",
    category: "",
    gender: ""
}

export const Admin = () => {
    const [product, setProduct] = useState(initialState)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct((prev)=> {
            return {...prev, [name]: name==="price" ? +value : value}
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        dispatch(addProduct(product))
        setProduct(initialState)
    }

  return (
    <DIV>
        <form onSubmit={handleSubmit}>
            <h1>Add Product</h1>
            <input type="text" name="image" value={product.image} placeholder='Product Image'  onChange={(e) => handleChange(e)}/>
            
            <input type="text" name="name" value={product.name} placeholder='Product Name'  onChange={(e) => handleChange(e)}/>          
            
            <input type="text" name="brand" value={product.brand} placeholder='Product Brand'  onChange={(e) => handleChange(e)}/>
      
            <input type="text" name="price" value={product.price} placeholder='Product Price'  onChange={(e) => handleChange(e)}/>
            
            <div className='flex'>
            <select name="category" value={product.category} className='category-select' onChange={(e) => handleChange(e)}>
                <option value="">Select Category</option>
                <option value="top-wear">Top-Wear</option>
                <option value="bottom-wear">Bottom-Wear</option>
                <option value="shoes">Shoes</option>
            </select>
            
            <select name="gender" value={product.gender} className='gender-select' onChange={(e) => handleChange(e)}>
                <option value="">Select Gender</option>
                <option value="male">Men</option>
                <option value="female">Women</option>
                <option value="kids">Kids</option>
            </select>
            </div>
            <button type='submit'>Add Product</button>
        </form>
    </DIV>
  )
}

const DIV = styled.div`
    width: 400px;
    margin: auto;
    margin-top: 5%;
    border: 1px solid gray;
    font-size: 18px;
    border-radius: 10px;
    background-color: #f4f4f4;
    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
    .flex{
        width: 82%;
        height: 30px;
        display: flex;
        justify-content: space-between;
    }
    .category-select{
        width: 48%;
        height: 30px;
        border: 1px solid gray;
    }
    .gender-select{
        width: 48%;
        height: 30px;
        border: 1px solid gray;
    }
    input{
        height: 30px;
        font-size: 18px;
        padding: 5px;
        width: 80%;
        border-radius: 5px;
    }
    select{
        height: 30px;
        font-size: 18px;
        width: 80%;
    }
    button{
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
    button:hover{
        background-color: #000000;
    }
`
