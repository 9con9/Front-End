import styled from 'styled-components';

function MainPage() {
    return (
        <Container>
            <div>
                <h2> Resell Viewer </h2>
                <h2> 메인페이지입니다. </h2>
            </div>
        </Container>
    );
}

export default MainPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-top:100px;
`