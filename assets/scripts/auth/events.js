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
const onShowPets = function onShowPets() {
event.preventDefault();
api.showPets()
.done(ui.showPetsSuccess)
.fail(ui.failure);
};

const onGetPetsById = function onGetPetsById(event) {
  let data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.getPetsById(data)
    .done(ui.getPetsByIdSuccess)
    .fail(ui.failure);
};

const onPatchPet = function onPatchPet(id) {
  let isChanged = true;
  api.patchPet(id, isChanged)
    .done(ui.patchSuccess(id))
    .fail(ui.failure);
};

const onPatchDeclawed = function onPatchDeclawed(id) {
  let isDeclawed = true;
  api.patchDeclawed(id, isDeclawed)
    .done(ui.patchSuccess(id))
    .fail(ui.failure);
};

const onPatchFeral = function onPatchPet(id) {
  let isFeral = true;
  api.patchPet(id, isFeral)
    .done(ui.patchSuccess(id))
    .fail(ui.failure);
};

const onPatchNeutered = function onPatchDeclawed(id) {
  let isNeutered = true;
  api.patchDeclawed(id, isNeutered)
    .done(ui.patchSuccess(id))
    .fail(ui.failure);
};

const onRemovePet = function onRemovePet(event) {
  let data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  let petid =$('#pet-delete-id').val();
  api.removePet(data, petid)
  .done(ui.success)
  .fail(ui.failure);
};

const addHandlers = () => {
  console.log('working');
  //grab the ID of the form for getFormFields function actions
  //grab the ID of the Buttons for DELETE request actions
  //grab the ID of the iput field to clear the forms
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('click', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#create-pet').on('submit', onCreatePet);
  // $('#pet-id').on('submit', onGetPetsById);
  // $('#remove-pet').on('click', onRemovePet);
  // $('#display-pets').on('click', onShowPets);
  // $('#edit-pet').on('submit', onUpdatePet);
  // $('#delete-pet').on('submit', onRemovePet);

};
module.exports = {
  addHandlers,
  onShowPets,
  onPatchPet,
  onRemovePet,
  onGetPetsById,
  onPatchDeclawed,
  onPatchFeral,
  onPatchNeutered
};
