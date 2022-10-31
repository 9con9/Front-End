/*
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
*/

import styled from 'styled-components';
import ItemCard from '../components/ItemCard.js';
import AntDesign from '../components/AntDesign.css'
import { useState } from 'react';
import axios from 'axios';
import { Input } from 'antd';
import { CircleSpinner } from 'loplat-ui';
import { SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {Modal} from 'antd';
import { Select } from 'antd';


const { Option } = Select;

function ProductPage() {
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [copyItems, setCopyItems] = useState([]);

  const Dummy_Data = [
    {
      id: 0,
      img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
      index: "3",
      link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
      name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
      outlier: "normal",
      place: "인천광역시 남구 용현1,4동",
      platform: "번개 장터",
      price: "550000",
      time: "28분 전"
    },
    {
      id: 1,
      img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
      index: "3",
      link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
      name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
      outlier: "high",
      place: "인천광역시 남구 용현1,4동",
      platform: "번개 장터",
      price: "550000",
      time: "28분 전"
    },
    {
      id: 2,
      img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
      index: "3",
      link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
      name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
      outlier: "low",
      place: "인천광역시 남구 용현1,4동",
      platform: "번개 장터",
      price: "550000",
      time: "28분 전"
    },
    {
      id: 3,
      img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
      index: "3",
      link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
      name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
      outlier: "normal",
      place: "",
      platform: "번개 장터",
      price: "550000",
      time: "28분 전"
    },
    {
      id: 4,
      img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
      index: "3",
      link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
      name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
      outlier: "normal",
      place: "인천광역시 남구 용현1,4동",
      platform: "번개 장터",
      price: "550000",
      time: "28분 전"
    },
    {
      id: 5,
      img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
      index: "3",
      link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
      name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
      outlier: "normal",
      place: "인천광역시 남구 용현1,4동",
      platform: "번개 장터",
      price: "550000",
      time: "28분 전"
    },
    {
      id: 6,
      img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
      index: "3",
      link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
      name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
      outlier: "normal",
      place: "인천광역시 남구 용현1,4동",
      platform: "번개 장터",
      price: "550000",
      time: "28분 전"
    },
    {
      id: 7,
      img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
      index: "3",
      link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
      name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
      outlier: "normal",
      place: "인천광역시 남구 용현1,4동",
      platform: "번개 장터",
      price: "550000",
      time: "28분 전"
    },
    {
      id: 8,
      img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
      index: "3",
      link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
      name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
      outlier: "normal",
      place: "인천광역시 남구 용현1,4동",
      platform: "번개 장터",
      price: "550000",
      time: "28분 전"
    },
    {
      id: 9,
      img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
      index: "3",
      link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
      name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
      outlier: "normal",
      place: "인천광역시 남구 용현1,4동",
      platform: "번개 장터",
      price: "550000",
      time: "28분 전"
    },
  ];

  const [expenseData, setExpenseData] = useState(Dummy_Data);
  const addExpenseHandler = expense => {
    setExpenseData(prevExpense => {
      return ([expense, ...prevExpense])
    })
  }

  //버튼 온클릭
  //categoly = ["디지털기기", "가구", "유아용품", "스포츠/레저", "의류", "도서/티켓/문구", "악기", "반려동물", "미용", "콘솔게임"]
  const digitalDevices = () => { startPy("디지털기기") }
  const furniture = () => { startPy("가구") }
  const interior = () => { startPy("인테리어") }
  const baby = () => { startPy("유아용품") }
  const sports = () => { startPy("스포츠/레저") }
  const clothing = () => { startPy("의류") }
  const book = () => { startPy("도서") }
  const outdoor = () => { startPy("아웃도어") }
  const supplies = () => { startPy("용품/공구") }
  const beauty = () => { startPy("미용") }
  const switches = () => { startPy("스위치") } 
  const performance = () => { startPy("공연") }

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
        .then(res => {
          setItems(res.data);
          setCopyItems(res.data);
        })
        .catch(function(error){
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  console.log(copyItems);

  //Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //필터
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    filterItems(value);
  };

  const filterItems = (i) => {
    if (items) {
      if (i === "전체") {
        setCopyItems(items);
      }
      else if (i === "당근") {
        setCopyItems(items.filter((i) =>
          i.platform.includes("당근")
        ))
      }
      else if (i === "번개") {
        setCopyItems(items.filter((i) =>
          i.platform.includes("번개")
        ))
      }
      else if (i === "중고") {
        setCopyItems(items.filter((i) =>
          i.platform.includes("중고")
        ))
      }
    }
  }

  return (
    <Container>
      <Categori>
        {/* <Modal title="정보 및 주의사항" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
          <p style={{ marginTop: '1%' }}> 지역 상품명으로 찾으시는 중고 상품을 검색해보세요! </p>
          <br/>
          <p>당근 마켓, 번개장터, 중고나라 3개의 플랫폼이 모두 동시에 검색됩니다.</p>
          <br/>
          <p>가격이 평균보다 너무 높거나 낮다면 주의하세요.</p>
          <br/>
          <p>검색까지 <sapn style={{color:'red'}}>약 40초의 </sapn>시간이 소요되며 페이지를 이동해서는 안 됩니다.</p>
        </Modal > */}

        {/* <CategoriItem>
          <h3>
            <QuestionCircleOutlined style={{ fontSize: '20px', color: '#08c', marginRight:'5px'}} onClick={showModal} />
            추천 검색 카테고리
          </h3>
        </CategoriItem> */}
        <CategoriDivider>
            <MarketInfo>
                <MarketIntroduce>지역 상품명으로<br/>제품을 검색하세요!</MarketIntroduce> 
            </MarketInfo>

            <CategoriItem>
              {/* <InputWrapper placeholder="지역 상품명으로 검색하세요!" allowClear onSearch={onSearch} style={{width:"100%"}}/> */}
              <Search placeholder="지역 상품명으로 검색하세요!" allowClear onSearch={onSearch} style={{width:"100%"}}/>
              <CategoriButton>
                <Button onClick={sports} type="ghost">#스포츠/레저</Button>
                <Button onClick={switches} type="ghost">#스위치</Button>
                <Button onClick={clothing} type="ghost">#의류</Button>
                <Button onClick={beauty} type="ghost">#미용</Button>
                <Button onClick={digitalDevices} type="ghost">#디지털기기</Button>
                <Button onClick={furniture} type="ghost">#가구</Button>
              {/* borderWidth는 지우세요. */}
              {/* <CategoriItem style={{borderWidth:"0px"}}> */}
                <Button onClick={baby} type="ghost">#유아용품</Button>
                <Button onClick={performance} type="ghost">#공연</Button>
                <Button onClick={book} type="ghost">#도서</Button>
                <Button onClick={outdoor} type="ghost">#아웃도어</Button>
                <Button onClick={interior} type="ghost">#인테리어</Button>
                <Button onClick={supplies} type="ghost">#용품/공구</Button>
              </CategoriButton>
              {/* </CategoriItem> */}
              {/* borderWidth는 지우세요. */}
              <CategoriItem style={{border:"3px solid black", padding:"0%"}}>
                <Select
                  defaultValue="전체"
                  // style={{
                  //   width: 219,
                  // }}
                  onChange={handleChange}
                  // className={styles.customSelect}
                  
                >
                  <Option value="전체">전체</Option>
                  <Option value="당근">당근마켓</Option>
                  <Option value="번개">번개장터</Option>
                  <Option value="중고">중고나라</Option>
                </Select>
                
                {/* 여기는 데이터 가져올때 손좀 봐야 합니다. */}
                <Select
                  defaultValue="가격순"
                  // style={{
                  //   width: 285,
                  // }}
                  onChange={handleChange}
                >
                  <Option value="가격순">가격순</Option>
                  <Option value="A">A</Option>
                  <Option value="B">B</Option>
                  <Option value="C">C</Option>
                </Select>
                
              </CategoriItem>
            </CategoriItem>
        </CategoriDivider>
      </Categori>
      
      {/* <TextBox>
        <Search placeholder="지역 상품명으로 검색하세요! " onSearch={onSearch} style={{ width: 600, height: 60, marginTop:"25px" }} />
        <Select
          defaultValue="전체 보기"
          style={{
            width: 120,
            height:35,
            marginLeft:15,
          }}
          onChange={handleChange}
        >
          <Option value="전체">전체 보기</Option>
          <Option value="당근">당근마켓</Option>
          <Option value="번개">번개장터</Option>
          <Option value="중고">중고나라</Option>
        </Select>
      </TextBox> */}

      {/* <div>
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
      </div> */}

      {items &&
        <CardContainer>
          {
            expenseData.map((a, i, key = { i }) => {
              return <ItemCard items={expenseData[i]} />
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
  width: 100%;
  max-width: 1920px;
  padding-top: 100px;
  background-color: #FFFFFF;
`

const CardContainer = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1389px;
  row-gap: 30px;
  background-color: #FFFFFF;
  /* margin-bottom: 30px; */
  /* border: 2px solid orange; */

  @media screen and (max-width: 1340px) {
    justify-content: space-around;
  }
`

// const TextBox = styled.div`
//   display:flex;
//   align-items:center;
//   margin-top:30px;
//   margin-bottom:-30px;
// `

const Categori = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 497px;
  background-color: #F5F5F5;
  /* border: 2px solid black; */
  border-radius: 10px;
  margin-bottom: 65px;

  @media screen and (min-width: 850px) and (max-width: 1360px) {
    height: 447.3px;
    margin-bottom: 58.5px;
  }
  @media screen and (max-width: 850px) {
    height: 402.57px;
    margin-bottom: 45px;
  }

  @media screen and (max-width: 575px) {
    height: 362.313px;
    margin-bottom: 34.6px;
  }
`

const CategoriDivider = styled.div`
  display: flex;
  flex-direction: row;
  width: 1389px;
  max-width: 1389px;
  height: 100%;
  align-items: center;
  /* border: 2px solid blue; */
  
  @media screen and (min-width: 850px) and (max-width: 1360px) {
    padding: 0 3%;
  }

`
const MarketInfo = styled.div`
   @media screen and (min-width: 1360px) {
      width: 26.29682997118156%;
      margin-bottom: 220px;
   }
   @media screen and (min-width: 850px) and (max-width: 1360px) {
      width: 23%;
      padding-left: 1%;
      margin-bottom: 180px;
   }
   @media screen and (max-width: 850px) {
      display: none;
   }
`
const MarketIntroduce = styled.span`
  color: #191919;
  @media screen and (min-width: 1360px) {
    /* font-size: 24px; */
    font: normal normal 24px Pretendard;
  }
  @media screen and (min-width: 850px) and (max-width: 1360px) {
    /* font-size: 18px;
    font-weight: 550; */
    font: normal normal 18px Pretendard;
  }
`
const CategoriItem = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  width: 73.70317002881844%;
  border: 2px solid green;

  @media screen and (max-width: 850px) {
    width: 100%;
    padding: 0 3%;
  }

  @media screen and (max-width: 585px) {
    width: 100%;
    padding: 0 5%;
  }
`

const CategoriButton = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  width: 100%;
  max-width: 60.06549364613881%;
  /* max-width: 100%; */
  gap : 10px;
  margin: 36px 0;
  border: 2px solid yellow;

  @media screen and (min-width:850px) and (max-width: 1360px) {
    width: 540px;
    min-width: 540px;
    max-width: 540px;
    margin: 30px 0;
  }

  @media screen and (min-width: 586px) and (max-width: 850px) {
    width: 540px;
    min-width: 540px;
    max-width: 540px;
  }

  @media screen and (max-width: 585px) {
    width: 370px;
    min-width: 370px;
    max-width: 370px;
  }

  
`

// const CenterDiv = styled.div`
//   display:flex;
//   flex-direction: column;
//   align-items:center;
//   justify-content: center;
// `