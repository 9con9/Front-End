import React, { useEffect } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { Button } from 'antd';

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
  marginLeft: 100px;
  border: 1px;
  textAlign: center;
  
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 30%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
  
`;


function SignupPage(){
    // const onChange = (e) => {
    //     if(e != pw){
    //       alert("비밀번호가 틀립니다")
    //     }
    //     else if(!pw){
    //       alert("비밀번호가 틀립니다")
    //     }
    // }

    // webkitURL(name){
    //   alert(name + "님 환영합니다!")
    // }

  // const auth =({name, id, pw, pwcf}) => {
  //   return(
  //     alert(name + "님 환영합니다.")
  //   )
  // }

    return(
    <form>
    <Container style={{textAlign:"center"}}>
            
            <div><h2 style={{fontWeight:"bold", textAlign:"center"}}>회원 가입</h2><br></br>
              <h4 style={{color:"black"}}> 이름 입력: <Input id="name" name="name" maxLength='12' minLength= '2' placeholder="이름를 입력해주세요" style={{width:"200px"}} /></h4>
                <h4 style={{marginLeft:"12px", color:"black"}}>ID 입력: <Input id="id" name="id" placeholder="아이디를 입력해주세요" style={{width:"200px"}}/></h4>
                <h4 style={{marginRight:"31px", color:"black"}}>비밀번호 입력: <Input id="pw" name="password" type="password" placeholder="비밀번호를 입력해주세요" style={{width:"200px"}}/></h4>
                <h4 style={{marginRight:"64px", color:"black"}}>비밀번호 확인 입력: <Input id="pwcf" name="password" type="password" placeholder="비밀번호를 확인해주세요" style={{width:"200px"}}/></h4>
                <h4 style={{marginRight:"31px", color:"black"}}>전화번호 입력: <Input id="pwcf" name="password" type="text" placeholder="전화번호를 입력하세요" style={{width:"200px"}}/></h4>
                <h4 style={{marginRight:"20px", color:"black"}}>이메일 입력: <Input id="pwcf" name="password" type="text" placeholder="이메일 주소를 입력하세요" style={{width:"200px"}}/></h4>


                <br></br>
                <Link to='/login'>
                  <Button onClick = 
        {() => {
          alert('회원가입 완료')
        }}>회원가입 완료</Button>
                </Link>
            </div>
    </Container>
    </form>
    );
}

export default SignupPage;