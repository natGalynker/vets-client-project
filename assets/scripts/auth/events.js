'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);


const  api= require('./api');
const ui = require('./ui');


//sign up
const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

//sign in
const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onChangePassword = function onChangePassword(event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

//sign out function
const onSignOut = function onSignOut(event) {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

// create a new pet and save it to the database
const onCreatePet = function onCreatePet(event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.createPet(data)
  .done(ui.createPetSuccess)
  .fail(ui.failure);
};

//show all the pets
const onShowPets = function onShowPets() {
event.preventDefault();
api.showPets()
.done(ui.showPetsSuccess)
.fail(ui.failure);
};

const onGetPetsById = function onGetPetsById(id) {
  event.preventDefault();
  api.getPetsById(id)
    .done(ui.getPetsByIdSuccess)
    .fail(ui.failure);
};

//grab the id of the pet from the database and update the pets owner or name
// const onPatchPet = function onPatchPet(id) {
//   let isChanged = true;
//   api.patchPet(id, isChanged)
//     .done(ui.patchSuccess(id))
//     .fail(ui.failure);
// };

//grab the id of the pet from the database and change declawed to true
const onPatchDeclawed = function onPatchDeclawed(id) {
  let isDeclawed = true;
  api.patchDeclawed(id, isDeclawed)
    .done(ui.patchSuccess(id))
    .fail(ui.failure);
};

const onPatchPet = function onPatchPet(id) {
  let isRabies = true;
  api.patchPet(id, isRabies)
    .done(ui.patchSuccess(id))
    .fail(ui.failure);
};
//grab the id of the pet from the database and change feral to true
const onPatchFeral = function onPatchFeral(id) {
  let isFeral = true;
  api.patchFeral(id, isFeral)
    .done(ui.success(id))
    .fail(ui.failure);
};

//grab the id of the pet from the database and change neutered to true
const onPatchNeutered = function onPatchDeclawed(id) {
  let isNeutered = true;
  api.patchDeclawed(id, isNeutered)
    .done(ui.success(id))
    .fail(ui.failure);
};

//grab the id of the pet from the database and delete that pet
const onRemovePet = function onRemovePet(id) {
  event.preventDefault();
  api.removePet(id)
  .done(ui.success)
  .fail(ui.failure);
};


const addHandlers = () => {
//use jquery to target the forms for user actions
//use jquery to target the form for creating a pet
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('click', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#create-pet').on('submit', onCreatePet);

};
module.exports = {
  addHandlers,
  onShowPets,
  onRemovePet,
  onGetPetsById,
  onPatchDeclawed,
  onPatchPet,
  onPatchFeral,
  onPatchNeutered
};
