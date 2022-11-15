/* eslint-disable */
import styled from 'styled-components';
import ItemCard from '../components/ItemCard.js';
import 'antd/dist/antd.css';
import antd from '../components/AntDesign.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from 'antd';
import { CircleLoading } from 'loplat-ui';
import { SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {Modal} from 'antd';
import { Select } from 'antd';
import DummyData from './DummyData.js';

const { Option } = Select;

function ProductPage() {
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(DummyData);
  const [copyItems, setCopyItems] = useState(DummyData);
  const [isCategorySearch, setIsCategorySearch] = useState(false);

  //검색
  const startPy = async (keyword) => {
    setLoading(true)
    try {
      await axios('http://23.22.235.3:5000/search', {
        method: "get",
        params: {
          value: keyword
        }
      })
        .then(res => {
          setItems(res.data);
          setCopyItems(res.data);
          window.localStorage.setItem("productData", JSON.stringify(res.data));
        })
        .catch(function(error){
          console.log(error);
          alert("❗ 400 error")
        })
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  //검색
  const onSearch = (value) => { 
    console.log("검색어 :" + value)
    if(loading){
      alert("❗ 이미 검색이 진행되고 있어요.")
      return
    }
    if(value==""){
      alert("❗ 검색어를 입력해 주세요.")
      return
    }
    alert("서비스 점검 중입니다.")
    // setIsCategorySearch(false);
    // startPy(value)
  }

  //카테고리 검색
  const categorySearch = (str) => {
    console.log("카테고리 검색어 :"+str)
    if(loading){
      alert("❗ 이미 검색이 진행되고 있어요.")
      return
    }
    alert("서비스 점검 중입니다.")
    // setIsCategorySearch(true);
    // startPy(str)
  }

  //로컬스토리지 확인
  useEffect(() => {
    if(window.localStorage.getItem("productData")){
      let temp = JSON.parse(window.localStorage.getItem("productData"))
      setItems(temp)
      setCopyItems(temp)
    }
  }, [])

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
  const [filterPlatform, setFilterPlatform] = useState('전체');
  const [filterOutlier, setFilterOutlier] = useState('최신순');

  //플랫폼 선택
  const handleChange = (value) => {
    setFilterPlatform(value);
  };
  
  //이상치 선택
  const handleChange2 = (value) => {
    setFilterOutlier(value);
  };

  useEffect(() => {
    if(filterPlatform && filterOutlier){
      filter()
    }
  }, [filterPlatform, filterOutlier])

  const filter = () => {
    let temp = items;

    if (items) {
      if (filterPlatform === '전체') {
        if (filterOutlier === '최신순') {
          setCopyItems(items);
        } else {
          setCopyItems(temp.filter((i) =>
            i.outlier.includes(filterOutlier)
          ))
        }
      } else if (filterOutlier === '최신순') {
        setCopyItems(temp.filter((i) =>
        i.platform.includes(filterPlatform)
      ))
      } else {
        temp = items;
        setCopyItems(temp.filter((i) =>
          i.platform.includes(filterPlatform) && i.outlier.includes(filterOutlier)
        ))
      }
    }
  }

  //평균가, 가격순, 시세이상, 시세이하
  const filterAverage = (i) => {
    let temp = items;

    if (i === "최신순") {
      setCopyItems(items);
    }

    else if (i === "normal") {
      setCopyItems(temp.filter((i) =>
        i.outlier.includes("normal")
      ))
    }

    else if (i === "high") {
      setCopyItems(temp.filter((i) =>
        i.outlier.includes("high")
      ))
    }

    else if (i === "low") {
      setCopyItems(temp.filter((i) =>
        i.outlier.includes("low")
      ))
    }
  }

  return (
    <Container>
      <Categori>

        {/* <CategoriItem>
          <h3>
            <QuestionCircleOutlined style={{ fontSize: '20px', color: '#08c', marginRight:'5px'}} onClick={showModal} />
            추천 검색 카테고리
          </h3>
        </CategoriItem> */}
        <CategoriDivider>
            <MarketInfo>
                <MarketIntroduce>
                   지역 상품명으로<br/>제품을 검색하세요!
                </MarketIntroduce>
            </MarketInfo>
            <ModalMark>
              <QuestionCircleOutlined style={{ fontSize: '25px', color: '#08c', marginRight:'5px'}} onClick={showModal} />
            </ModalMark>
            <Modal title="정보 및 주의사항" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style={{marginTop:"5%"}}>
              <p style={{ marginTop: '1%' }}> 지역 상품명으로 찾으시는 중고 상품을 검색해보세요! </p>
              <br/>
              <p>당근마켓, 번개장터, 중고나라 3개의 플랫폼이 모두 동시에 검색됩니다.</p>
              <br/>
              <p>가격이 평균보다 너무 높거나 낮다면 주의하세요.</p>
              <br/>
              <p>검색까지 <span style={{display:"inline", color:'red'}}>약 20초의 </span>시간이 소요되며 페이지를 이동해서는 안 됩니다.</p>
            </Modal >

            <CategoriItem>
              {/* <InputWrapper placeholder="지역 상품명으로 검색하세요!" allowClear onSearch={onSearch} style={{width:"100%"}}/> */}
              {/* <CategoriSearch> */}
              
              <Search className={antd.ho} id={antd.placeholder} placeholder="지역 상품명으로 검색하세요!" onSearch={onSearch} />
              {/* </CategoriSearch> */}
              <CategoriButton>
                <Button id={antd.button} onClick={(str) => categorySearch("스포츠/레저")} type="ghost">#스포츠/레저</Button>
                <Button id={antd.button} onClick={(str) => categorySearch("의류")} type="ghost">#의류</Button>
                <Button id={antd.button} onClick={(str) => categorySearch("미용")} type="ghost">#미용</Button>
                <Button id={antd.button} onClick={(str) => categorySearch("디지털기기")} type="ghost">#디지털기기</Button>
                <Button id={antd.button} onClick={(str) => categorySearch("가구/인테리어")} type="ghost">#가구</Button>
              {/* borderWidth는 지우세요. */}
              {/* <CategoriItem style={{borderWidth:"0px"}}> */}
                <Button id={antd.button} onClick={(str) => categorySearch("도서/티켓/문구")}type="ghost">#도서/티켓/문구</Button>
                <Button id={antd.button} onClick={(str) => categorySearch("반려동물")} type="ghost">#반려동물</Button>
                <Button id={antd.button} onClick={(str) => categorySearch("콘솔게임")} type="ghost">#콘솔게임</Button>
                <Button id={antd.button} onClick={(str) => categorySearch("디지털기기")} type="ghost">#인테리어</Button>
              </CategoriButton>
              {/* </CategoriItem> */}
            {/* borderWidth는 지우세요. */}

            {!isCategorySearch &&
              <CategoriItem style={{ padding: "0" }}>
                <Select
                  defaultValue="전체"
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
                  defaultValue="최신순"
                  // style={{
                  //   width: 285,
                  // }}
                  onChange={handleChange2}
                >
                  <Option value="최신순">최신순</Option>
                  <Option value="normal">평균가</Option>
                  <Option value="low">시세 이하</Option>
                  <Option value="high">시세 이상</Option>
                </Select>
              </CategoriItem>

            }

              
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

      <div>
        {loading &&
          <CenterDiv>
            <CircleLoading
              aria-describedby="example"
              aria-labelledby="example"
              duration={1300}
              scale={1}
              zIndex={0}
              style={{ marginTop: "100px", marginBottom:"20px" }} />
            <div style={{marginTop:30}}>
              <h3 style={{ whiteSpace: "nowrap", color: '#148CFF' }}>상품 데이터를 수집하고 있어요.</h3>
            </div>
          </CenterDiv>}
      </div>

      <div style={{ width: '100%', maxWidth: '1389px', marginTop:"1%" }}>
        <h3 style={{ marginLeft:7, fontWeight: "800", fontSize: "20px", whiteSpace: "nowrap", marginBottom: "3%", fontFamily: "pretendard", marginRight: "auto" }}>총 {copyItems.length}개의 상품이 있습니다.</h3>
      </div>

      {items &&
        <CardContainer>
          
          {
            copyItems.map((a, i) => {
              return <ItemCard items={copyItems[i]} />
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
  /* max-width: 1920px; */
  /* padding-top: 100px; */
  /* background-color: #FFFFFF; */
`

const CardContainer = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1389px;
  /* margin-top: 65px; */
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
  margin-top: 100px;
 
  @media screen and (min-width: 1161px) and (max-width: 1360px) {
    height: 447.3px;
    /* margin-bottom: 58.5px; */
  }
  @media screen and (min-width: 851px) and (max-width: 1160px) {
    height: 423.8px;
    /* margin-bottom: 52.25px; */
    /* margin-top: 0; */
  }
  @media screen and (min-width: 576px) and (max-width: 850px) {
    height: 402.57px;
    /* margin-bottom: 45px; */
    /* margin-top: 0; */
  }

  @media screen and (max-width: 575px) {
    height: 362.313px;
    /* margin-bottom: 34.6px; */
    /* margin-top: 0; */
  }
`

const CategoriDivider = styled.div`@media screen and (min-width: 461px) and (max-width: 585px) {
  /* search input */
  #placeholder {
      border: 1px solid #3E3E3E;
      border-right: none;
      height: 43px;
      font: normal normal 600 18px pretendard;
      color: #797979;
      padding-left: 21px;
  }
  /* category item button */
  #button {
      font: normal normal 12px pretendard;
      color: #848484;
      border: 1px solid #D3D3D3;
      border-radius: 31px;
  }
  /* platform dropdown */
  :global .ant-select {
      width: 140px;
      margin-right: 6px;
      border: 1px solid #191919;
  }
  /* platform dropdown height customize */
  :global .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      height: 31px;
      padding-top: 1px;
  }
  /* platform dropdown font styling */
  :global .ant-select-selection-item {
      font: normal normal 16px pretendard;
      letter-spacing: -0.53px;
      color: #191919;
      margin-left: 6px;
  }
  /* platform dropdown arrow */
  :global .ant-select-arrow {
      font-size: 12px;
      color: black;
  }
  /* search input icon box */
  :global .ant-btn-icon-only {
      width: 43px;
      height: 43px;
      border: 1px solid #3E3E3E;
      border-left: none;
  }
  /* search input icon styling */
  :global .ant-btn-icon-only > * {
      font-size: 16px;
      color: #191919;
  }
}
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
  display: flex;
   @media screen and (min-width: 1360px) {
      width: 23.29682997118156%;
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
const ModalMark = styled.div`
   @media screen and (min-width: 1360px) {
      width: 3%;
      margin-bottom: 15%;
   }
   @media screen and (min-width: 850px) and (max-width: 1360px) {
      width: 3%;
      margin-left: 3%;
      margin-bottom: 170px;
   }
   @media screen and (min-width: 586px) and (max-width: 850px) {
      width: 3%;
      margin-left: 3%;
      margin-bottom: 190px;
   }
   @media screen and (max-width: 585px) {
      width: 3%;
      margin-left: 3%;
      margin-bottom: 220px;
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
  /* border: 2px solid green; */

  @media screen and (max-width: 850px) {
    width: 100%;
    padding: 0 3%;
  }

  @media screen and (max-width: 585px) {
    width: 100%;
    padding: 0 5%;
  }
`
// const CategoriSearch = styled.div`
//   width: 100%;
//   height: 71px;
//   /* border: 2px solid blue; */
// `
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
  /* border: 2px solid yellow; */

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

  @media screen and (min-width:461px) and (max-width: 585px) {
    width: 370px;
    min-width: 370px;
    max-width: 370px;
  }

  @media screen and (max-width: 460px) {
    width: 320px;
    min-width: 320px;
    max-width: 320px;
  }
`

const CenterDiv = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`