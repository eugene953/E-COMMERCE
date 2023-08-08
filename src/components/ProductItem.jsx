import React from 'react'
import { styled } from 'styled-components';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';

const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
transition: all 0.5s ease;
cursor:pointer;

`
const Container = styled.div`
flex:1;
margin:3px;

margin:3px;
height:40vh;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position: relative;

&:hover ${Info}{
    opacity:1;
    }
    }

`

const Image = styled.img`
object-fit:cover;
width:100%;
height:100%;
Z-idex:2;
display:grid ;
grid-template-columns: repeat(4, 60px);
align-items: center;
gap:1.5rem;
margin-top: 1rem;

`

const Icon = styled.div`
width: 30px;
height:30px;
border-raduis:50%;
background-color:white;y
display:grid;
align-items:center;
justify-content:center;
margin:10px;
margin-top:50px;
transition:all 0.5s ease;

&:hover {
  background-color:#e9f5f5;
  transform:scale(1.1);

}
`



const Product = ({item}) => {
  return (
    <div>
      
      <Container>
     
         <Image src={item.img}/>
         <Info>
         <Icon>
     <ShoppingCartOutlined/>
        </Icon>
        <Icon>
     <SearchOutlined/>
        </Icon>
        <Icon>
     <FavoriteBorderOutlined/>
        </Icon>
         </Info>
         
      </Container>



    </div>
  )
}

export default Product