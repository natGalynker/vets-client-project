'use strict';

const app = require('../app.js');

const success = (data) => {
  if(data){
  console.log(data);
}
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) =>{
  app.user = data.user;
  console.log(app);
  };

  const signOutSuccess = () =>{
    delete app.user;
    console.log(app);
  };


module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
