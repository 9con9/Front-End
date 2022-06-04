import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";

const kakaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const KakaoLogin = ({ KAKAO_AUTH_URL }) => {
  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
      <img src={process.env.PUBLIC_URL +'/img/kakao_logo.png'}/>
      </a>
    </div>
  );
};

export default KakaoLogin;