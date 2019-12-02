const withCSS = require('@zeit/next-css');
const dotenv = require('dotenv');

dotenv.config();


module.exports = withCSS({
  target: 'serverless',
  webpack: config => {
    if (!process.env.BUNDLE_AWS_SDK) {
      config.externals = config.externals || [];
      config.externals.push({ 'aws-sdk': 'aws-sdk' });
    } else {
      console.warn('Bundling aws-sdk. Only doing this in development mode');
    }

    return config;
  },
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: 'openid profile',
    REDIRECT_URI:
      process.env.REDIRECT_URI || 'http://localhost:3000/api/auth/callback',
    POST_LOGOUT_REDIRECT_URI:
      process.env.POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000/',
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: 7200, // 2 hours
  },
});
