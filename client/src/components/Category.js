import React, { useState } from 'react';
import { Drawer } from 'antd';
import 'antd/dist/antd.css';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';



const Category = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <MenuOutlined style={{ marginTop:10 }} onClick={showDrawer}> </MenuOutlined>

      <Drawer title={<div style={{height:"48px", margin:"auto", paddingTop:13, fontSize:"20px"}}> 전체 카테고리 </div>} placement="right" onClose={onClose} visible={visible}>
        
        <p>전자기기</p>
        <p>의류</p>
        <p>악세서리</p>
        <p>도서</p>
        <p>미용</p>
        <p>식품</p>
        <p>가구</p>
        <p>기타</p>
      </Drawer>
    </>
  );
};

export default Category;
