import { Link } from 'react-router-dom';
import mainNav from './MainNavigation.module.css';
import 'antd/dist/antd.css';
import { RiseOutlined, UserOutlined } from '@ant-design/icons';

function MainNavigation(props) {
    
    const logout = () =>{
        console.log("반응" + sessionStorage.getItem("login"));
        sessionStorage.removeItem("login");
        window.location.href = '/';
        alert('로그아웃 되었습니다');
    }



    return (
        <div className={mainNav.container}>
            <div className={mainNav.header}>
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
                    <ul>{sessionStorage.getItem("login") != undefined ? <Link to='/'><li onClick={logout}>로그아웃</li></Link> :<Link to='/login'><li>로그인</li></Link>}<span>&nbsp; ㅣ &nbsp;</span><li>고객센터</li></ul>
                    <span className={mainNav.userIcon}><UserOutlined /></span>
                </div>
            </div>
        </div>
    );
}

export default MainNavigation