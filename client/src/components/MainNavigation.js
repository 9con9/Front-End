import { Link } from 'react-router-dom';
import mainNav from './MainNavigation.module.css';
import 'antd/dist/antd.css';
import { RiseOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';

function MainNavigation() {
    return (
        <header className={mainNav.header}>
            <div className={mainNav.logo}> <Link to=''>
                < RiseOutlined /> 리셀뷰어 </Link></div>

            <ul>
                <li>
                    <Link to='/chart'>차트</Link>
                </li>
                <li>
                    <Link to='/product'>마켓</Link>
                </li>
                <li>
                    <Link to='/issue'>이슈</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to='mypage'><UserOutlined /></Link>
                </li>
                <li>
                    <Link to=''><MenuOutlined /></Link>
                </li>
            </ul>

        </header>
    );
}

export default MainNavigation