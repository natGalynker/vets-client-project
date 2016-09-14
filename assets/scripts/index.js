'use strict';
const authEvents = require('./auth/events.js');
// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled


$(document).on('click', '#display-pets', function(){
  authEvents.onShowPets();
});

$(document).on('submit','.update-vaccine-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  authEvents.onPatchPet(id);
});

$(document).on('submit','.update-declawed-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  authEvents.onPatchDeclawed(id);
});

$(document).on('submit','.update-feral-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  authEvents.onPatchFeral(id);
});

$(document).on('submit','.update-neutered-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  authEvents.onPatchNeutered(id);
});

$(document).on('submit','.delete-pet-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  authEvents.onRemovePet(id);
});


$(() => {
authEvents.addHandlers();
});
