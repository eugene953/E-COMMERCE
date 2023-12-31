import React from 'react'
import { styled } from 'styled-components';

const Container = styled.div`
flex:1;
margin:3px;
height:40vh;
position:relative;

`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;

`
const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
flex-direction: column;
align-items:center;
justify-content center;
`
const Title = styled.h1`
color:teal;
margin-bottom:px;
margin-top:100px;
align-items:center;

`
const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color::gray;
cursor: pointer;
font-weight:600;
align-items:center;
`

const CategoryItem = ({item}) => {
  return (
    <div>
      <Container>
         <Image src={item.img}/>
         <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
         </Info>
      </Container>
    </div>
  )
}

export default CategoryItem
