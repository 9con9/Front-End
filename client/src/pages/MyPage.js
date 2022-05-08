import styled from 'styled-components';
function MyPage() {
    return (
        <Container>
            <div>
                <h2> Resell Viewer </h2>
                <h2> 마이페이지입니다. </h2>
            </div>
        </Container>
    );
}

export default MyPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-top:100px;
`