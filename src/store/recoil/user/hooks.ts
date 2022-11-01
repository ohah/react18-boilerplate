import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { TodoState, ITodoState } from 'store/recoil/todo/atom';
import axios from 'axios';
import { IUserState, UserState } from './atom';
const useLogin = () => {
  const [user, setUser] = useRecoilState(UserState);
  const getToken = async (code: string) => {
    // setUser(user => {
    //   return {
    //     ...user,
    //     token: token,
    //   };
    // });
    // const { data } = await axios({
    //   method: 'post',
    //   url: `https://github.com/login/oauth/access_token`,
    //   // url: `https://github.com/login/oauth/access_token`,
    //   // url: `/github/oauth/access_token`,
    //   headers: {
    //     accept: 'application/json',
    //     // 'Access-Control-Allow-Origin': 'no-cors',
    //   },
    //   data: {
    //     client_id: 'e4085c19d31f41c3a214',
    //     client_secret: 'd5820949eca1542d7e4d97c8adbce306de2287c4',
    //     code,
    //   },
    // });
    // console.log('data', data);
  };
  return {
    user,
    getToken,
  };
};

export default useLogin;
