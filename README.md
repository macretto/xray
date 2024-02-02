# SWE Tech Dive CRUD Project

Latest checked | @Tue Jan 30 2024 19:10:36 GMT-0500 (Eastern Standard Time)

## Getting Started

This skeleton contains two different applications -- a front end, or "client," created with "Create React App," and a back end, or "API," created with Express. 

In order to make both of them work together, you'll need to run both, but you can run just one or the other to start. As you begin working on this project, you'll first focus on the client, so you can more or less ignore the API portion of the code for now.

## Client

Latest checked | @Tue Jan 30 2024 19:10:36 GMT-0500 (Eastern Standard Time)

In order to run the client, you'll run the following commands:

```bash
cd client/
sudo npm i                  # 15 vulnerabilities (7 moderate, 6 high, 2 critical) 
sudo npm audit fix          # 8 vulnerabilities (2 moderate, 6 high)
npm install braces@2.3.1    # missing module install
npm start
```

You should then be able to visit `localhost:3000` in your browser and see the client running. If you make changes in the `App.js` file, you should see them reflected.

## API

Latest checked | @Tue Jan 30 2024 19:10:36 GMT-0500 (Eastern Standard Time)

In order to run the server, you'll run the following commands:

```bash
cd api/
sudo npm i                  # 8 vulnerabilities (1 low, 4 high, 3 critical)
sudo npm audit fix          # 8 vulnerabilities (1 low, 4 high, 3 critical)
npm start
```

You should then be able to visit `localhost:9000` in your browser and see the server running.

## MONGODB

In order to configure the mongodb native drivers for node.js 5.5 or later, you'll run the following commands:

```bash
sudo npm install mongodb

# connection string into your application code | xray:xray [user:password]
mongodb+srv://xray:xray@clustermain.cu1ntt7.mongodb.net/?retryWrites=true&w=majority
```

## EXPRESS

In order to work with express, you'll run the following commands:

```bash
sudo npm install express
```

## NODEMON

In order to work with nodemon, you'll run the following commands:

```bash
sudo npm install -g nodemon
```

## DOTENV

In order to work with dotenv, you'll run the following commands:

```bash
sudo npm install dotenv
```
