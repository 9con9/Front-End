import styled from 'styled-components';
import ItemCard from '../components/ItemCard';
import { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';

//antd - serch
import { Input } from 'antd';
const { Search } = Input;

const startPy = (keyword) => {
  axios('http://localhost:5000/search', {
    method: "get",
    params: {
      value: keyword
    },
  })
  .then((response) => {
    console.log(response.data['status']);
  })
  .catch((error) => {
    console.log(error);
  });
}

const onSearch = value => {startPy(value)}
//

function ProductPage() {
  const [items, setItems] = useState()

  useEffect(() => {
    axios.get('http://localhost:3001/product/result')
      .then(res => setItems(res.data))
      .catch(function (error) {
        console.log(error);
      })
 })

  return (
    <Container>
      <Categori>
        <CategoriItem>
          <h3>카테고리</h3>
        </CategoriItem>
        <CategoriItem>
          <CategoriSpan>전자기기</CategoriSpan>
          <CategoriSpan>의류</CategoriSpan>
          <CategoriSpan>악세서리</CategoriSpan>
          <CategoriSpan>도서</CategoriSpan>
        </CategoriItem>
        <CategoriItem>
          <CategoriSpan>미용</CategoriSpan>
          <CategoriSpan>식품</CategoriSpan>
          <CategoriSpan>가구</CategoriSpan>
          <CategoriSpan>기타</CategoriSpan>
        </CategoriItem>
      </Categori>

      <TextBox>
        <Search placeholder="사고싶은 상품을 입력하세요! " onSearch={onSearch} style={{ width: 600, height:60 }} />
      </TextBox>

        {items && <CardContainer>
          {
            items.map((a, i, key={i}) => {
              return <ItemCard items={items[i]} />
            })
          }
        </CardContainer>}

    </Container>
  );
}

export default ProductPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`

const CardContainer = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  width:1520px;
  
  gap: 5px;
  row-gap: 30px;
  
  margin-top:30px;
  padding: 0 10%;
  margin-bottom:30px;
`

const TextBox = styled.div`
  display:flex;
  align-items:center;
  margin-top:30px;
  margin-bottom:-30px;
`

const Categori = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top:20px;
  margin-bottom:-10px;
  gap: 0px;

  width:1160px;
  height:160px;
  background-color:beige;
  border-radius: 10px;
`

const CategoriItem = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  gap : 40px;
  margin-top: 5px;
`

const CategoriSpan = styled.span`
    font-size: 20px;
    box-shadow: inset 0 -1.5px 0 #b2bec3; 
    line-height: 30px;
`