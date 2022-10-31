import { Link } from 'react-router-dom';
import mainNav from './MainNavigation.module.css';
import 'antd/dist/antd.css';
import { RiseOutlined, UserOutlined } from '@ant-design/icons';
import Category from './Category.js';

function MainNavigation() {

    return (
        <header className={mainNav.header}>
            <div className={mainNav.logo}> 
                <Link to='/'><img className={mainNav.mainLogo} src={process.env.PUBLIC_URL + '/img/ResellViewer.png'}/></Link>
            </div>

            <div className={mainNav.content}>
                <li>
                    <Link to='/chart'>차트</Link>
                </li>
                <li>
                    <Link to='/product'>마켓</Link>
                </li>
                <li style={{paddingRight:"0px"}}>
                    <Link to='/issue'>이슈</Link>
                </li>
            </div>

            <div className={mainNav.etc}>
                <li>로그인<span>&nbsp; ㅣ &nbsp;</span>고객센터</li>
                <span className={mainNav.userIcon}><UserOutlined /></span>
            </div>
        </header>
    );
}


export default MainNavigation