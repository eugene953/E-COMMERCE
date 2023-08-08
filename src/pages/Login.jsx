import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
width:100vw;
height:60vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),
    url("https://media.gettyimages.com/id/1201285331/photo/top-view-of-workspace-for-business-office.jpg?s=612x612&w=0&k=20&c=chFTmIdC8EdjYTqMMMYKs61Evew0nflS-cJ46mkLtJQ=");
    background-size:cover;
    display:flex;
justify-content:center;
alight-items-center;
    `
const Wrapper= styled.div`
padding:20px;
width:50%;
background-color:white;
`
const Title= styled.h1`
font-size:24px;
font-weight:300;

`
const Form = styled.div`
display:flex;
flex-direction:column;


`

const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 0px ;
padding:10px
`

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
margin-left:170px;

`
const Link = styled.div`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
justify-content:space-between;
`

const Login = () => {
  return (
    <Container>
      
      <Wrapper>
    <Title>SIGN IN</Title>
    <Form>
        <Input placeholder="user name"/>
        <Input placeholder="password"/>
        
        <Button>Login</Button>
        <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>
        <Link>CREATE A NEW CCOUNT</Link>
    </Form>

</Wrapper>


    </Container>
  )
}

export default Login
