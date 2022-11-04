import React, { useState } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { Button } from 'antd';
import { Input, Space, Form } from 'antd';
import sc from './Signup.module.css'
import axios from 'axios';

function SignupPage(props){
  const [form] = Form.useForm();
  const [regId, setRegId] = useState(false);
  const [regPw, setRegPw] = useState(false);
  const [regCpw, setRegcPw] = useState(false);
  const [regName, setRegName] = useState(false);
  //유저아이디
  const [userId, setUserId] = useState('');

  let sessionStorage = window.sessionStorage;

  var regid = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-z]{6,16}$/
  var regpw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/
  var regname = /^(?=.*[a-z0-9가-힣])[a-zA-Z0-9가-힣]{2,10}$/

  //유효성 검사 및 서버 요청
  const onFinish = (values) => {
      if(regId == false){
          alert("아이디를 확인하세요. (영문, 숫자 6~16 글자)")
          return;
      }
    
      if(regPw == false){
          alert("비밀번호를 확인하세요. (영문, 숫자 6~18 글자)")
          return;
      }
      if(regCpw != regPw){
          alert("동일한 비밀번호를 입력해주세요.")
          return;
      }
      if(regName == false){
          alert("이름을 확인하세요. (영문, 숫자 2~10 글자)")
          return;
      }
      console.log('Success:', values);
      sessionStorage.setItem("user_NAME", regName);
      sessionStorage.setItem("user_ID", regId);
      sessionStorage.setItem("user_PW", regPw);
      console.log(regName);
      console.log("회원가입 완료");
      window.location.href = '/login';
      alert('회원가입이 완료되었습니다.')
  };

  //미입력 이벤트
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };

  //유효성검사
  const handleInputId = (e) => {
      // 6자~16자 소문자 영어, 숫자 조합
      var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-z]{6,16}$/
      setRegId(e.target.value);
  };

  const handleInputPw = (e) => {
      // 8자~16자 영문, 숫자 조합
      var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/
      setRegPw(e.target.value);
      // setRegPw(regExp.test(e.target.value));
  };

  const handleInputChkPw = (e) => {
      var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/
      setRegcPw(e.target.value);
      console.log(regName);
  };

  const handleNickname = (e) => {
      // 2자~10자 영문, 숫자 조합
      var regExp = /^(?=.*[a-z0-9가-힣])[a-zA-Z0-9가-힣]{2,10}$/
      setRegName(e.target.value);
      console.log(regName);
  };



    return(
      <Container className={sc.con}>
        <Form form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          remember: true,
      }}
        >
          <div style={{textAlign:"center"}}>
            <img src={process.env.PUBLIC_URL +'/img/ResellViewer.png'}/>
            <br/><br/>
            <h2>회원가입.</h2>
          </div>
          <Form.Item>
              <p>이름</p>
              <Input className={sc.ib} required={true} placeholder="이름을 입력해주세요." name="id" type='text' onChange={handleNickname} style={{width:"400px"}}/>
          </Form.Item>
          
          <Form.Item>
              <p>아이디</p>
              <Input className={sc.ib} required={true} placeholder="이메일 주소를 입력해주세요." name="password" type='text'  onChange={handleInputId} style={{width:"400px"}}/>
          </Form.Item>
         
          <Form.Item>
              <p>비밀번호</p>
              <Space direction='vertical'>
              <Input.Password className={sc.ib} required={true} placeholder="비밀번호를 입력해주세요." name="chkpassword" type='password'  onChange={handleInputPw} style={{width:"400px"}}/>
              </Space>
          </Form.Item>
         
          <Form.Item>
              <p>비밀번호확인</p>
              <Input.Password className={sc.ib} required={true} placeholder="비밀번호를 입력해주세요."type='password'  name="chkpassword" onChange={handleInputChkPw} style={{width:"400px"}}/>
          </Form.Item>
          <br/>
          <Button type="primary" className={sc.ib} block htmlType="submit" style={{backgroundColor:"#1D2088"}} >회원가입</Button>
          </Form>
      </Container>
    );
}

export default SignupPage;

const Container = styled.div`
  position: absolute;
  margin-Top: 10%;
  margin-Left: 40%;
  position:block;
  font-family: Pretendard;
`;

