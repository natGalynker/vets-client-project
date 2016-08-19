'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);


const  api= require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields(this);
  console.log(" test");
  event.preventDefault();
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};
const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onChangePassword = function onChangePassword(event) {
  let data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignOut = function onSignOut(event) {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  console.log('working');
  //grab the ID of the form these handlers not the button IDs
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  // $('#register').on('click', displayForm);

};
module.exports = {
  addHandlers
};
