import auth0 from '../../utils/auth0';
import { get } from '../../utils/api';

export default auth0.requireAuthentication(async (req, res) => {
  // use these on your own API
  const { user } = await auth0.getSession(req);
  const { accessToken } = await auth0.getSession(req);
  return get('users/123').then(result => res.json(result));
});
