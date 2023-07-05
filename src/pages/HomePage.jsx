import React from 'react'
import { ProductList } from '../component/ProductList'
import { Sidebar } from '../component/Sidebar'
import styled from 'styled-components'

export const HomePage = () => {
  return (
    <DIV>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='productlist'>
        <ProductList />
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  display: flex;
  justify-content: space-around;
  .sidebar{
    width: 15%;
  }
  .productlist{
    width: 80%;
  }
`