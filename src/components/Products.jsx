import React from 'react'
import { styled } from 'styled-components';
import { read } from '../data';
import Product from './ProductItem';

const Container = styled.div`
display: flex;
padding:20px;
flex-wrap:wrap;
justify-content:space-between;
`

const Products = () => {
  return (
    <Container>
{read.map(item=>(
    <Product  item ={item} key={item.id}/>
))}
      </Container>
    
  )
};

export default Products
