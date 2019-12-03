import { initAuth0 } from '@auth0/nextjs-auth0';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useAuthDispatch, useAuthState, actions as authActions } from '../components/providers/Auth';

// auth0 client
export default initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  redirectUri: process.env.REDIRECT_URI,
  postLogoutRedirectUri: process.env.POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.SESSION_COOKIE_SECRET,
    cookieLifetime: process.env.SESSION_COOKIE_LIFETIME,
    storeAccessToken: true
  },
  oidcClient: {
    // Eg: increase the tolerance to 5 seconds.
    clockTolerance: 5000
  }
});

// Hook to make user available to all page

export async function fetchUser({ cookie = '', storedUser }) {
  if (typeof window !== 'undefined' && storedUser) {
    return storedUser;
  }

  const res = await fetch(
    '/api/auth/me',
    cookie
      ? {
        headers: {
          cookie,
        },
      }
      : {}
  );

  if (!res.ok) {
    return null;
  }

  const json = await res.json();
  return json;
}

export function useFetchUser({ required } = {}) {
  const storedUser = useAuthState();
  const [loading, setLoading] = useState(
    () => !(typeof window !== 'undefined' && storedUser)
  );
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') {
      return null;
    }

    return storedUser || null;
  });

  useEffect(
    () => {
      if (!loading && user) {
        return;
      }
      setLoading(true);
      let isMounted = true;
      fetchUser({ storedUser }).then(user => {
        // Only set the user if the component is still mounted
        if (isMounted) {
          // When the user is not logged in but login is required
          if (required && !user) {
            // eslint-disable-next-line no-undef
            window.location.href = '/api/auth/login';
            return;
          }
          setUser(user);
          setLoading(false);
        }
      });

      // eslint-disable-next-line consistent-return
      return () => {
        isMounted = false;
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const dispatchAuth = useAuthDispatch();

  dispatchAuth({
    type: authActions.set_session,
    data: user
  });

  return { user, loading };
}
