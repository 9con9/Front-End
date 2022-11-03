import styled from 'styled-components';
import antd from './AntDesign.module.css';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { FormOutlined, EnvironmentOutlined, CommentOutlined, CheckOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { transparent } from 'loplat-ui';
const { Meta } = Card;

function ItemCard(props) {
    
    return (
        <Card
            id={antd.card}
            hoverable
            cover={
                <a href={props.items.link} target='blank'>
                    <ImageCard
                        style={{
                            backgroundImage: `url(${props.items.img_link})`,
                            backgroundPosition: 'center',
                            backgroundsize: 'cover',
                        }}>
                        <OutlierBox>
                            {props.items.outlier === 'high' && <High>평균보다 비싸요</High>}
                            {props.items.outlier === 'normal' && <Normal>평균가에요!</Normal>}
                            {props.items.outlier === 'low' && <Low>평균보다 싸요</Low>}
                        </OutlierBox>
                        {/* <InnerBox>
                        <PlafformImg src= {`./img/${props.items.plafform}.png`} alt="image0" />
                    </InnerBox> */}
                    </ImageCard>
                </a>
            }>
            <Meta>
                style={{ height: "150px" }}
            </Meta>

            <TextBox>
                {/* <h3 style={{ marginBottom: -5}}> <CommentOutlined /> {props.items.platform}</h3> */}
                <TextPrice>{props.items.price}원</TextPrice>
                {/* <FormOutlined /> */}
                <TextTitle>{props.items.name}</TextTitle>
                {/* <EnvironmentOutlined /> */}
                <TextInfo>{props.items.place} 
                {
                    props.items.place.length !== 0
                    ? <span style={{display:"inline"}}>&nbsp; | &nbsp;</span>
                    : null
                }
                {props.items.time}
                </TextInfo>
                {/* <h4>{props.items.time}</h4> */}
            </TextBox>
        </Card>
    );
}

export default ItemCard

const ImageCard = styled.div`
    width: 330px;
    height: 294px;
    border-radius: 15px;
    background-color: transparent;
    /* border: 2px solid blue; */
    @media screen and (max-width: 850px) {
        width: 174px;
        height: 155px;
    }
`;

// const InnerBox = styled.div`
//     width: 40px;
//     height: 40px;
//     border-radius:4px;
// `;

// const PlafformImg = styled.img`
//     margin-top: 5px;
//     margin-left: 5px;
//     width: 40px;
//     height: 40px;
// `;

const TextBox = styled.div`
    @media screen and (min-width: 850px) {
        text-align : left;
        margin: 0 -24px;
        /* border: 2px solid yellow; */
    }
    @media screen and (max-width: 850px) {
        width: 174px;
        margin: 0 -24px;
        /* border: 2px solid yellow; */
    }
`;

const OutlierBox = styled.div`
    padding: 2px 0 0 2px;
`

const High = styled.h4`
    @media screen and (min-width: 851px) {
        background: #FFFFFF;
        border: 2px solid #FF4B4B;
        border-radius: 19px;
        width: 138px;
        height: 37px;
        font: normal normal 16px pretendard;
        color: #FF5050;
        margin-top: 5.15151515%; 
        margin-left: 5.15151515%;
        text-align: center;
        padding: 7px 14px;
        opacity: 0.87;    
    }
    @media screen and (max-width: 850px) {
        background: #FFFFFF;
        border: 2px solid #FF4B4B;
        border-radius: 19px;
        width: 89.7px;
        height: 19px;
        font: normal normal 9px pretendard;
        color: #FF5050;
        margin-top: 5.15151515%; 
        margin-left: 5.15151515%;
        text-align: center;
        padding-top: 1.5px;
        opacity: 0.87;
    }
`

const Normal = styled.h4`
    @media screen and (min-width: 851px) {
        background: #FFFFFF;
        border: 2px solid #38CC44;
        border-radius: 19px;
        width: 107px;
        height: 37px;
        font: normal normal 16px pretendard;
        color: #1FD32A;
        margin-top: 5.15151515%; 
        margin-left: 5.15151515%;
        text-align: center;
        padding: 7px 14px;
        opacity: 0.87;
    }

    @media screen and (max-width: 850px) {
        background: #FFFFFF;
        border: 2px solid #38CC44;
        border-radius: 19px;
        width: 69.55px;
        height: 19px;
        font: normal normal 9px pretendard;
        color: #1FD32A;
        margin-top: 5.15151515%; 
        margin-left: 5.15151515%;
        text-align: center;
        padding-top: 1.5px;
        opacity: 0.87;
    }
`

const Low = styled.h4`
    @media screen and (min-width: 851px) {
        background: #FFFFFF;
        border: 2px solid #FF9133;
        border-radius: 19px;
        width: 123px;
        height: 37px;
        font: normal normal 16px pretendard;
        color: #FF9133;
        margin-top: 5.15151515%; 
        margin-left: 5.15151515%;
        text-align: center;
        padding: 7px 14px;
        opacity: 0.87;
    }
    @media screen and (max-width: 850px) {
        background: #FFFFFF;
        border: 2px solid #FF9133;
        border-radius: 19px;
        width: 80px;
        height: 19px;
        font: normal normal 9px pretendard;
        color: #FF9133;
        margin-top: 5.15151515%; 
        margin-left: 5.15151515%;
        text-align: center;
        padding-top: 1.5px;
        opacity: 0.87;
    }
`

const TextPrice = styled.p`
    @media screen and (min-width: 850px) {
        font: normal normal 26px pretendard;
        font-weight: bold;
        margin-bottom: 2px;
        color: #191919;
    }
    @media screen and (max-width: 850px) {
        font: normal normal 16px pretendard;
        font-weight: bold;
        margin-bottom: 2px;
        color: #191919;
    }
`

const TextTitle = styled.p`
    @media screen and (min-width: 850px) {
        font: normal normal 20px pretendard;
        letter-spacing: -0.5px;
        color: #191919;
        margin-bottom: 11px;
    }
    @media screen and (max-width: 850px) {
        font: normal normal 12px pretendard;
        letter-spacing: -0.5px;
        color: #191919;
        margin-bottom: 6px;
    }
`

const TextInfo = styled.p`
    @media screen and (min-width: 850px) {
        font: normal normal 16px pretendard;
        letter-spacing: -0.4px;
        color: #767676;
    }
    @media screen and (max-width: 850px) {
        font: normal normal 10px pretendard;
        letter-spacing: -0.4px;
        color: #767676;
    }
`