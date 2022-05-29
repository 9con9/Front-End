import styled from 'styled-components';
import { Card } from 'antd';
import 'antd/dist/antd.css';

import { FormOutlined, EnvironmentOutlined, CommentOutlined } from '@ant-design/icons';

const { Meta } = Card;

function ItemCard(props) {

    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={
                <a href={props.items.link} target='blank'>
                    <ImageCard
                        style={{
                            backgroundImage: `url(${props.items.img_link})`,
                            backgroundPosition: 'center',
                            backgroundsize: 'cover',
                        }}>
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
                <h3 style={{ marginBottom: -5 }}> <CommentOutlined /> {props.items.plafform}</h3>
                <h2>{props.items.price}</h2>
                <p><FormOutlined />  {props.items.name}</p>
                <p><EnvironmentOutlined />  {props.items.address}</p>
                <h4>{props.items.upload_time}</h4>
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

const PlafformImg = styled.img`
    margin-top: 5px;
    margin-left: 5px;
    width: 40px;
    height: 40px;
`;

const TextBox = styled.div`
    text-align : center;
`;