import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './MyPage.css';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Content, Footer, Sider } = Layout;

const MyProfile = () => (
  
  <Layout style={{height:"100vh"}}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
          <img src={process.env.PUBLIC_URL + '/img/UserIcon.png'}
          style={{width:"200px", textAlign:"center", verticalAlign:"center"}}/> 
      <div className='mypageMenu'>
          <ul>
            <li style={{marginBottom:"40px"}}>
              <Link to='/mypage' style={{color:"black", marginTop:"40px", fontSize:"24px", textAlign:"center", fontWeight:"bold"}}>대시보드</Link>
            </li>
            <li style={{marginBottom:"40px"}}>
              <Link to='/myprofile' style={{color:"black", marginTop:"40px", fontSize:"24px", textAlign:"center", fontWeight:"bold"}}>프로필</Link>
            </li>
            <li style={{marginBottom:"40px"}}>
              <Link to='/lookuplist' style={{color:"black", marginTop:"40px", fontSize:"24px", textAlign:"center", fontWeight:"bold"}}>조회 목록</Link>
            </li>
            <li style={{marginBottom:"40px"}}>
              <Link to='/heartlist' style={{color:"black", marginTop:"40px", fontSize:"24px", textAlign:"center", fontWeight:"bold"}}>찜 목록</Link>
            </li>
            <li>
              <Link to='/' style={{color:"black", marginTop:"40px", fontSize:"24px", textAlign:"center", fontWeight:"bold"}}>로그아웃</Link>
            </li>
          </ul>
        </div>
    </Sider>
    <Layout>
      <Content
        style={{
          margin: '24px 16px 0',
          height: '80%',
        }}
      ><h3 style={{marginLeft:"20px", marginTop:"20px", marginBottom:"40px", fontSize:"40px", 
                   color:"black", textAlign:"left"}}><b>프로필</b></h3>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
            height: '80%'
          }}
        >
          <div id='tableEX'>
            <br></br>  
            <h2><b>개인 정보 수정</b></h2><br></br>
            <h3><b>아래 내용을 기입해주세요. * 표시는 필수 입력사항입니다.</b></h3>
            <br></br><br></br>
            <table width={500} height={300}>
              <tr>
                <td id='tableName'>이름</td>
                <td><input type='text' value="최영규" style={{marginRight:'20px'}}></input>성별<select id='sex'><option>남자</option><option>여자</option></select></td>
              </tr>
              <tr>
                <td id='tableName'>사용자 ID</td>
                <td colSpan={3}><input type='text' value='user123'></input></td>
              </tr>
              <tr>
                <td id='tableName'>* 생년월일</td>
                <td colSpan={3}><input type='text' placeholder='19991028' style={{marginRight:'20px'}}></input>ex ) 20000101</td>
              </tr>
              <tr>
                <td id='tableName'>* 휴대전화번호</td>
                <td colSpan={3}><input type='text' placeholder="010-1234-5678" style={{marginRight:'20px'}}></input>ex ) 010-1234-5678</td>
              </tr>
              <tr>
                <td id='tableName'>일반전화번호</td>
                <td colSpan={3}><input type='text' placeholder="031-123-4567" style={{marginRight:'20px'}}></input>ex ) 031-123-4567</td>
              </tr>
              <tr>
                <td id='tableName'>* 이메일</td>
                <td colSpan={3}><input type='text' placeholder="user123@gmail.com" style={{marginRight:'20px'}}></input>ex ) user123@gmail.com</td>
              </tr>
            </table>
            <br></br>
            <li style={{width:'500', height:'500', listStyle:'none', textAlign:'center'}}><input type='button' value='저장하기' onClick= {() => {alert('저장되었습니다.')}}></input></li>
          </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Resell Viewer ©2022 Created by 99CON
      </Footer>
    </Layout>
  </Layout>
);

export default MyProfile;