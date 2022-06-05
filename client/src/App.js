import "antd/dist/antd.variable.css";
import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/Main';
import ProductPage from './pages/ProductPage';
import ChartPage from './pages/ChartPage';
import IssuePage from './pages/IssuePage';
import MyPage from './pages/mypage/MyPage';
import Profile from './pages/mypage/Profile';
import LookupList from './pages/mypage/LookupList';
import PostView from './pages/post/PostView';
import PostMain from './pages/post/PostMain';
/*eslint-disable*/

function App() {
  return (
    <div>
      <GlobalStyle />
      <MainNavigation />

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/chart' element={<ChartPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/issue' element={<IssuePage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/lookuplist' element={<LookupList />} />
        <Route exact path='/postView/:no' element={<PostView />} />       
        <Route exact path='/issue' element={<PostMain />} /> 
      </Routes>

    </div>
  );
}



export default App;
