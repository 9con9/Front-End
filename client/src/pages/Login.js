import React, { useEffect } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Mainpage from './Main';

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
  marginLeft: 100px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  
  width: 200px;
  height: 49px;
  margin: 16px 44.5% 7px;
  cursor: pointer;
  marginRight: -200px;
  color: #fff;
  
  background-color: #03c75a;
`;
//아디 비번 값 받기
//값없으면 disabled


function LoginPage() {

  return (
    <Container  style={{textAlign:"center", marginTop:"200px"}}>
        <div>
        <p style={{fontSize:"30px", textAlign:"center", fontWeight:"bold", textAlign:"center", marginTop:"-20px"}}>리셀 뷰어</p>
      <Input id="id" name="id" placeholder="아이디를 입력해주세요"/><br></br>
      <Input id="password" name="password" type="password" placeholder="비밀번호를 입력해주세요"/>
      <Link to='/log'>
      <Button onClick = 
        {() => {
          alert('최영규님 안녕하세요!')
        }}
        // {(id, password) => {
        //     if(id ===null || password ===null){
        //         alert('ID 혹은 Password를 기입해주세요.')
        //     }
        //     else if(id != id || password == password){
        //         alert('ID 혹은 Password가 일치하지 않습니다.') 
        //     }
        //     else{
                
        //     }}}
        >로그인</Button>
      </Link>
      </div>
        <Link to='/signup'>혹시 회원이 아니신가요?</Link>
    
      
    </Container>
  );
}



export default LoginPage;