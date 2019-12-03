# serverless-nextjs
A Boilerplate for NextJS with TailwindCSS &amp; a Serverless API with Auth0

# Features
- [NextJS](https://nextjs.org/) client
- [PostCSS](https://postcss.org/) & [Tailwind CSS](https://tailwindcss.com/) for styling
- Authentication with [Auth0](https://auth0.com/)
- Authentication managed on the client with Hooks &amp; the Context API
- Deployment to Cloudfront & Lambda@Edge using [serverless-nextjs](https://serverless.com/blog/serverless-nextjs/)
- Custom Serverless REST API

# How does it work
------
## Client
To run the frontend locally: `cd client && yarn install && yarn dev`

This will make the application available at `http://localhost:3000`. For the application to work correctly, make sure you add the environment variables outlined in `.env.sample`!

To deploy the client to Cloudfront & Lambda@Edge using [serverless-nextjs](https://serverless.com/blog/serverless-nextjs/), simply run `yarn deploy:staging` and it will be deployed and available in a few minutes.

### TODO
- [ ] Multiple deployments
- [ ] Tests
- [ ] CI/CD with Github Actions

## API
To run the API locally: `cd python-api && yarn install && . activate_venv.sh && pip install -r requirements.txt && yarn offline`

This will make the REST API available at `http://localhost:4000`. Currently there is only a python API, which uses [FlaskRESTFul](https://flask-restful.readthedocs.io/en/latest/).

### TODO
- [ ] Example connecting the API to Auth0
- [ ] Tests
- [ ] Database
- [ ] CI/CD with Github Actions