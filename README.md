# React-Express-Blog

Documentation: OpenAPI/Swagger

Frontend: React

Backend: Express + Typescript

Persistent storage: MongoDB

## Configuration

Create an .env-file like:

```
PORT=3009
INSTANCES=3
NODE_ENV=development
DATABASE_DSN=mongodb://localhost/react_express-blog
SWAGGER_API_NAME=React-Express-Blog
SWAGGER_API_VERSION=0.1
```

## Backend API Documentation

Created as OpenAPI/Swagger with [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) annotations before a route.

Read more about annotations on [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)

Example route annotations: [swagger-jsdoc example 1](https://github.com/Surnet/swagger-jsdoc/blob/v6/examples/app/routes.js)

JSDoc first steps ( with some examples also ): [first steps](https://github.com/Surnet/swagger-jsdoc/blob/v6/docs/FIRST-STEPS.md)

Example in server/src/routes.ts:

```
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', (req:Request, res:Response) => {

    log('debug', 'GET request /');

    res.status(200).send('Root here!');
});

```

How to (only in enviroment development):

```
1) Start the development server
   #npm run start:server-dev

2) Visit Swagger UI in a browser (url and port may be different):
   http://localhost:3009/docs
```
