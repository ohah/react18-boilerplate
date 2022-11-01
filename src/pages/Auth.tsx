import { useEffect } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import useLogin from 'store/recoil/user/hooks';

const Auth = () => {
  const { user, getToken } = useLogin();
  const params = useParams();
  console.log('params', useLocation());
  const [searchParams, setSearchParams] = useSearchParams();

  // const navigate = useNavigate();
  console.log('searchParams', searchParams.get('code'));
  // console.log('searchParams', searchParams.set('code2', 'sex'));
  const code = searchParams.get('code');
  useEffect(() => {
    console.log(user.token, code);
    if (!user.token && !code) {
      // window.location.href = 'https://github.com/login/oauth/authorize?client_id=e4085c19d31f41c3a214&scope=user';
    } else if (code) {
      getToken(code);
    }
  }, []);
  return <div> 인증 </div>;
};
export default Auth;
