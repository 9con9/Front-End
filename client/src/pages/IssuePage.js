import { RightCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';
import PostMain from './post/PostMain';

function IssuePage() {
    return (
        <Container>
            <div className='flex-item1' style={{width: "2000px"}}>
                <PostMain />
            </div>
            <div className='flex-item2'>
                <a href="https://thecheat.co.kr/rb/?mod=_search" target="_blank">
                    <img src={process.env.PUBLIC_URL + '/img/TheCheat.jpg'} onClick="https://thecheat.co.kr/rb/?mod=_search" alt=""
                    style={{width:"300px", marginTop:50,  paddingRight:50, verticalAlign:"center"}}/> 
                </a>
            </div>
        </Container>
    );
}

export default IssuePage

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  float: left;
  justify-content: center;
  vertical-align: center;
  margin-top:100px;
`;