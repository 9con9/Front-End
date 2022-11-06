import React, { useState } from 'react';
import styled from "styled-components";
import { Button } from 'antd';
import { Input } from 'antd';
import lc from './Login.module.css';


function LoginPage(props) {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  sessionStorage.setItem("login", false);

  const onFinish = (values) => {
    onClickLogin();
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
const handleInputId = (e) => {
    setInputId(e.target.value);
}

const handleInputPw = (e) => {
    setInputPw(e.target.value)
}

const onClickLogin = () => {
    if(inputId != sessionStorage.getItem("user_ID")){
        alert('아이디가 일치하지 않습니다.');
        return
    }
    if(inputPw != sessionStorage.getItem("user_PW")){
        alert('비밀번호가 일치하지 않습니다.');
        return
    }
    sessionStorage.setItem("login", 1);
    console.log(sessionStorage.getItem("login"))
    window.location.href = '/'
}

const onClickSignup = () => {
  window.location.href = './signup'
  sessionStorage.removeItem("login");
}

  return(
      <Container className={lc.con}>
        <Form 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
          <h2>로그인.</h2>
          <div>
              <p>아이디</p>
              <Input placeholder="이메일 주소를 입력해주세요." htmlFor='input_id' className={lc.userID}
                            name="username" type='text' value={inputId} onChange={handleInputId} maxLength={"16"} style={{width:"400px"}}/>
          </div>
          <br/>
          <div>
              <p>비밀번호</p>
              <Input placeholder="비밀번호를 입력해주세요." type='password' name="password" className={lc.userID}
                            htmlFor='input_pw' value={inputPw} onChange={handleInputPw} style={{width:"400px"}}/>
          </div>
          <br/>
          <div style={{display:"flex", letterSpacing:"0.9px"}}>
            <label for='id_save'>아이디 저장</label>
            <input type={"checkbox"} name='id_save' style={{borderBlockColor:"white"}}/>
            &nbsp;&nbsp;&nbsp;
            <label for='auto_login'>자동 로그인</label>
            <input type={"checkbox"} name='id_save'/>
            
          </div>
          <br/><br/>
          <div style={{display:"block"}}>
            <Button className={lc.btn} type="primary" block content="Login" onClick={onClickLogin} style={{backgroundColor:"#1D2088"}}>로그인</Button>
            <br/><br/>
            <Button className={lc.btn} type="primary" block onClick={onClickSignup} style={{backgroundColor:"white", color:"black"}}>회원가입</Button>
          </div>
        <br/>
          <div style={{width:"100%", textAlign:"center"}}>
            <p style={{fontFamily:"Pretendard", fontSize:"20px", fontWeight:"500"}}>SNS 간편 로그인</p>
            <img src={process.env.PUBLIC_URL +'/img/logicon.png'} style={{width:"50%"}} />
          </div>
          </Form>
      </Container>
  )
}

export default LoginPage;

const Container = styled.div`
    position: absolute;
    margin-Top:10%;
    margin-left:40%;
    font-family: Pretendard;
    background-color: white;
`
const h2 = styled.div`
    font: normal normal 600 34px/30px Pretendard;
`
const Form = styled.div`
`