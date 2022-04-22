import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/Main';
import ProductPage from './pages/ProductPage';
import ChartPage from './pages/ChartPage';
import IssuePage from './pages/IssuePage';
import MyPage from './pages/MyPage';

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
      </Routes>
    </div>
  );
}

export default App;
