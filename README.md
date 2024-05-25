We can create CRUD Model some steps

Need to install some Depenencies
Cors
dotenv
express
mongoose
zod/joi

We also install as devDependencies
    "@eslint/js": "^9.3.0",
    "@types/express": "^4.17.21",
    "eslint-config-prettier": "^9.1.0",
    "nodemon": "^3.1.0",
    "prettier": "^3.2.5",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.4.5",
    "typescript-eslint": "^7.9.0"
Note:you can use your PREFERABLE VERSION

We add some script for easily run and check
like as 
"scripts": {
    "start:prod": "node ./dist/server.js",
    "start:dev": "ts-node-dev --respawn --transpile-only ./src/server.ts",
    "lint": "npx eslint src --ignore-pattern .ts",
    "lint:fix": "npx eslint src --fix",
    "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
    "prettier:fix": "npx prettier --write src",
  },

  Here lint and Prettier use for check.
  we easily build our project using star:dev in typescript  

  in this crud 
  at first we can create a product 
  then check and update delete ,search and others operation
  then manually import product object Id for order creating 
  when you create a order then product quantity is less
  when peoduct quantity is 0 you got a messeage 
  'Insufficient quantity available in inventory quantity not enough'
  Thanks all
