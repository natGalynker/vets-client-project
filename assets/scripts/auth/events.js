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

const onCreatePet = function onCreatePet(event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.createPet(data)
  .done(ui.createPetSuccess)
  .fail(ui.failure);
};
const onShowPets = function onShowPets(event) {
let data = getFormFields(this);
event.preventDefault();
api.showPets(data)
.done(ui.showPetsSuccess)
.fail(ui.failure);
};

const onGetPetsById = function onGetPetsById(event) {
  let data = getFormFields(this);
  console.log(data.id);
  event.preventDefault();
  api.getPetsById(data)
    .done(ui.getPetsByIdSuccess)
    .fail(ui.failure);
};

const onUpdatePet = function onUpdatePet(event) {
  let data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.updatePet(data)
  .done(ui.success)
  .fail(ui.failure);
};
const onRemovePet = function onRemovePet(event) {
  event.preventDefault();
  let petId =$('#delete-pet').val();
  api.removePet(petId)
  .done(ui.onSuccess)
  .fail(ui.failure);
};
};c

const addHandlers = () => {
  console.log('working');
  //grab the ID of the form for getFormFields function actions
  //grab the ID of the Buttons for DELETE request actions
  //grab the ID of the iput field to clear the forms
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  // $('#sign-in').on('click').val('');
  // $('#sign-up')
  $('#sign-out').on('click', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#create-pet').on('submit', onCreatePet);
  $('display-pets').on('click', onShowPets);
  $('#pet-id').on('submit', onGetPetsById);
  $('pet-update').on('submit', onUpdatePet);
  $('#remove-pet').on('click', onRemovePet);

};
module.exports = {
  addHandlers
};
