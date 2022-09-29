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
import Mainlog from './pages/Mainlog';

/*eslint-disable*/

function App() {
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
            <Route path='/log' element={<Mainlog/>}/>
          </Routes>
    </div>
  );
}



export default App;