/* eslint-disable import/prefer-default-export */
import { useRecoilState } from 'recoil';
import { googleAuthState } from 'store/recoil/google/atom';

export const useOldGoogle = () => {
  const [google, setGoogle] = useRecoilState(googleAuthState);
  gapi.load('auth2', () => {
    const GoogleAuth = gapi.auth2.getAuthInstance(); // 로그인 했을 때
    if (GoogleAuth && GoogleAuth.isSignedIn.get() && !google.user) {
      const profile = GoogleAuth.currentUser.get().getBasicProfile();
      setGoogle(google => {
        return {
          ...google,
          user: {
            id: profile.getId(),
            name: profile.getName(),
            profile: profile.getImageUrl(),
            email: profile.getEmail(),
          },
          isLogin: true,
        };
      });
    }
  });
  const render = (element: HTMLElement) => {
    gapi.load('auth2', () => {
      gapi.auth2
        .init({
          client_id: '40957789666-126lt75vbca60rbr50if51s7j9o05kfu.apps.googleusercontent.com',
          scope: 'profile',
        })
        .then(res => {
          res.attachClickHandler(
            element,
            {},
            googleUser => {
              const profile = googleUser.getBasicProfile();
              console.log('profile', profile);
              setGoogle(google => {
                return {
                  ...google,
                  user: {
                    id: profile.getId(),
                    name: profile.getName(),
                    profile: profile.getImageUrl(),
                    email: profile.getEmail(),
                  },
                  isLogin: true,
                };
              });
            },
            err => {
              console.log('err', err);
            },
          );
          // console.log('res', res.currentUser.get());
        });
    });
  };
  return {
    isLogin: google.isLogin,
    user: google.user,
    render,
  };
};
