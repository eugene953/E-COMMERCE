import { BottomNavigation } from '@material-ui/core'
import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import {mobile} from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
padding:20px;
${mobile({ padding: " 10px" })}
`
const Title = styled.h1`
font-weight:300;
text-align:cen  ter;
`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`
const TopButton = styled.div`
padding:10px;
font-weight:600;
cursor:pointer;
border: ${props=>props.type === "filled" && "none"};
background-color:${props=>props.type === "filled" ? "black" : "transparent"};
color:${props=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`
${mobile({ display: "none" })}
`
const TopText= styled.span`
text-decoration:underline;
 cursor:pointer;
 margin: 0px 10px ;

`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
flex:3;
`
const Product =styled.div`
display:flex;
justify-content:space-between;
${mobile({ flexDirection: "column" })}

`
const ProductDail = styled.div`
flex:2;
display:flex;

`
const Image = styled.image`
width:300px;
height:200px;
`
const Details =styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around
`
const ProductName =styled.span`

`
const Productid =styled.span`

`
const ProductMODEL =styled.span`
width:20px;
height:20px;
border-radius:50%;
background-color:${(props)=>props.color}
`
const ProductRAM =styled.span`
`
const PriceDetail = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const ProductAmountContainer= styled.div`
display:flex;
align-items:center
margin-bottom:20px;
`
const ProductAmount= styled.div`
font-size:24;
margin:5px;
${mobile({ margin : "5px 15px" })}
`
const ProductPrice= styled.div`
font-size:30px;
font-weight:200;
${mobile({ marginBottom: "20px" })}
`
const Hr =styled.hr`
background-color:#eee
border:none;

`
const Summary= styled.div`
flex:1;
background-color:
border:0.5px solid lightgray;
padding:20px;
height:50vh;
` 
const SummaryTitle = styled.h1`
font-weight:200;

`
const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content: space-between;
font-weight: ${props=>props.type ==="total" && "500"};
font-size: ${props=>props.type ==="total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;


`




const Cart = () => {
  return (
    <Container>
<Navbar/>
<Announcement/>
<Wrapper>
    <Title>YOUR BAG</Title>
    <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts>
        <TopText>Shopping Bag(2)</TopText>
        <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
    </Top> 

    <Bottom>

        <Info>
            <Product>
<ProductDail>
< Image src="https://media.istockphoto.com/id/1396282069/vector/laptop-computer-and-mobile-phone-mockups-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=-OtVtAgBFoTNRnrH4ucrYN78upa4PJmeOdupFmQtUiM="/>
   <Details>
    <ProductName><b>Product :</b>LAPTOP</ProductName>
    <Productid><b>ID :</b>123456789</Productid>
    <ProductMODEL color="black"/>
    <ProductRAM><b>RAM :</b>4</ProductRAM>
   </Details>
</ProductDail>

<PriceDetail>
<ProductAmountContainer>
    <Add/>
    <ProductAmount>2</ProductAmount>
    <Remove/>
</ProductAmountContainer>
<ProductPrice>$ 30</ProductPrice>

</PriceDetail>
</Product>

<Hr/>

<Product>
<ProductDail>
   < Image src="https://media.istockphoto.com/id/1412240771/photo/headphones-on-white-background.jpg?s=612x612&w=0&k=20&c=DwpnlOcMzclX8zJDKOMSqcXdc1E7gyGYgfX5Xr753aQ="/>
   <Details>
    <ProductName><b>Product :</b>HEADSETS</ProductName>
    <Productid><b>ID :</b>123456789</Productid>
    <ProductMODEL color="gray"/>
    <ProductRAM><b>RAM :</b>M</ProductRAM>
   </Details>
</ProductDail>

<PriceDetail>
<ProductAmountContainer>
    <Add/>
    <ProductAmount>2</ProductAmount>
    <Remove/>
</ProductAmountContainer>
<ProductPrice>$ 20</ProductPrice>

</PriceDetail>
</Product>
        </Info>

        <Summary>
            <SummaryTitle>ORDER SUMMARY  </SummaryTitle>
            <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemText>$ 80</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Estimated shipping</SummaryItemText>
                <SummaryItemText>$ 5.90</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemText>$ -5.90</SummaryItemText>
                </SummaryItem>
                <SummaryItem type="total">
                <SummaryItemText >Total</SummaryItemText>
                <SummaryItemText>$ 80</SummaryItemText>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
                </Summary>
    </Bottom>
</Wrapper>




<Footer/>
 </Container>
  )
}

export default Cart
