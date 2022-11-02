/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import style from 'css/app.module.css';
const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/"> 홈 </Link>
      <Link to="/profile"> 프로필 </Link>
      <Link to="/Param"> 파라미터 </Link>
      <Link to="/Param/:query"> 파라미터/:안녕 </Link>
    </div>
  );
};

export default Header;
