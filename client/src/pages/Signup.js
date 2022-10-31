import React, { useState } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { Button } from 'antd';
import { Input, Space, Form } from 'antd';
import signupcss from './Signup.css'
import axios from 'axios';

function SignupPage(props){
  const [form] = Form.useForm();
  const [regId, setRegId] = useState(false);
  const [regPw, setRegPw] = useState(false);
  const [regCpw, setRegcPw] = useState(false);
  const [regName, setRegName] = useState(false);
  //유저아이디
  const [userId, setUserId] = useState('');
  //중복체크
  const [idDuplicate, setidDuplicate] = useState(true);

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
      signup(values)
  };

  //서버 요청
  const signup = (values) => {
      axios.post('http://127.0.0.1:3001/signup',{
        params: values
      })
        .then(res => {
          alert(res.data);
          window.location.href = '/login';
        })
        .catch(function(error){
         console.log(error);
      })
  }

  //id 중복검사
  const idDuplicateCheck = () => {
      axios.post('http://127.0.0.1:3001/idDuplicateCheck',{
        params: userId
      })
        .then(res => {
          if(res.data[0].count >= 1){
              setidDuplicate(true);
              alert("중복된 ID 입니다.")
          } else {
              alert("사용 가능한 ID 입니다.")
              setidDuplicate(false);
          }
        })
        .catch(function(error){
         console.log(error);
      })
  };
  console.log(idDuplicate);

  //미입력 이벤트
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };

  //유효성검사
  const handleInputId = (e) => {
      // 6자~16자 소문자 영어, 숫자 조합
      var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-z]{6,16}$/
      setRegId(regExp.test(e.target.value));
      setUserId(e.target.value);
  };

  const handleInputPw = (e) => {
      // 8자~16자 영문, 숫자 조합
      var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/
      setRegPw(regExp.test(e.target.value));
  };

  const handleInputChkPw = (e) => {
      var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/
      setRegcPw(regExp.test(e.target.value));
  };

  const handleNickname = (e) => {
      // 2자~10자 영문, 숫자 조합
      var regExp = /^(?=.*[a-z0-9가-힣])[a-zA-Z0-9가-힣]{2,10}$/
      setRegName(regExp.test(e.target.value));
  };



    return(
      <Container>
        <Form form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          remember: true,
      }}
        >
          <div>
            <img src={process.env.PUBLIC_URL +'/img/logo.png'}/>
            <br/><br/>
            <h2>회원가입.</h2>
          </div>
          <Form.Item>
              <p>이름</p>
              <Input required={true} placeholder="이름을 입력해주세요." name="id" type='text' onChange={handleNickname} style={{width:"400px"}}/>
          </Form.Item>
          
          <Form.Item>
              <p>아이디</p>
              <Input required={true} placeholder="이메일 주소를 입력해주세요." name="password" type='text'  onChange={handleInputId} style={{width:"400px"}}/>
          </Form.Item>
         
          <Form.Item>
              <p>비밀번호</p>
              <Space direction='vertical'>
              <Input.Password required={true} placeholder="비밀번호를 입력해주세요." name="chkpassword" type='password'  onChange={handleInputPw} style={{width:"400px"}}/>
              </Space>
          </Form.Item>
         
          <Form.Item>
              <p>비밀번호확인</p>
              <Input.Password required={true} placeholder="비밀번호를 입력해주세요."type='password'  name="chkpassword" onChange={handleInputChkPw} style={{width:"400px"}}/>
          </Form.Item>
          <br/>
          <Button type="primary" block htmlType="submit" style={{backgroundColor:"#1D2088"}} >회원가입</Button>
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
const div = styled.div`
  margin: 20px;
`
