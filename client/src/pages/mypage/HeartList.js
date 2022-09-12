import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './MyPage.css';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Content, Footer, Sider } = Layout;

const HeartList = () => (
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
              <Link to='/heartlist  ' style={{color:"black", marginTop:"40px", fontSize:"24px", textAlign:"center", fontWeight:"bold"}}>찜 목록</Link>
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
                   color:"black", textAlign:"left"}}><b>찜 목록</b></h3>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
            height: '80%'
          }}
        >
          content
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

export default HeartList;