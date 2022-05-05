import React, { useState } from 'react';
import { Drawer } from 'antd';
import 'antd/dist/antd.css';
import { MenuOutlined } from '@ant-design/icons';

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

      <Drawer title="전체 카테고리" placement="right" onClose={onClose} visible={visible}>
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