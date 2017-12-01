# Todo list challenge
Todo list app — built with [Create React App](https://github.com/facebookincubator/create-react-app), [React Redux](https://github.com/reactjs/react-redux), and [Firebase](https://firebase.google.com/).

Try the demo at https://todo-react-redux.firebaseapp.com. 

## Stack

- Create React App
- React Redux
- React Router Redux
- Redux Thunk
- Redux Devtools Extension for Chrome
- Firebase SDK
- Immutable
- Reselect
- SASS


Quick Start
-----------

```shell
$ git clone 
$ cd 
$ npm install
$ npm start
```

#### Configure this app with your project-specific details:
```json
// .firebaserc

{
  "projects": {
    "default": "your-project-id"
  }
}
```

```javascript
// src/firebase/config.js

export const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```


## NPM Commands

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Build the application to `./build` directory|
|`npm test`|Test the application; watch for changes and retest|
