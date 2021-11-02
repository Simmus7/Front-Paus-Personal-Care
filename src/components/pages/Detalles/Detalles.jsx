import { Add, Remove } from "@material-ui/icons";
import axios from "axios";
import styled from "styled-components";
import React, {useEffect} from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import SmartGallery from "react-smart-gallery";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 40px;
`;

const Desc = styled.h2`
  margin: 20px 0px;
  font-weight: 100;
`;

const Price = styled.h2`
  font-weight: 100;
  font-size: 40px;
`;


const Button = styled.button`
  font-weight: 100;
  font-size: 20px;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  &:hover{
      background-color: #f8f4f4;
  }
`;





const Detalles = ( {product} ) => {

    const [imagen, setImagen] =  useState(product.productImage[0]);

    function imagenSeleccionada(src){
      if(src != null){
        return src;
      }else{
        this.setState(state => ({ open: !state.open }));
        return product.productImage[0];
      }
    }

    const urls= product.productImage;

    const scrollToElement = (elementId = 'product-image') => {
      const element = document.getElementById(elementId)

      if(element){
        element.scrollIntoView()
      }
    }

    useEffect(() => {
      window.scrollTo(0,0)
     // scrollToElement('product-container')
    },[])

    return (
        <Container id='product-container'>
            <Wrapper>
                <ImgContainer>
                  <Image id='product-image' src={imagen} alt={product.productname} />
                </ImgContainer>
                <InfoContainer>
                    <Title id='product-title'>{product.productname}</Title>
                    <Desc> {product.description}</Desc>
                    <Price>${product.price}</Price>
                    <br/>
                    <Link to={{ pathname: "https://web.whatsapp.com/send?phone=573148239617&text=Hola, estoy interesado en: "+window.location.href }} target='_blank'>
                    <Button>Comprar por Whatsapp&nbsp;&nbsp;&nbsp;
                      <i class="fab fa-whatsapp fa-sm fa-2x"></i>
                    </Button>
                    </Link>
                    <br/>
                    <br/>
                    <br/>
                    <SmartGallery
                      rootStyle={{boxShadow: '2px 2px 4px #000'}}
                      images={urls}
                      onImageSelect={(event, src) => setImagen(src)}
                    />  
                </InfoContainer>
                
            </Wrapper>
        </Container>
        
    );
};

export default Detalles;
