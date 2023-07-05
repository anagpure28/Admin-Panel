import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/productReducer/action';
import { ProductCard } from './ProductCard';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';

export const ProductList = () => {
  const [searchParams] = useSearchParams()
  const products = useSelector((s) => s.productReducer.products)
  const dispatch = useDispatch();
  const location = useLocation()

//   console.log(searchParams.getAll("gender"));

  let obj = {
    params: {
        gender: searchParams.getAll("gender"),
        category: searchParams.getAll("category"),
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order")
    }
  }

  useEffect(() => {
    console.log("data", obj)
    dispatch(getProducts(obj))
  },[location.search]) //we can also pass searchParams

  return (
    <DIV>
        {products.length > 0 && products.map((el) => {
            return <ProductCard key={el.id} {...el}/>
        })}
    </DIV>
  )
}

const DIV = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
`