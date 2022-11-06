import styled from 'styled-components';
import ItemCard from '../components/ItemCard.js';
import 'antd/dist/antd.css';
import antd from '../components/AntDesign.module.css';
import { useState } from 'react';
import axios from 'axios';
import { Input } from 'antd';
import { CircleLoading } from 'loplat-ui';
import { SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {Modal} from 'antd';
import { Select } from 'antd';

const { Option } = Select;

 const Dummy_Data = 
[
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/28/1666924022947yIf_HzLLa.jpg",
    "index": "1",
    "link": "https://web.joongna.com/product/detail/75760162",
    "name": "\uc0c8\uae30\uacc4\uae09 \uc5d0\uc5b4 4\uc138\ub300 64\uae30\uac00 \ud31d\ub2c8\ub2e4",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "520000",
    "time": "6\ubd84 \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/203614358_1_1666934229_w292.jpg",
    "index": "2",
    "link": "https://bunjang.co.kr/products/203614358?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \ud480\ubc15 \uc2a4\uadf8 64g \uc640\uc774\ud30c\uc774 \uc0c1\ud0dcs\uae09 \ud310\ub9e4\ud569\ub2c8\ub2e4.",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \uc11c\uad6c \uac80\ub2e81\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "550000",
    "time": "1\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202211/6826C7D87E747985050A22B22C8A83A6892F618333EFD7F9B58387CC130917A0.jpg?q=82&s=300x300&t=crop",
    "index": "2",
    "link": "https://www.daangn.com//articles/483091034",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 256G + \uc560\ud50c\ud39c\uc2ac 2\uc138\ub300(\ucf00\uc774\uc2a4, \uc885\uc774\ud544\ub984, \ub85c\uc9c0\ud14d \ud0a4\ubcf4\ub4dc, \ub9c8\uc6b0\uc2a4, \ud39c\uc2ac\ucea1, \ucda9\uc804\uae30) \ud310\ub9e4",
    "outlier": "high",
    "place": "\uc778\ucc9c \uc11c\uad6c \uc2ec\uace1\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "750000",
    "time": "1\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/11/02/1667353117604ycz_MkYRt.jpg",
    "index": "2",
    "link": "https://web.joongna.com/product/detail/76691109",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uc2a4\ud398\uc774\uc2a4\uadf8\ub808\uc774 64g \ud314\uc544\uc694 +\uc560\ucf00\ud50c",
    "outlier": "normal",
    "place": "\uad8c\uc1202\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "540000",
    "time": "1\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/202481442_1_1665972805_w292.jpg",
    "index": "4",
    "link": "https://bunjang.co.kr/products/202481442?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 64g + \uc560\ud50c\ud32c\uc2ac",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \ubd80\ud3c9\uad6c \ubd80\ud3c91\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "700000",
    "time": "1\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/30/1667116126323OJt_IXeNZ.jpg",
    "index": "3",
    "link": "https://web.joongna.com/product/detail/76184628",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b4 4\uc138\ub300 +\uc560\ud50c\ud39c\uc2ac 2\uc138\ub300",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "700000",
    "time": "1\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/28/1666952762128zH0_vcmf5.jpg",
    "index": "5",
    "link": "https://web.joongna.com/product/detail/75843565",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 256 \uc140\ub8f0\ub7ec",
    "outlier": "normal",
    "place": "\uc640\ubd80\uc74d",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "700000",
    "time": "2\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/11/02/951538505/1667349093828000MGo_wVL1M.jpg",
    "index": "6",
    "link": "https://web.joongna.com/product/detail/76676181",
    "name": "\ubc84\ub17c(\uc601\uad6d) \uc5d0\uc5b4\ud504\ub77c\uc774\uc5b4 HB-810(2018\ub1449\uc6d4\uc0b0,3\ub9ac\ud130) \uc911\uace0\uad6c\uc785(4.5\ub9cc\uc6d0)\uc744 \uc6d0\ud558\uc2dc\uba74 \uc5f0\ub77d\uc744 \uc8fc\uc138\uc694",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "45000",
    "time": "2\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/28/1666912771657FhI_KpEm1.jpg",
    "index": "4",
    "link": "https://web.joongna.com/product/detail/75724790",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44 64 \uc2a4\uadf8 \uc640\uc774\ud30c\uc774 \ud310\ub9e4\ud569\ub2c8\ub2e4",
    "outlier": "normal",
    "place": "\uac80\ub2e8\uc0ac\uac70\ub9ac\uc5ed",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "550000",
    "time": "2\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202210/6d6a21c996d790f9fe605592226ac4176831f4d861587db23afc88cf821021e7.webp?q=82&s=300x300&t=crop",
    "index": "3",
    "link": "https://www.daangn.com//articles/470981672",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 64g & \ub9e4\uc9c1\ud32c\uc2ac 2\uc138\ub300",
    "outlier": "normal",
    "place": "\uc778\ucc9c \ubd80\ud3c9\uad6c \ubd80\ud3c91\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "680000",
    "time": "2\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/11/02/166734526036819V_l63F9.jpg",
    "index": "8",
    "link": "https://web.joongna.com/product/detail/76665783",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \ud480\uad6c\uc131 + \uc560\ud50c\ud39c\uc2ac2 + \ub85c\uc9c0\ud14d \ud0a4\ubcf4\ub4dc",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "799000",
    "time": "3\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/08/946292967/1665182093517000KuZ_GoY7r.jpeg",
    "index": "7",
    "link": "https://web.joongna.com/product/detail/71843438",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uc640\uc774\ud30c\uc774 + \uc560\ud50c\ud39c\uc2ac 2\uc138\ub300 \uc2e0\ud488\uae09",
    "outlier": "normal",
    "place": "\uc815\uc790\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "750000",
    "time": "3\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/204062463_1_1667307515_w292.jpg",
    "index": "3",
    "link": "https://bunjang.co.kr/products/204062463?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 64\uae30\uac00 \uc2a4\uadf8 +\uc560\ud50c\ud39c\uc2ac 2\uc138\ub300",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \uc11c\uad6c \uac00\uc8151\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "630000",
    "time": "3\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/09/20/1663627579623jb8_KI0YQ.jpg",
    "index": "9",
    "link": "https://web.joongna.com/product/detail/68401627",
    "name": "K2 \ucf54\ub9ac\uc544 \uc5d0\uc5b4\ud150\ud2b84 \ucf54\uc9c0 \ubbf8\uac1c\ubd09 \uc0c8\uc81c\ud488",
    "outlier": "normal",
    "place": "\uace0\ucd0c\uc74d",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "380000",
    "time": "4\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/11/01/1667262062546Qn8_hyn79.jpg",
    "index": "10",
    "link": "https://web.joongna.com/product/detail/76471772",
    "name": "\uc5d0\uc5b4\ud31f\ud504\ub85c \uc67c\ucabd \uc720\ub2db 4.8\uc5d0 \ud314\uc544\uc694",
    "outlier": "normal",
    "place": "\uc6a9\uc5541\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "48000",
    "time": "5\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/29/166705201341879X_LEoTt.jpg",
    "index": "11",
    "link": "https://web.joongna.com/product/detail/76054857",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b4 4 \uc560\ud50c\ud39c\uc2ac2 \uc560\ucf00\ud50c",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "770000",
    "time": "5\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202211/A04E49F3A90F697C293781B7303094D4C84D755E9DC684144DC5E16DC437AE95.jpg?q=82&s=300x300&t=crop",
    "index": "4",
    "link": "https://www.daangn.com//articles/482953741",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uc2a4\uce74\uc774\ube14\ub8e8 64g wifi",
    "outlier": "low",
    "place": "\uc778\ucc9c \uc11c\uad6c \uac80\uc554\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "490000",
    "time": "6\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/201299666_1_1667297264_w292.jpg",
    "index": "6",
    "link": "https://bunjang.co.kr/products/201299666?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uc140\ub8f0\ub7ec 64\uae30\uac00 \uc2a4\ud398\uc774\uc2a4 \uadf8\ub808\uc774 \ud31d\ub2c8\ub2e4.",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \ub0a8\uad6c \ub3c4\ud6542,3\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "650000",
    "time": "7\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/15/16658127899904Wx_AnjcG.jpg",
    "index": "13",
    "link": "https://web.joongna.com/product/detail/73245891",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b4 4,5\uc138\ub300 \ub85c\uc9c0\ud14d \ud0a4\ubcf4\ub4dc \ud3f4\ub9ac\uc624",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "110000",
    "time": "7\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/14/1665720667286ZOl_aHIzR.jpg",
    "index": "12",
    "link": "https://web.joongna.com/product/detail/73044274",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44 64g wifi",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "520000",
    "time": "7\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/202750352_1_1666175747_w292.jpg",
    "index": "5",
    "link": "https://bunjang.co.kr/products/202750352?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b42 64GB WiFi",
    "outlier": "low",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \uc11c\uad6c \uac80\ub2e84\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "180000",
    "time": "8\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/202585464_1_1667045783_w292.jpg",
    "index": "9",
    "link": "https://bunjang.co.kr/products/202585464?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "(\ubbf8\uac1c\ubd09)\uc544\uc774\ud328\ub4dc \uc5d0\uc5b45 \ube14\ub8e8 64GB WIFI \uc0c8\uc0c1\ud488",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \uc5f0\uc218\uad6c \uc1a1\ub3c42\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "720000",
    "time": "9\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/11/02/1667320525198qRV_YyHgN.jpg",
    "index": "14",
    "link": "https://web.joongna.com/product/detail/76641319",
    "name": "\uc5d0\uc5b4\ud504\ub77c\uc774\uae30 4L \ud31d\ub2c8\ub2e4",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "120000",
    "time": "10\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/189051535_1_1667161745_w292.jpg",
    "index": "10",
    "link": "https://bunjang.co.kr/products/189051535?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "[\uc0c8\uc81c\ud488] \uc544\uc774\ud328\ub4dc \uc5d0\uc5b45 64\uae30\uac00 \ube14\ub8e8, \uc2a4\ud398\uc774\uc2a4\uadf8\ub808\uc774 \ud310\ub9e4\ud569\ub2c8\ub2e4",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \uc11c\uad6c \uccad\ub77c1\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "760000",
    "time": "10\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202210/B4BA25A04647C9D3F836A85F024E2F9892C23CEAF26CC13151F9CC77CCEF3AA8.jpg?q=82&s=300x300&t=crop",
    "index": "5",
    "link": "https://www.daangn.com//articles/480449458",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \ud480\ubc15 \uc2a4\uadf8 64g wifi \uc0c1\ud0dcs\uae09 \ud310\ub9e4\ud569\ub2c8\ub2e4(\ubc30\ud130\ub9ac\uc131\ub2a595%)",
    "outlier": "normal",
    "place": "\uc778\ucc9c \uc11c\uad6c \uc655\uae38\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "550000",
    "time": "11\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/07/14/16577970882023lf_2dMDP.jpg",
    "index": "15",
    "link": "https://web.joongna.com/product/detail/56311359",
    "name": "\uc5d0\uc5b4\ub9ac\uc5b8 1-4\ud3b8 \ube44\ub514\uc624\ud14c\uc774\ud504",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "75000",
    "time": "12\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/08/08/1659888271787jRr_i06UJ.jpg",
    "index": "16",
    "link": "https://web.joongna.com/product/detail/60802991",
    "name": "\ub098\uc774\ud0a4 \uc5d0\uc5b4\uc870\ub3584 \ub808\ud2b8\ub85c \ud4e8\uc5b4\uba38\ub2c8 \ud654\uc774\ud2b8 300 \ubb34\ub8cc\ubc30",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "140000",
    "time": "13\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/203671594_1_1667304603_w292.jpg",
    "index": "8",
    "link": "https://bunjang.co.kr/products/203671594?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b45 \ube14\ub8e8 \uc640\uc774\ud30c\uc774 64GB",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \uc11c\uad6c \uac00\uc88c2\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "730000",
    "time": "14\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/11/01/1667301386737qO9_J2pix.jpg",
    "index": "17",
    "link": "https://web.joongna.com/product/detail/76596392",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44 \uc2a4\ud398\uc774\uc2a4\uadf8\ub808\uc774 256G wifi \ud31d\ub2c8\ub2e4",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "690000",
    "time": "15\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/05/1664969011327WrU_vtGHk.jpg",
    "index": "18",
    "link": "https://web.joongna.com/product/detail/71393365",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uc140\ub8f0\ub7ec 64\uae30\uac00 \uc2a4\ud398\uc774\uc2a4\uadf8\ub808\uc774 \ud31d\ub2c8\ub2e4",
    "outlier": "normal",
    "place": "\uccad\uc6b4\ub300\ud559\uad50",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "650000",
    "time": "16\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202211/B2528B162D5810A85FB37AABA663B150BBAAE405B7CBF5A310CFC620863D2B40.jpg?q=82&s=300x300&t=crop",
    "index": "6",
    "link": "https://www.daangn.com//articles/482757848",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44\uc138\ub300,\uc140\ub8f0\ub7ec\ubaa8\ub378 +\uc560\ud50c\ud39c2\ud3ec\ud568",
    "outlier": "normal",
    "place": "\uc778\ucc9c \uacc4\uc591\uad6c \ub3d9\uc591\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "650000",
    "time": "16\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/15/1665835657224Ki4_xEFiZ.jpg",
    "index": "19",
    "link": "https://web.joongna.com/product/detail/73299997",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 64\uae30\uac00+\uc560\ud50c\ud39c\uc2ac2\uc138\ub300",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "700000",
    "time": "17\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/11/01/951430955/1667294823864000GoZ_SpNkq.jpg",
    "index": "20",
    "link": "https://web.joongna.com/product/detail/76576676",
    "name": "(\ub9c8\uc9c0\ub9c9 \uac00\uaca9\ub0b4\ub9bc) \uc544\uc774\ud328\ub4dc \uc5d0\uc5b4 4\uc138\ub300 \uc2a4\uadf8 64gb \ub9ac\ud37c \uc0c8\uc81c\ud488 +\uc560\ucf00\ud50c +\uc560\ud50c\ud39c\uc2ac 2\uc138\ub300 \ud31d\ub2c8\ub2e4",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "700000",
    "time": "17\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/11/01/1667283088036j1s_Wl4xm.jpg",
    "index": "21",
    "link": "https://web.joongna.com/product/detail/76541313",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44\uc138\ub300 \ube14\ub8e8 64\uc640\ud30c",
    "outlier": "normal",
    "place": "\uc7a5\uc8041\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "529000",
    "time": "20\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202210/F54FA199E653A895CC4D77445988F6E848EE19192E3C1324D5D3F1DC80A0B670.jpg?q=82&s=300x300&t=crop",
    "index": "8",
    "link": "https://www.daangn.com//articles/477961561",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uc2a4\ud398\uc774\uc2a4\uadf8\ub808\uc774 64GB \ud480\ubc15",
    "outlier": "high",
    "place": "\uc778\ucc9c \ubbf8\ucd94\ud640\uad6c \ub3c4\ud6542,3\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "700000",
    "time": "20\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202211/F8B6121039D0EBD775F9F73A78604F9B4A52D901D287E8F00EDCFD2A2AC53415.jpg?q=82&s=300x300&t=crop",
    "index": "7",
    "link": "https://www.daangn.com//articles/482748134",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b4 4 \uc5d0\ud50c\ud32c\uc2ac 2",
    "outlier": "normal",
    "place": "\uc778\ucc9c \uc11c\uad6c \ub2f9\ud558\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "600000",
    "time": "20\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/193901794_1_1663143843_w292.jpg",
    "index": "12",
    "link": "https://bunjang.co.kr/products/193901794?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\ub9e5\ubd81\uc5d0\uc5b42013 13\uc778\uce58 i5 RAM 4GB SSD 128GB",
    "outlier": "low",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \uacc4\uc591\uad6c \uacc4\uc0b02\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "169000",
    "time": "20\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/203323192_1_1666923254_w292.jpg",
    "index": "11",
    "link": "https://bunjang.co.kr/products/203323192?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "[\ubbf8\uac1c\ubd09] \uc544\uc774\ud328\ub4dc \uc5d0\uc5b45 64gb wifi \uc2a4\ub77c \ud310\ub9e4\ud569\ub2c8\ub2e4. \uc560\ud50c",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \ubd80\ud3c9\uad6c \uc0b0\uace12\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "760000",
    "time": "21\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202211/14ED09932ADD16EF7D8C788F2449ADC93045AFD9D415CD7E3320F7628C045D07.jpg?q=82&s=300x300&t=crop",
    "index": "1",
    "link": "https://www.daangn.com//articles/482717634",
    "name": "ESR \uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uc5d0\uc5b45 \uc2a4\ub9c8\ud2b8\ucee4\ubc84 \ucf00\uc774\uc2a4",
    "outlier": "low",
    "place": "\uc778\ucc9c \uc5f0\uc218\uad6c \ub3d9\ucd982\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "10000",
    "time": "22\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/203975023_1_1667368351_w292.jpg",
    "index": "7",
    "link": "https://bunjang.co.kr/products/203975023?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uc2a4\uce74\uc774\ube14\ub8e8 64g wifi",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \uc11c\uad6c \uac80\uc554\uacbd\uc11c\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "490000",
    "time": "22\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/11/01/1667276827491Cb4_DBZ1U.jpg",
    "index": "22",
    "link": "https://web.joongna.com/product/detail/76521929",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44",
    "outlier": "normal",
    "place": "\ub3d9\ud0c45\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "550000",
    "time": "22\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/06/03/16542478916791V0_dDY29.jpg",
    "index": "23",
    "link": "https://web.joongna.com/product/detail/48508160",
    "name": "S\uae09\ub9e5\ubd81\uc5d0\uc5b47 13\uc778\uce58\ucf54\ub4dci5\uba544G\uc800128G A1466",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "320000",
    "time": "22\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202210/BBDA20DA12DE170A30046FE234B3BD0204D7CB3676BF991101447AA9608DE325.jpg?q=82&s=300x300&t=crop",
    "index": "11",
    "link": "https://www.daangn.com//articles/481549089",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uc640\uc774\ud30c\uc774 64\uae30\uac00 \uc2a4\uce74\uc774\ube14\ub8e8",
    "outlier": "normal",
    "place": "\uc778\ucc9c \ubbf8\ucd94\ud640\uad6c \uc8fc\uc5483\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "600000",
    "time": "23\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202210/46DA8AD96B09C0EAB5C328BD2F26B9559548BAF378483CC39D20C2B007024E46.jpg?q=82&s=300x300&t=crop",
    "index": "10",
    "link": "https://www.daangn.com//articles/481098944",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uc2a4\uce74\uc774\ube14\ub8e8 64GB wifi\ubaa8\ub378(\ub9c8\uc9c0\ub9c9\uac00\uaca9)(\uc548\ud314\ub838\uc5b4\uc694)",
    "outlier": "low",
    "place": "\uc778\ucc9c \uc11c\uad6c \uccad\ub77c2\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "460000",
    "time": "23\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202211/5143386BE9D1A11325E9836331DA71D187B81E13E638C605BAD3A15E20144F0B.jpg?q=82&s=300x300&t=crop",
    "index": "9",
    "link": "https://www.daangn.com//articles/482695438",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 64\uae30\uac00 \uc2a4\uadf8 + \uc560\ud50c\ud39c\uc2ac 2\uc138\ub300",
    "outlier": "normal",
    "place": "\uc778\ucc9c \uc11c\uad6c \uac00\uc815\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "630000",
    "time": "23\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202210/6638A66ADBFF3E43EA50FF0CC8678D4E7A08DFF8587BCF00136FD216661D5710.jpg?q=82&s=300x300&t=crop",
    "index": "12",
    "link": "https://www.daangn.com//articles/467505330",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44+\uc560\ud50c\ud39c\uc2ac(\ucf00\uc774\uc2a4 \ub2e4 \uc788\uc74c)",
    "outlier": "normal",
    "place": "\uc778\ucc9c \uc5f0\uc218\uad6c \uc1a1\ub3c42\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "650000",
    "time": "24\uc2dc\uac04 \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/hoian/category/thumbnails/v2/img_thumb_digital.png",
    "index": "13",
    "link": "https://www.daangn.com//articles/482635152",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 + \uc560\ud50c\ud39c\uc2ac2 \uad6c\ud574\uc694!!",
    "outlier": "normal",
    "place": "\uc778\ucc9c \ub0a8\ub3d9\uad6c \ub17c\ud604\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "550000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/09/16/1663259735368ny3_nPrUR.jpg",
    "index": "31",
    "link": "https://web.joongna.com/product/detail/67659860",
    "name": "\ub77c\ud478 air1 \ubb34\uc120\ucda9\uc804 \ube14\ub8e8\ud22c\uc2a4/2.4g \uc800\uc18c\uc74c \ub9c8\uc6b0\uc2a4",
    "outlier": "normal",
    "place": "\uc774\ubb381\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "38000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/31/951152688/1667189978876000sC0_EMEUs.jpg",
    "index": "30",
    "link": "https://web.joongna.com/product/detail/76320007",
    "name": "(\ub9c8\uc9c0\ub9c9 \uac00\uaca9\ub0b4\ub9bc) \uc544\uc774\ud328\ub4dc \uc5d0\uc5b4 4\uc138\ub300 \uc2a4\uadf8 64gb \ub9ac\ud37c \uc0c8\uc81c\ud488 +\uc560\ucf00\ud50c +\uc560\ud50c\ud39c\uc2ac 2\uc138\ub300 \ud31d\ub2c8\ub2e4",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "710000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/24/1666591895033YcY_ayUut.jpg",
    "index": "29",
    "link": "https://web.joongna.com/product/detail/74994272",
    "name": "(S\uae09)\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uadf8\ub9b0 64G WIFI",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "555000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/31/1667191094748Oav_R8tm9.jpg",
    "index": "28",
    "link": "https://web.joongna.com/product/detail/76323608",
    "name": "\ubc30\ud130\ub9ac99%)\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44\uc138\ub300 \ube14\ub8e8 64\uae30\uac00 \uc640\ud30c",
    "outlier": "normal",
    "place": "\uc7a5\uc8041\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "529000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/31/1667222441717Fyk_5bguW.jpg",
    "index": "27",
    "link": "https://web.joongna.com/product/detail/76414490",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b4 4\uc138\ub300 64\uae30\uac00 \uc640\uc774\ud30c\uc774 \uc2a4\uce74\uc774\ube14\ub8e8",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "600000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/31/1667224923537xCr_IZGkc.jpg",
    "index": "26",
    "link": "https://web.joongna.com/product/detail/76421578",
    "name": "\ubc30\ud130\ub9ac100%)\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 wifi 64gb",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "440000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/11/01/1667266035453OPS_ZWPw5.jpg",
    "index": "24",
    "link": "https://web.joongna.com/product/detail/76485630",
    "name": "\uc5d0\uc5b4\uc870\ub3584 \ubaa8\ud130\uc2a4\ud3ec\uce20(275)\ub2e8\ud488",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "350000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/11/01/1667262835651Opy_5cjS4.jpg",
    "index": "25",
    "link": "https://web.joongna.com/product/detail/76474799",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44 256\uae30\uac00 \uc2e4\ubc84 + \uc560\ud50c\ud39c\uc2ac 2\uc138\ub300",
    "outlier": "high",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "980000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/hoian/category/thumbnails/v2/img_thumb_digital.png",
    "index": "15",
    "link": "https://www.daangn.com//articles/482588932",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uc140\ub8f0\ub7ec",
    "outlier": "normal",
    "place": "\uc778\ucc9c \uc5f0\uc218\uad6c \uc625\ub828\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "550000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202209/1B23DFCA1F779B88FFBE54957E03932C4E1BCC69555FF89FE44507F1014F4C89.jpg?q=82&s=300x300&t=crop",
    "index": "18",
    "link": "https://www.daangn.com//articles/450033084",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44 64G \uc140\ub8f0\ub7ec \uc5d0\ud50c\ucf00\uc5b4\ud50c\ub7ec\uc2a4",
    "outlier": "normal",
    "place": "\uc778\ucc9c \ubbf8\ucd94\ud640\uad6c \uc8fc\uc5485\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "600000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202209/090DE4ED19B5D594D5121B400A728C198CAD59FB784CF14402206D67B25E7A55.jpg?q=82&s=300x300&t=crop",
    "index": "17",
    "link": "https://www.daangn.com//articles/460280726",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b4 4 64\uae30\uac00 gps \ud480\ubc15 S\uae09 \uc560\ucf00\ud50c\u2b55\ufe0f",
    "outlier": "normal",
    "place": "\uc778\ucc9c \ubbf8\ucd94\ud640\uad6c \ub3c4\ud654\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "650000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202211/04AE5DAE8AE1102F618EC60235E7E8C7842D7A3CE8B0CE4FFAB30EA16C7347A5.jpg?q=82&s=300x300&t=crop",
    "index": "16",
    "link": "https://www.daangn.com//articles/482498468",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b4 4 64\uae30\uac00 \uc2a4\uadf8 gps s\uae09 \uc560\ucf00\ud50c \u2b55\ufe0f",
    "outlier": "normal",
    "place": "\uc778\ucc9c \uc5f0\uc218\uad6c \uc1a1\ub3c41\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "670000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://dnvefa72aowie.cloudfront.net/origin/article/202210/E543068DDDB41ABFE5D8AD52579CF2C20000A8CA8630E1DC94FBE593DC430625.jpg?q=82&s=300x300&t=crop",
    "index": "14",
    "link": "https://www.daangn.com//articles/480357028",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \ud30c\uc6b0\uce58 \ud314\uc544\uc694",
    "outlier": "low",
    "place": "\uc778\ucc9c \uc5f0\uc218\uad6c \ub3d9\ucd983\ub3d9",
    "platform": "\ub2f9\uadfc \ub9c8\ucf13",
    "price": "11000",
    "time": "1\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/30/950993058/16671181249370003tM_rwECL.jpeg",
    "index": "38",
    "link": "https://web.joongna.com/product/detail/76173573",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44 64G \uc2a4\ud398\uc774\uc2a4\uadf8\ub808\uc774",
    "outlier": "normal",
    "place": "\uacbd\ud3ec\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "490000",
    "time": "2\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/30/951017206/1667126549869000qxX_mOijL.jpg",
    "index": "37",
    "link": "https://web.joongna.com/product/detail/76195652",
    "name": "\uc77c\uc81c 3/4 \uc5d0\uc5b4\uc784\ud399 \ud31d\ub2c8\ub2e4",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "130000",
    "time": "2\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/30/950884064/1667064366454000yc1_owALm.jpeg",
    "index": "36",
    "link": "https://web.joongna.com/product/detail/76073411",
    "name": "\ub9e5\ubd81\uc5d0\uc5b4m2 \uc2e4\ubc84 3\uc8fc\uac04 4\ud68c \uc0ac\uc6a9",
    "outlier": "high",
    "place": "\uad50\ud604.\uc548\ub9bc\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "1239000",
    "time": "2\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/04/1664870494640xb8_Shbvj.jpg",
    "index": "35",
    "link": "https://web.joongna.com/product/detail/71159236",
    "name": "\uc5d0\uc5b4\ubc29\uc74c\ubcbd 4\uc138\ud2b8 \ud31d\ub2c8\ub2e4",
    "outlier": "high",
    "place": "\ub3d9\ud0c45\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "2000000",
    "time": "2\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/30/1667141958317Akp_WHcmY.jpg",
    "index": "34",
    "link": "https://web.joongna.com/product/detail/76232850",
    "name": "\ub77c\uc774\ub178 \ud54f \uc544\uc774\ud328\ub4dc\uc5d0\uc5b44 \uac15\ud654\uc720\ub9ac \ubcf4\ud638 \ud544\ub984 0.4mm",
    "outlier": "low",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "8000",
    "time": "2\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/26/1666793359949p84_mO72v.jpg",
    "index": "33",
    "link": "https://web.joongna.com/product/detail/75486144",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44 64\uae30\uac00",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "350000",
    "time": "2\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/31/951094462/1667173907459000VTL_JEpvN.jpg",
    "index": "32",
    "link": "https://web.joongna.com/product/detail/76266833",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44 wifi 64GB \uc2a4\ud398\uc774\uc2a4 \uadf8\ub808\uc774",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "550000",
    "time": "2\uc77c \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/193897602_1_1663143865_w292.jpg",
    "index": "16",
    "link": "https://bunjang.co.kr/products/193897602?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\ub9e5\ubd81\uc5d0\uc5b42014 13\uc778\uce58 i5 RAM 4GB SSD 128GB",
    "outlier": "low",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \uacc4\uc591\uad6c \uacc4\uc0b02\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "199000",
    "time": "2\uc77c \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/203974602_1_1667231041_w292.jpg",
    "index": "13",
    "link": "https://bunjang.co.kr/products/203974602?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b4 4 64 wi-fi \uc560\ud50c\ud39c\uc2ac 1\uc138\ub300",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \ub0a8\uad6c \uc6a9\ud6045\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "650000",
    "time": "2\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/02/1664667641712WeD_tymoK.jpg",
    "index": "39",
    "link": "https://web.joongna.com/product/detail/70690089",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "650000",
    "time": "2\uc77c \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/203975368_1_1667267707_w292.jpg",
    "index": "15",
    "link": "https://bunjang.co.kr/products/203975368?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44\uc138\ub300 64gb \uc640\uc774\ud30c\uc774 \uc2a4\uce74\uc774\ube14\ub8e8 + \uc560\ud50c\ud39c\uc2ac2\uc138\ub300",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \ubd80\ud3c9\uad6c \ubd80\ud3c94\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "690000",
    "time": "2\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/28/1666921663812jak_OPXy1.jpg",
    "index": "47",
    "link": "https://web.joongna.com/product/detail/75752251",
    "name": "(\uae09\ucc98)\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \uc140\ub8f0\ub7ec 64\uae30\uac00",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "500000",
    "time": "3\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/24/1666583897046AhS_k08CW.jpg",
    "index": "43",
    "link": "https://web.joongna.com/product/detail/74967718",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b4 4 256",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "250000",
    "time": "3\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/08/30/16617924920057lG_hg14B.jpg",
    "index": "44",
    "link": "https://web.joongna.com/product/detail/64720226",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 256G",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "650000",
    "time": "3\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/29/950784187/1667023234402000mNX_MmGUi.jpg",
    "index": "46",
    "link": "https://web.joongna.com/product/detail/75981149",
    "name": "\uc0e4\uc624\ubbf8 \ubbf8\uc9c0\uc544 S1 \uc5d0\uc5b4\ud38c\ud504 \ubbf8\uac1c\ubd09 \ud0dd\ud3ec 4\ub9cc\uc6d0",
    "outlier": "normal",
    "place": "\uc5f0\ubb34\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "40000",
    "time": "3\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/06/20/924415625/1655696897784000hdq_pgjLB.JPG",
    "index": "42",
    "link": "https://web.joongna.com/product/detail/51627783",
    "name": "20\ub9cc. \ub098\uc774\ud0a4 \uc5d0\uc5b4\uc870\ub3584 \ub808\ud2b8\ub85c",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "200000",
    "time": "3\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/26/1666765247341RV8_c095S.jpg",
    "index": "45",
    "link": "https://web.joongna.com/product/detail/75406545",
    "name": "\uacc4\uc591\uc5d0\uc5b4\ud0c0\uce74(ct64)4\ub9cc\uc6d0",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "40000",
    "time": "3\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/30/950929202/1667096383933000NrU_DHlza.JPG",
    "index": "40",
    "link": "https://web.joongna.com/product/detail/76114363",
    "name": "\uc0bd\ub2c8\ub2e4 \ud1a0\uc774\uc2a4\ud0c0 m4a1 fv 20\uc138\uc6a9 \uc5d0\uc5b4\ucf55\ud0b9\uac74 \uc0bd\ub2c8\ub2e4",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "49000",
    "time": "3\uc77c \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/201598882_1_1666014070_w292.jpg",
    "index": "14",
    "link": "https://bunjang.co.kr/products/201598882?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b4 4\uc138\ub300 + \ud39c\uc2ac 2\uc138\ub300 \uc815\ud488 \ud310\ub9e4\ud574\uc694 \uc0c1\ud0dc \uc88b\uc544\uc694",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \ub0a8\ub3d9\uad6c \ub9cc\uc2184\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "680000",
    "time": "3\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/18/1666020342961Hgi_3BQmM.jpg",
    "index": "41",
    "link": "https://web.joongna.com/product/detail/73379396",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 64G wifi \uc560\ud50c\ucf00\uc5b4",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "600000",
    "time": "3\uc77c \uc804"
  },
  {
    "img_link": "https://cafeptthumb-phinf.pstatic.net/MjAyMjA2MDRfMTcz/MDAxNjU0MzQ5MTMwNDk5.QBUEPmx-fSw_q6wrVxs_b7Hjt1U-gMEJ67aRtyDBROcg.E-CiCY2huWMJzqcJAjJfWQd-U3KtUE9LCqZENBwOJ4og.JPEG/IMG_8766.jpg?type=w800",
    "index": "48",
    "link": "https://web.joongna.com/product/detail/49688030",
    "name": "\ub098\uc774\ud0a4 \uc5d0\uc5b4\uc870\ub3584 \ub808\ud2b8\ub85c \uc653\ub354",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "200000",
    "time": "4\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/28/1666960906431DeR_QsjOV.jpg",
    "index": "49",
    "link": "https://web.joongna.com/product/detail/75864047",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44+\uc560\ud50c\ud39c\uc2ac+\uc545\uc138\uc0ac\ub9ac \ud31d\ub2c8\ub2e4",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "700000",
    "time": "4\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/02/16646697859654j2_Ln9Fv.jpg",
    "index": "51",
    "link": "https://web.joongna.com/product/detail/70694558",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 256 \uc140\ub8f0\ub7ec",
    "outlier": "normal",
    "place": "\uc640\ubd80\uc74d",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "710000",
    "time": "4\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/05/12/1652349145086LUu_SF3lX.jpg",
    "index": "52",
    "link": "https://web.joongna.com/product/detail/44349519",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44\uc138\ub300 5\uc138\ub300 11\uc778\uce58 \ucf00\uc774\uc2a4 \ubb34\ubc30",
    "outlier": "low",
    "place": "\uc8fc\uc548\uc5ed",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "10900",
    "time": "4\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/28/1666960090298WUC_628gU.jpg",
    "index": "50",
    "link": "https://web.joongna.com/product/detail/75861945",
    "name": "\ub9e5\ubd81\uc5d0\uc5b4 2015 11\uc778\uce58 \ucda9\uc804\uae30 i5/4G/256G",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "300000",
    "time": "4\uc77c \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/203169709_1_1666977377_w292.jpg",
    "index": "21",
    "link": "https://bunjang.co.kr/products/203169709?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44\uc138\ub300 64\uae30\uac00 \uc640\uc774\ud30c\uc774",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \uc11c\uad6c \uccad\ub77c3\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "370000",
    "time": "5\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/06/1665059627052zcd_PESo7.jpg",
    "index": "53",
    "link": "https://web.joongna.com/product/detail/71603269",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 64G \uc2a4\uce74\uc774\ube14\ub8e8 Wifi",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "630000",
    "time": "5\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/28/1666884950516t3D_FXkGr.jpg",
    "index": "54",
    "link": "https://web.joongna.com/product/detail/75696784",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44",
    "outlier": "high",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "5000000",
    "time": "5\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/27/1666867204509WKV_w1Dbd.jpg",
    "index": "55",
    "link": "https://web.joongna.com/product/detail/75649721",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 64 \uc2a4\uadf8 wifi \ubc15\uc2a4O \uc560\ucf00\ud50cO",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "600000",
    "time": "5\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/27/950423121/1666866464458002JVT_1rkUs.jpg",
    "index": "56",
    "link": "https://web.joongna.com/product/detail/75647747",
    "name": "JMW \uc5d0\uc5b4\ube44 MC4A01A \ud5e4\uc5b4\ub4dc\ub77c\uc774\uae30 \ud56d\uacf5\ubaa8\ud130 \ud0dd\ud3ec",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "65000",
    "time": "5\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/27/950421857/1666865971828000BW4_r20Dg.jpg",
    "index": "57",
    "link": "https://web.joongna.com/product/detail/75646463",
    "name": "(789) A+\uae09 \uc544\uc774\ud328\ub4dc\uc5d0\uc5b44\uc138\ub300 64G \ub85c\uc988\uace8\ub4dc",
    "outlier": "normal",
    "place": "\ubd84\ub2f9\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "570000",
    "time": "5\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/26/1666762746157CR7_552qK.jpg",
    "index": "64",
    "link": "https://web.joongna.com/product/detail/75399015",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44 wife 64GB \uc2e4\ubc84\uc0c9\uc0c1",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "600000",
    "time": "6\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/06/06/1654454432094Yw1_Szqos.jpg",
    "index": "63",
    "link": "https://web.joongna.com/product/detail/48902218",
    "name": "A1466\ub9e5\ubd81\uc5d0\uc5b47S\uae0913\uc778\uce58\ucf54\ub4dci5\uba544\uae30\uac00\uc800128\uae30\uac00",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "370000",
    "time": "6\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/26/950209579/1666780808212000VHT_hz72v.jpg",
    "index": "62",
    "link": "https://web.joongna.com/product/detail/75451009",
    "name": "\uc5d0\uc5b4\uc18c\ud504\ud2b8\uac74 \ud310\ub9e4\ud569\ub2c8\ub2e4(50\uc8fc\ub144 AKS 74U, LH9 MK2, M4 CQB)",
    "outlier": "low",
    "place": "\ub0a8\ucc9c1\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "20000",
    "time": "6\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/26/166675886451750m_s48S9.jpg",
    "index": "65",
    "link": "https://web.joongna.com/product/detail/75386553",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44 65\uae30\uac00 \uc560\ud50c\ud39c\uc2ac\ud3ec\ud568",
    "outlier": "normal",
    "place": "\uc11c\uc6d0\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "550000",
    "time": "6\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/03/03/1646310451587yNc_Bwcs0.jpg",
    "index": "61",
    "link": "https://web.joongna.com/product/detail/29273591",
    "name": "\ud2b8\ub799\uc2a41.4\ud130\ubcf4 \uc5d0\uc5b4\ub9e4\uc2a4 \ud50c\ub85c\uc5b4\uc13c\uc11c",
    "outlier": "normal",
    "place": "\ubd80\ud3c96\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "100000",
    "time": "6\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/19/1666181363166bDd_TYRAz.jpg",
    "index": "59",
    "link": "https://web.joongna.com/product/detail/74093015",
    "name": "\uc790\uc774\ub85c\ucf65 g\uc5d0\uc5b4\ud50c\ub7ec\uc2a4 10.4 \uae09\ucc98!!",
    "outlier": "normal",
    "place": "\uc624\ub0a8\uc74d",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "145000",
    "time": "6\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/27/1666829642388PO4_wFnQd.jpg",
    "index": "58",
    "link": "https://web.joongna.com/product/detail/75534704",
    "name": "\uc544\uc774\ud328\ub4dc air4 +\uc560\ud50c\ud39c\uc2ac 2\uc138\ub300",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "600000",
    "time": "6\uc77c \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/193001880_1_1662026372_w292.jpg",
    "index": "17",
    "link": "https://bunjang.co.kr/products/193001880?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b43 \uc2e4\ubc84 64\uae30\uac00+\uc560\ud50c\ud39c\uc2ac \ud314\uc544\uc694",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \uc5f0\uc218\uad6c \uc1a1\ub3c43\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "350000",
    "time": "6\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/26/1666722073094rDn_Qwgg9.jpg",
    "index": "60",
    "link": "https://web.joongna.com/product/detail/75305517",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44 256\uae30\uac00 \uc2a4\uadf8",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "600000",
    "time": "6\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/25/950033154/1666709430098000beO_yni1n.jpg",
    "index": "69",
    "link": "https://web.joongna.com/product/detail/75288655",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 64GB wifi \uc2a4\uce74\uc774\ube14\ub8e8 \uc560\ucf00\ud50c ~\u201823.1.8",
    "outlier": "normal",
    "place": "\uc5f0\uc2181\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "600000",
    "time": "7\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/24/16666232041065KN_sApML.jpg",
    "index": "68",
    "link": "https://web.joongna.com/product/detail/75084018",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44+\uc560\ud50c\ud39c\uc2ac2\uc138\ub300",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "770000",
    "time": "7\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/25/950020098/1666704534855000ohq_9RVyE.jpg",
    "index": "70",
    "link": "https://web.joongna.com/product/detail/75276411",
    "name": "\ud3ec\ub4dc \ubaac\ub370\uc624 4\uc138\ub300 \ud2f0\ud0c0\ub284 \ubaa8\ub378 (\uc624\ub514\uc624 \uacf5\uc870\uae30 \uc5d0\uc5b4\ucee8 \ubc84\ud2bc)",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "150000",
    "time": "7\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/26/950093231/1666746761350000bZI_btuu9.jpg",
    "index": "66",
    "link": "https://web.joongna.com/product/detail/75344401",
    "name": "\ub098\uc774\ud0a4 \uc5d0\uc5b4\uc870\ub3584 \ubc00\ub9ac\ud130\ub9ac \ube14\ub799",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "90000",
    "time": "7\uc77c \uc804"
  },
  {
    "img_link": "https://media.bunjang.co.kr/product/203536299_1_1666846729_w292.jpg",
    "index": "20",
    "link": "https://bunjang.co.kr/products/203536299?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    "name": "(\ubbf8\uac1c\ubd09) \uc544\uc774\ud328\ub4dc \uc5d0\uc5b45 wifi 64GB \uc2a4\ud398\uc774\uc2a4\uadf8\ub808\uc774,\ube14\ub8e8",
    "outlier": "normal",
    "place": "\uc778\ucc9c\uad11\uc5ed\uc2dc \uc11c\uad6c \uac00\uc88c4\ub3d9",
    "platform": "\ubc88\uac1c \uc7a5\ud130",
    "price": "780000",
    "time": "7\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/09/30/1664522530290Mzy_nHxBb.jpg",
    "index": "67",
    "link": "https://web.joongna.com/product/detail/70407464",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 \ube14\ub8e8",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "500000",
    "time": "7\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/23/166650658760950P_6WdEY.jpg",
    "index": "71",
    "link": "https://web.joongna.com/product/detail/74797117",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44\uc138\ub300 \uc561\uc815\ud30c\uc190 \ubd80\ud488\uc6a9",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "149000",
    "time": "8\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/04/23/1650693771801xvh_7x47v.jpg",
    "index": "72",
    "link": "https://web.joongna.com/product/detail/40670846",
    "name": "\uc5d0\uc5b4\ud3ec\uc2a4 \uce74\ub2c8\ubc1c 4\uc138\ub300 \ucc28\ubc15 \ub9e4\ud2b8 \ud31d\ub2c8\ub2e4~",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "270000",
    "time": "8\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/25/1666661172098U83_guvrv.jpg",
    "index": "73",
    "link": "https://web.joongna.com/product/detail/75141603",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44, \uc560\ud50c\ud39c\uc2ac 2\uc138\ub300",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "750000",
    "time": "8\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/23/1666502856790FDx_ZdLs4.jpg",
    "index": "79",
    "link": "https://web.joongna.com/product/detail/74786298",
    "name": "\uc544\uc774\ud328\ub4dc\uc5d0\uc5b44",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "600000",
    "time": "9\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/06/07/1654528745488XQ2_QCJM0.jpg",
    "index": "74",
    "link": "https://web.joongna.com/product/detail/49069863",
    "name": "(\ubc18\uac12\ud0dd\ubc30\ubb34\ub8cc\ubc30\uc1a1)\uc548\ub2e4\ub974 \uc5d0\uc5b4\ucf54\ud2bc \uc2ac\ub9ac\ube0c\ub9ac\uc2a4 \ube14\ub799 4",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "35000",
    "time": "9\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/cafe-article-data/live/2022/10/23/949575739/1666530883109000XiD_wX4CE.jpg",
    "index": "75",
    "link": "https://web.joongna.com/product/detail/74866082",
    "name": "\ub098\uc774\ud0a4 \uc5d0\uc5b4\uc870\ub3584 \ubc00\ub9ac\ud130\ub9ac \ube14\ub799",
    "outlier": "normal",
    "place": "None",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "80000",
    "time": "9\uc77c \uc804"
  },
  {
    "img_link": "https://img2.joongna.com/media/original/2022/10/23/1666528485387w6a_lyh6C.jpg",
    "index": "76",
    "link": "https://web.joongna.com/product/detail/74859140",
    "name": "\uc544\uc774\ud328\ub4dc \uc5d0\uc5b44 64G wifi \uc2a4\uce74\uc774\ube14\ub8e8+ \uc560\ud50c\ud39c\uc2ac",
    "outlier": "normal",
    "place": "\ucc3d\ub989\ub3d9",
    "platform": "\uc911\uace0 \ub098\ub77c",
    "price": "850000",
    "time": "9\uc77c \uc804"
  },
]

function ProductPage() {
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [copyItems, setCopyItems] = useState([]);

  //버튼 온클릭
  //categoly = ["디지털기기", "가구", "유아용품", "스포츠/레저", "의류", "도서/티켓/문구", "악기", "반려동물", "미용", "콘솔게임"]
  const digitalDevices = () => { startPy("디지털기기") }
  const furniture = () => { startPy("가구") }
  const interior = () => { startPy("인테리어") }
  const baby = () => { startPy("유아용품") }
  const sports = () => { startPy("스포츠/레저") }
  const clothing = () => { startPy("의류") }
  const book = () => { startPy("도서") }
  const outdoor = () => { startPy("아웃도어") }
  const supplies = () => { startPy("용품/공구") }
  const beauty = () => { startPy("미용") }
  const switches = () => { startPy("스위치") } 
  const performance = () => { startPy("공연") }

  //검색
  const startPy = async (keyword) => {
    setLoading(true)
    try {
      await axios('http://54.174.0.44:5000/search', {
        method: "get",
        params: {
          value: keyword
        }
      })
        .then(res => {
          setItems(res.data);
          setCopyItems(res.data);
        })
        .catch(function(error){
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const onSearch = (value) => { 
    startPy(value) 
  }

  //Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //필터
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    filterItems(value);
  };

  
  //필터2
  const handleChange2 = (value) => {
    console.log(`selected ${value}`);
    filterAverage(value);
  };

  //평균가, 가격순, 시세이상, 시세이하
  const filterAverage = (i) => {
    let temp = items;
    if (i === "전체") {
      setCopyItems(copyItems);
    }
    else if (i === "normal") {
      
      setCopyItems(temp.filter((i) =>
        i.outlier.includes("normal")
      ))
    }

    else if (i === "high") {
      
      setCopyItems(temp.filter((i) =>
        i.outlier.includes("high")
      ))
    }

    else if (i === "low") {
      
      setCopyItems(temp.filter((i) =>
        i.outlier.includes("low")
      ))
    }
  }
  // , 분리
  const filter2 = (i) => {
    // var clear = copyItems;
    // for()
    // console.log('clear')
    // console.log(clear)
  }

  
  const desc = () =>{
    var descPrice = copyItems;
    var priceCompare = (key) => (a, b) => {
      return a[key] > b[key] 
                        ? 1 
                        : a[key] <= b[key] 
                                ? -1 
                                : 0;
    };
    console.log(descPrice[0].price);
    descPrice.map((a, i) => {
      descPrice.sort(priceCompare(descPrice.price))
      // console.log(descPrice.sort(priceCompare(Number(descPrice[i].price))));
      console.log(descPrice);
    })
  }
  const filterItems = (i) => {

    let temp = items;
    if (items) {
      if (i === "전체") {
        console.log(temp.price)
        filter2(i)
      }
      else if (i === "당근") {
        setCopyItems(temp.filter((i) =>
          i.platform.includes("당근")
        ))
      }
      else if (i === "번개") {
        
        setCopyItems(temp.filter((i) =>
          i.platform.includes("번개")
        ))
      }
      else if (i === "중고") {
       
        setCopyItems(temp.filter((i) =>
          i.platform.includes("중고")
        ))
      }
    }
  }
  return (
    <Container>
      <Categori>

        {/* <CategoriItem>
          <h3>
            <QuestionCircleOutlined style={{ fontSize: '20px', color: '#08c', marginRight:'5px'}} onClick={showModal} />
            추천 검색 카테고리
          </h3>
        </CategoriItem> */}
        <CategoriDivider>
            <MarketInfo>
                <MarketIntroduce>
                   지역 상품명으로<br/>제품을 검색하세요!
                </MarketIntroduce>
            </MarketInfo>
            <ModalMark>
              <QuestionCircleOutlined style={{ fontSize: '25px', color: '#08c', marginRight:'5px'}} onClick={showModal} />
            </ModalMark>
            <Modal title="정보 및 주의사항" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style={{marginTop:"5%"}}>
              <p style={{ marginTop: '1%' }}> 지역 상품명으로 찾으시는 중고 상품을 검색해보세요! </p>
              <br/>
              <p>당근마켓, 번개장터, 중고나라 3개의 플랫폼이 모두 동시에 검색됩니다.</p>
              <br/>
              <p>가격이 평균보다 너무 높거나 낮다면 주의하세요.</p>
              <br/>
              <p>검색까지 <span style={{display:"inline", color:'red'}}>약 20초의 </span>시간이 소요되며 페이지를 이동해서는 안 됩니다.</p>
            </Modal >

            <CategoriItem>
              {/* <InputWrapper placeholder="지역 상품명으로 검색하세요!" allowClear onSearch={onSearch} style={{width:"100%"}}/> */}
              {/* <CategoriSearch> */}
              
              <Search className={antd.ho} id={antd.placeholder} placeholder="지역 상품명으로 검색하세요!" onSearch={onSearch} />
              {/* </CategoriSearch> */}
              <CategoriButton>
                <Button id={antd.button} onClick={sports} type="ghost">#스포츠/레저</Button>
                <Button id={antd.button} onClick={switches} type="ghost">#스위치</Button>
                <Button id={antd.button} onClick={clothing} type="ghost">#의류</Button>
                <Button id={antd.button} onClick={beauty} type="ghost">#미용</Button>
                <Button id={antd.button} onClick={digitalDevices} type="ghost">#디지털기기</Button>
                <Button id={antd.button} onClick={furniture} type="ghost">#가구</Button>
              {/* borderWidth는 지우세요. */}
              {/* <CategoriItem style={{borderWidth:"0px"}}> */}
                <Button id={antd.button} onClick={baby} type="ghost">#유아용품</Button>
                <Button id={antd.button} onClick={performance} type="ghost">#공연</Button>
                <Button id={antd.button} onClick={book} type="ghost">#도서</Button>
                <Button id={antd.button} onClick={outdoor} type="ghost">#아웃도어</Button>
                <Button id={antd.button} onClick={interior} type="ghost">#인테리어</Button>
                <Button id={antd.button} onClick={supplies} type="ghost">#용품/공구</Button>
              </CategoriButton>
              {/* </CategoriItem> */}
              {/* borderWidth는 지우세요. */}
              <CategoriItem style={{padding:"0"}}>
                <Select
                  defaultValue="전체"
                  onChange={handleChange}
                  // className={styles.customSelect}
                >
                  <Option value="전체">전체</Option>
                  <Option value="당근">당근마켓</Option>
                  <Option value="번개">번개장터</Option>
                  <Option value="중고">중고나라</Option>
                </Select>
                
                {/* 여기는 데이터 가져올때 손좀 봐야 합니다. */}
                <Select
                  defaultValue="전체"
                  // style={{
                  //   width: 285,
                // }}
                onChange={handleChange2}
              >
                  <Option value="전체">최신순</Option>
                  <Option value="normal">평균가</Option>
                  <Option value="low">시세 이하</Option>
                  <Option value="high">시세 이상</Option>
                </Select>
              </CategoriItem>
              
            </CategoriItem>
            
        </CategoriDivider>
       
      </Categori>
      
      {/* <TextBox>
        <Search placeholder="지역 상품명으로 검색하세요! " onSearch={onSearch} style={{ width: 600, height: 60, marginTop:"25px" }} />
        <Select
          defaultValue="전체 보기"
          style={{
            width: 120,
            height:35,
            marginLeft:15,
          }}
          onChange={handleChange}
        >
          <Option value="전체">전체 보기</Option>
          <Option value="당근">당근마켓</Option>
          <Option value="번개">번개장터</Option>
          <Option value="중고">중고나라</Option>
        </Select>
      </TextBox> */}

      <div>
        {loading &&
          <CenterDiv>
            <CircleLoading
              aria-describedby="example"
              aria-labelledby="example"
              duration={1300}
              scale={1}
              zIndex={0}
              style={{marginTop:"100px"}}/>
            <h3 style={{marginTop:"50px", marginBottom:"100px"}}>검색 중입니다. 잠시만 기다려주세요.</h3>
          </CenterDiv>}
      </div>

      <div style={{ width: '100%', maxWidth: '1389px', marginTop: 20 }}>
        <h3 style={{ marginLeft:7, fontWeight: "800", fontSize: "20px", whiteSpace: "nowrap", marginBottom: "3%", fontFamily: "pretendard", marginRight: "auto" }}>총 {copyItems.length}개의 상품이 있습니다.</h3>
      </div>

      {items &&
        <CardContainer>
          
          {
            copyItems.map((a, i) => {
              return <ItemCard items={copyItems[i]} />
            })
          }
        </CardContainer>}

    </Container>
  );
        }


export default ProductPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 100%;
  /* max-width: 1920px; */
  /* padding-top: 100px; */
  /* background-color: #FFFFFF; */
`

const CardContainer = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1389px;
  /* margin-top: 65px; */
  row-gap: 30px;
  background-color: #FFFFFF;
  /* margin-bottom: 30px; */
  /* border: 2px solid orange; */

  @media screen and (max-width: 1340px) {
    justify-content: space-around;
  }
`

// const TextBox = styled.div`
//   display:flex;
//   align-items:center;
//   margin-top:30px;
//   margin-bottom:-30px;
// `

const Categori = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 497px;
  background-color: #F5F5F5;
  /* border: 2px solid black; */
  border-radius: 10px;
  margin-top: 100px;
 

  @media screen and (min-width: 1161px) and (max-width: 1360px) {
    height: 447.3px;
    margin-bottom: 58.5px;
  }
  @media screen and (min-width: 851px) and (max-width: 1160px) {
    height: 423.8px;
    margin-bottom: 52.25px;
    /* margin-top: 0; */
  }
  @media screen and (min-width: 576px) and (max-width: 850px) {
    height: 402.57px;
    margin-bottom: 45px;
    /* margin-top: 0; */
  }

  @media screen and (max-width: 575px) {
    height: 362.313px;
    margin-bottom: 34.6px;
    /* margin-top: 0; */
  }
`

const CategoriDivider = styled.div`
  display: flex;
  flex-direction: row;
  width: 1389px;
  max-width: 1389px;
  height: 100%;
  align-items: center;
  /* border: 2px solid blue; */
  
  @media screen and (min-width: 850px) and (max-width: 1360px) {
    padding: 0 3%;
  }

`
const MarketInfo = styled.div`
  display: flex;
   @media screen and (min-width: 1360px) {
      width: 23.29682997118156%;
      margin-bottom: 220px;
   }
   @media screen and (min-width: 850px) and (max-width: 1360px) {
      width: 23%;
      padding-left: 1%;
      margin-bottom: 180px;
   }
   @media screen and (max-width: 850px) {
      display: none;
   }
`
const ModalMark = styled.div`
   @media screen and (min-width: 1360px) {
      width: 3%;
      margin-bottom: 15%;
   }
   @media screen and (min-width: 850px) and (max-width: 1360px) {
      width: 3%;
      margin-left: 3%;
      margin-bottom: 170px;
   }
   @media screen and (min-width: 586px) and (max-width: 850px) {
      width: 3%;
      margin-left: 3%;
      margin-bottom: 190px;
   }
   @media screen and (max-width: 585px) {
      width: 3%;
      margin-left: 3%;
      margin-bottom: 220px;
   }
`
const MarketIntroduce = styled.span`
  color: #191919;
  @media screen and (min-width: 1360px) {
    /* font-size: 24px; */
    font: normal normal 24px Pretendard;
  }
  @media screen and (min-width: 850px) and (max-width: 1360px) {
    /* font-size: 18px;
    font-weight: 550; */
    font: normal normal 18px Pretendard;
  }
`
const CategoriItem = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  width: 73.70317002881844%;
  /* border: 2px solid green; */

  @media screen and (max-width: 850px) {
    width: 100%;
    padding: 0 3%;
  }

  @media screen and (max-width: 585px) {
    width: 100%;
    padding: 0 5%;
  }
`
// const CategoriSearch = styled.div`
//   width: 100%;
//   height: 71px;
//   /* border: 2px solid blue; */
// `
const CategoriButton = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  width: 100%;
  max-width: 60.06549364613881%;
  /* max-width: 100%; */
  gap : 10px;
  margin: 36px 0;
  /* border: 2px solid yellow; */

  @media screen and (min-width:850px) and (max-width: 1360px) {
    width: 540px;
    min-width: 540px;
    max-width: 540px;
    margin: 30px 0;
  }

  @media screen and (min-width: 586px) and (max-width: 850px) {
    width: 540px;
    min-width: 540px;
    max-width: 540px;
  }

  @media screen and (max-width: 585px) {
    width: 370px;
    min-width: 370px;
    max-width: 370px;
  }
`

const CenterDiv = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`