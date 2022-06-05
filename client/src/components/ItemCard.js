import styled from 'styled-components';
import { Card } from 'antd';


import { FormOutlined, EnvironmentOutlined, PicCenterOutlined } from '@ant-design/icons';

const { Meta } = Card;

function ItemCard(props) {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={
                <ImageCard
                    style={{
                        backgroundImage: `url(${props.items.imgSrc})`,
                        backgroundPosition: 'center',
                        backgroundsize: 'cover',
                    }}>
                    <InnerBox>
                        <PlatformImg src={props.items.platform} alt="image0" />
                    </InnerBox>
                </ImageCard>
            }>

            <Meta>
                style={{ height: "150px" }}
            </Meta>

            <TextBox>
                <h2>{props.items.price}</h2>
                <p><FormOutlined />  {props.items.title}</p>
                <p><EnvironmentOutlined />  {props.items.address}</p>
                <h4>{props.items.time}</h4>
            </TextBox>
        </Card>
    );
}

export default ItemCard

const ImageCard = styled.div`
    height: 180px;
    width: 240px;
`;

const InnerBox = styled.div`
    width: 40px;
    height: 40px;
    border-radius:4px;
`;

const PlatformImg = styled.img`
    margin-top: 5px;
    margin-left: 5px;
    width: 40px;
    height: 40px;
`;

const TextBox = styled.div`
    text-align : center;
`;