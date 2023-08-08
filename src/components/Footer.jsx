import { Instagram, Pinterest, Facebook, Twitter, LocationOn, Call, MailOutline} from '@material-ui/icons'
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
display:flex;
`;

const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px 0px;
color:white;
background-color:black;
`

const Logo = styled.h1`

`;
const Desc = styled.p`
margin:20px;

`;
const  SocialContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 60px);
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:15%;
color:white;
background-color: #${props=>props.color};
display: flex;
align-items:center;
justify-content:center;
margin-left:20px;
margin:5px;

`


const Center= styled.div`
flex:1;
padding:20px;
color:white;
background-color:black;

`
const Title = styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;


`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`

const Right = styled.div`
flex:1;
padding: 20px;
color:white;
background-color:black;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display:flex;
align-items:center;

`

const Payment = styled.img`
width:30%;


`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MGB</Logo>
            <Desc>Experience the power and convenience of our laptops, headset and phones!
                 Our selection includes the latest models and features,
                  with options for every budget.
                  </Desc>
                  <SocialContainer>
                  <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
         </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links </Title>
                <List> 
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Laptop Models</ListItem>
                    <ListItem>Headset Models</ListItem>
                    <ListItem>Phone Models</ListItem>
                    <ListItem>Accesories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>

                </List>
           

        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>< LocationOn style={{marginRight:"10px"}}/> Molyko Ndongo ,  South West Region</ContactItem>
            <ContactItem><Call style={{marginRight:"10px"}}/>+237 678697513</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>nfouaeugene953@gmail.com</ContactItem>
            <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4nOBkawWs64olSHKpRiw8CInkXbs1G4Xhw&usqp=CAU"/>
        </Right>
      
    </Container>
  )
}

export default Footer
