'use strict';

const app = require('../app.js');


//toggle disabled buttons to enabled
jQuery.fn.extend({
  disable: function(state) {
    return this.each(function() {
      let $this = $(this);
      $this.toggleClass('disabled', state);
    });
  }
});

//clears the forms after the modol submit button is triggered
$.fn.clearForm = function() {
  return this.each(function() {
    let type = this.type,
      tag = this.tagName.toLowerCase();
    if (tag === 'form') {
      return $(':input', this).clearForm();
    }
    if (type === 'text' || type === 'password' || tag === 'textarea') {
      this.value = '';
    } else if (type === "date") {
      this.value = '';
    } else if (type === 'checkbox' || type === 'radio') {
      this.checked = false;
    } else if (tag === 'select') {
      this.selectedIndex = -1;
    }
  });
};

// success test that tests if CRUD was successful
const success = (data) => {
  $('#change-password').clearForm();
  $('#edit-pet').clearForm();
  $('#delete-pet').clearForm();
  $('#sign-up').clearForm();
  if (data) {

  }
};

//check for patch success
const patchSuccess = (data) => {
  $('.pet-container').html('');

  //load the handlebars which loads the handlebars template into the container
  const viewPatch = require('../templates/headers-display.handlebars');
  $('.pet-container').html(viewPatch({
    pets: data.pets
  }));
};

//checks if ajax was successful
//logs an error if it was not
const failure = (error) => {
  console.error(error);
};

//remove sign in and sign up links from drop down
//make disabled links enable to Profile and calendar
const signInSuccess = (data) => {
  app.user = data.user;
  $('.register').css("display", "none");
  $('.sign-in').css("display", "none");
  $('#profile').addClass('enable-links');
  $('#delete').addClass('enable-links');
  $('#display-pets').addClass('enable-links');
  $('#edit').addClass('enable-links');
  $('#sign-in').clearForm();
};

//clear the forms
//disable view pets and create pets
//re-enable sign-in and sign-out to be displayed on drop down
const signOutSuccess = () => {
  delete app.user;
  $('.register').css("display", "initial");
  $('.sign-in').css("display", "initial");
  $('#profile').removeClass('enable-links');
  $('#delete').removeClass('enable-links');
  $('#display-pets').removeClass('enable-links');
  $('#edit').removeClass('enable-links');
  $('#sign-out').clearForm();

};
const createPetSuccess = (data) => {
  app.pet = data.pet;
  $('#create-pet').clearForm();
};

//loads the handlebars that will show the pets
const showPetsSuccess = (data) => {
  const displayPets = require('../templates/pets-display.handlebars');
  $('.main').css("display", "none");
  $('.landing-info').css("display", "none");
  $('.pet-container').html(displayPets({
    pets: data.pets
  }));
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  createPetSuccess,
  showPetsSuccess,
  patchSuccess
};
