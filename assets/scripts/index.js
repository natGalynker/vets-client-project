'use strict';
const authEvents = require('./auth/events.js');
// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

//on the click load the handlebars which will show pets
$(document).on('click', '#display-pets', function(){
  authEvents.onShowPets();
});

//on submit submit the Patch action that changes vaccine to true
$(document).on('submit','.update-vaccine-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  authEvents.onPatchPet(id);
});

//on submit submit the Patch action that changes declawed to true
$(document).on('submit','.update-declawed-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  authEvents.onPatchDeclawed(id);
});

//on submit submit the Patch action that changes feral to true
$(document).on('submit','.update-feral-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  authEvents.onPatchFeral(id);
});

//on submit submit the Patch action that neutered vaccine to true
$(document).on('submit','.update-neutered-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  authEvents.onPatchNeutered(id);
});

//on submit submit the DELETE action that removes the pet
$(document).on('submit','.delete-pet-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  authEvents.onRemovePet(id);
});


$(() => {
authEvents.addHandlers();
});
