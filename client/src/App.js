import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/Main';
import ProductPage from './pages/ProductPage';
import ChartPage from './pages/ChartPage';
import IssuePage from './pages/IssuePage';
import MyPage from './pages/mypage/MyPage';
import MyProfile from './pages/mypage/MyProfile';
import LookupList from './pages/mypage/LookupList';
import HeartList from './pages/mypage/HeartList';
import PostView from './pages/post/PostView';
import PostMain from './pages/post/PostMain';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import React, { useEffect,useState } from 'react';

/*eslint-disable*/

function App() {

  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    if(sessionStorage.getItem('user_id') === null){
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log('isLogin ?? :: ', isLogin)
    } else {
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
    // 로그인 상태 변경
      setIsLogin(true)
      console.log('isLogin ?? :: ', isLogin)
    }
  })

  return (
    <div>
      <GlobalStyle />
      <MainNavigation/>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/chart' element={<ChartPage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/issue' element={<IssuePage />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/myprofile' element={<MyProfile />} />
            <Route path='/lookuplist' element={<LookupList />} />
            <Route path='/heartlist' element={<HeartList />} />
            <Route exact path='/postView/:no' element={<PostView />} />       
            <Route exact path='/issue' element={<PostMain />} />
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>           
          </Routes>
    </div>
  );
}



export default App;