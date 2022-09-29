import styled from 'styled-components';
import ItemCard from '../components/ItemCard';
import { useState } from 'react';
import axios from 'axios';
import { Input } from 'antd';
import { CircleSpinner } from 'loplat-ui';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function ProductPage() {
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState()

  //버튼 온클릭
  //categoly = ["디지털기기", "가구/인테리어", "유아용품", "스포츠/레저", "의류", "도서/티켓/문구", "악기", "반려동물", "미용", "콘솔게임"]
  const digitalDevices = () => { startPy("디지털기기") }
  const interior = () => { startPy("가구/인테리어") }
  const baby = () => { startPy("유아용품") }
  const sports = () => { startPy("스포츠/레저") }
  const clothing = () => { startPy("의류") }
  const book = () => { startPy("도서/티켓/문구") }
  const instrument = () => { startPy("악기") }
  const pet = () => { startPy("반려동물") }
  const beauty = () => { startPy("미용") }
  const consoleGame = () => { startPy("콘솔게임") }

  //검색
  const onSearch = value => { startPy(value) }
  const startPy = async (keyword) => {
    setLoading(true)
    try {
      await axios('http://54.153.1.214:5000/search', {
        method: "get",
        params: {
          value: keyword
        }
      })
        .then(res => setItems(res.data))
        .catch(function(error){
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  console.log(items)

  return (
    <Container>
      <Categori>
        <CategoriItem>
          <h3>추천 검색 카테고리</h3>
        </CategoriItem>
        <CategoriItem>
          <Button onClick={digitalDevices} type="ghost" icon={<SearchOutlined />}>디지털기기</Button>
          <Button onClick={interior} type="ghost" icon={<SearchOutlined />}>가구/인테리어</Button>
          <Button onClick={baby} type="ghost" icon={<SearchOutlined />}>유아용품</Button>
          <Button onClick={sports} type="ghost" icon={<SearchOutlined />}>스포츠/레저</Button>
          <Button onClick={clothing} type="ghost" icon={<SearchOutlined />}>의류</Button>
        </CategoriItem>
        <CategoriItem>
          <Button onClick={book} type="ghost" icon={<SearchOutlined />}>도서/티켓/문구</Button>
          <Button onClick={instrument} type="ghost" icon={<SearchOutlined />}>악기</Button>
          <Button onClick={pet} type="ghost" icon={<SearchOutlined />}>반려동물</Button>
          <Button onClick={beauty} type="ghost" icon={<SearchOutlined />}>미용</Button>
          <Button onClick={consoleGame} type="ghost" icon={<SearchOutlined />}>콘솔게임</Button>
        </CategoriItem>
      </Categori>

      <TextBox>
        <Search placeholder="지역 상품명으로 검색하세요! " onSearch={onSearch} style={{ width: 600, height: 60 }} />
      </TextBox>
      
      <div>
        {loading &&
          <CenterDiv>
            <CircleSpinner
              aria-describedby="example"
              aria-labelledby="example"
              duration={1300}
              scale={1}
              zIndex={0}
            />
            <h3>검색 중입니다. 잠시만 기다려주세요.</h3>
          </CenterDiv>}
      </div>

      {items &&
        <CardContainer>
          {
            items.map((a, i, key = { i }) => {
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
  border: 2px solid;
  border-color: rgba(95, 93, 93, 0.438);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 6px;

  margin-top:20px;
  margin-bottom:-10px;
  gap: 0px;

  width:1160px;
  height:160px;
  background-color: white ;
  border-radius: 10px;
`

const CategoriItem = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  gap : 40px;
  margin-top: 5px;
`

const CenterDiv = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`