import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';


function LoginPage(props) {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  const onFinish = (values) => {
    onClickLogin();
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
const handleInputId = (e) => {
    setInputId(e.target.value)
}

const handleInputPw = (e) => {
    setInputPw(e.target.value)
}

// login 버튼 클릭 이벤트
const onClickLogin = () => {
    axios.post('http://localhost:3001/onLogin', null, {
        params: {
        'user_id': inputId,
        'user_pw': inputPw
        }
    })
    .then(res => {
        if(res.data.iduser === undefined){
            // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
            console.log('======================',res.data.msg)
            alert('입력하신 id 가 일치하지 않습니다.')
        } else if(res.data.iduser === null){
            // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
            console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
            alert('입력하신 비밀번호 가 일치하지 않습니다.')
        } else if(res.data.iduser === inputId) {
            // id, pw 모두 일치 userId = userId1, msg = undefined
            console.log('======================','로그인 성공')
            sessionStorage.setItem('user_id', inputId)
            sessionStorage.setItem('user_nickname',res.data.nickname)
        }
        // 작업 완료 되면 페이지 이동(새로고침)
        document.location.href = '/'
    })
    .catch()
}

// 페이지 렌더링 후 가장 처음 호출되는 함수
useEffect(() => {
    axios.get('/server/login')
    .then(res => console.log(res))
    .catch()
},
// 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
[])

  return(
      <Container>
        <Form 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
          <h2>로그인.</h2>
          <div>
              <p>아이디</p>
              <Input placeholder="이메일 주소를 입력해주세요." htmlFor='input_id'
                            name="username" type='text' value={inputId} onChange={handleInputId} maxLength={"16"} style={{width:"400px"}}/>
          </div>
          <br/>
          <div>
              <p>비밀번호</p>
              <Input placeholder="비밀번호를 입력해주세요." type='password' name="password"
                            htmlFor='input_pw' value={inputPw} onChange={handleInputPw} style={{width:"400px"}}/>
          </div>
          <br/>
          <div style={{display:"flex", letterSpacing:"0.7px"}}>
            <label for='id_save'>아이디 저장</label>
            <input type={"checkbox"} name='id_save' style={{borderBlockColor:"white"}}/>
            
            <label for='auto_login'>자동 로그인</label>
            <input type={"checkbox"} name='id_save'/>
          
          </div>
          <br/><br/>
          <div style={{display:"block"}}>
            <Button type="primary" block content="Login" onClick={onClickLogin} style={{backgroundColor:"#1D2088"}}>로그인</Button>
            <br/><br/>
            <Button type="primary" block href='/signup' style={{backgroundColor:"white", color:"black"}}>회원가입</Button>
          </div>
          <div>
            <p>SNS 간편 로그인</p>
          </div>
          </Form>
      </Container>
  )
}

export default LoginPage;

const Container = styled.div`
    position: absolute;
    margin-Top:12%;
    margin-left:40%;
    font-family: Pretendard;
`
const h2 = styled.div`
    font: normal normal 600 34px/30px Pretendard;
`
const Form = styled.div`
`