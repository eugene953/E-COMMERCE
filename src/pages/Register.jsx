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
width:40%;
background-color:white;
`
const Title= styled.h1`
font-size:24px;
font-weight:300;

`
const Form = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
alight-items-center;

`

const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px
`
const Agreement = styled.span`
font-size:12px;
margin:20px 0px;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;


`
const Register = () => {
  return (
    <Container>
<Wrapper>
    <Title>CREATE AN ACCOUNT</Title>
    <Form>
        <Input placeholder="name"/>
        <Input placeholder="last name"/>
        <Input placeholder="username"/>
        <Input placeholder="email"/>
        <Input placeholder="password"/>
        <Input placeholder="confirm password"/>
        <Agreement>By cretaing an account, I consent to the processing of my personal data
            in accordance with the <b>PRIVACY POLICY </b>
        </Agreement>
        <Button>CREATE</Button>
    </Form>
</Wrapper>





    </Container>
  )
}

export default Register
