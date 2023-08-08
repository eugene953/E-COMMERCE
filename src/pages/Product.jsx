import React from 'react'
import { styled } from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div`
`
const Wrapper  = styled.div`
padding:50px;
display:flex;
`
const ImgContainer= styled.div`
flex:1;
`
const  Image = styled.img`
width:100%;
object-fit:cover;

`
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
`
const Title = styled.h1`
font-weight:200;
`
const Desc = styled.p`
margin:20px 0px;
`
const Price = styled.div`
font-weight:100;
font-size:40px;

`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
margin:30px 0px;
width: 50;

`
const Filter = styled.div`
display:flex;
align-item:center;
`
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`
const FilterMODEL = styled.select`
width:20px;
height:20px;
border-radius:50%;
margin:0px 5px;
cursor:pointer;

`
const FilterMODELOption = styled.option`

`
const FilterRAM = styled.select`
margin:10px;
padding:5px;

`
const FilterRAMOption = styled.option`

`
const AddContainer = styled.div`
display:flex;
width:50%;
align-items:center;
justify-content:space-between;

`
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
justify-content:center;
`
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
dislay:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`
const Button = styled.button`
padding:15px;
border:1px solid;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color:blue;
}
`

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
<ImgContainer>
<Image src="https://media.istockphoto.com/id/473587720/photo/modern-laptop.jpg?s=612x612&w=0&k=20&c=epgd1Bn4RQkLE9dKTwD20gfVHqY2408oCnyavO9er08="  />
</ImgContainer>

<InfoContainer>
    <Title>LAPTOPS</Title>
    <Desc>Laptops available with different operating systems and deliver powerful performance with the latest processors and high-speed RAM.


</Desc>
    <Price>$ 20</Price>
<FilterContainer>

    <Filter>
        <FilterTitle>MODEL</FilterTitle>
        <FilterMODEL>
        <FilterMODELOption >DELL</FilterMODELOption >
        <FilterMODELOption >LENOVO</FilterMODELOption >
        <FilterMODELOption >THINKPAD</FilterMODELOption >

        </FilterMODEL>

    </Filter>

    <Filter>
        <FilterTitle>RAM</FilterTitle>
        <FilterRAM>
        <FilterRAMOption >4G</FilterRAMOption>
       <FilterRAMOption >8G</FilterRAMOption>
       <FilterRAMOption >32G</FilterRAMOption>

        </FilterRAM>
       
    </Filter>
</FilterContainer>
<AddContainer>
    <AmountContainer>
        <Remove/>
        <Amount>1</Amount>
        <Add/>
    </AmountContainer>
    <Button>ADD TO CART</Button>
    </AddContainer>

</InfoContainer>

      </Wrapper>
      <Newsletter/>
      <Footer/>

    </Container>
  )
}

export default Product