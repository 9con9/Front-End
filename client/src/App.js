import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/Main';
import ProductPage from './pages/ProductPage';
import ChartPage from './pages/ChartPage';
import IssuePage from './pages/IssuePage';
import MyPage from './pages/MyPage';
import PostView from './pages/post/PostView';
import PostMain from './pages/post/PostMain';
import ProfilePath from './components/profilePath'
import Auth from './pages/Auth'
import KakaoLogin from './pages/kakaoLogin';

/*eslint-disable*/

const kakaoClientId = '6d8aab05f39333ee8d3ce15f91ced723';
const kakaoRedirectUri = 'https://localhost:3000';
const loginUri = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}\
&redirect_uri=${kakaoRedirectUri}&response_type=code`;


function App() {
  return (
    <div>
      <GlobalStyle />
      <MainNavigation/>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/login' element={<KakaoLogin KAKAO_AUTH_URL={loginUri}/>} />
            <Route path='/'element={<Auth />} />
            <Route path='/chart' element={<ChartPage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/issue' element={<IssuePage />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route exact path='/postView/:no' element={<PostView />} />       
            <Route exact path='/issue' element={<PostMain />} /> 
            <Route path="/profile" element={<ProfilePath />} />
          </Routes>
    </div>
  );
}



export default App;