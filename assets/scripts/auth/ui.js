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
const success = (data) => {
  if(data){
  console.log(data);
}
};

const failure = (error) => {
  console.error(error);
};
const onSuccess = function (data) {
  if (data.pet) {
    console.log(data.pet);
  } else {
    console.table(data.pets);
  }
};

//remove sign in and sign up links from drop down
//make disabled links enable to Profile and calendar
const signInSuccess = (data) =>{
  app.user = data.user;
  $('.register').css("display", "none");
  $('.sign-in').css("display", "none");
  $('#profile').addClass('enable-links');
  $('#calendar').addClass('enable-links');
  $('#pets').addClass('enable-links');

  console.log(app);
  };

//clear the forms
//switch profile, calendar, get-pets, get-pets-id, updatePet to inactive
//re-enable sign-in and sign-out to be displayed on drop down
  const signOutSuccess = () =>{
    delete app.user;
    console.log(app);
    $('.register').css("display", "initial");
    $('.sign-in').css("display", "initial");
    $('#profile').removeClass('enable-links');
    $('#calendar').removeClass('enable-links');
    $('#pets').removeClass('enable-links');

  };
  const createPetSuccess = (data) => {
    app.pet = data.pet;
    console.log(app);
  };

  const showPetsSuccess = (data) =>  {
    app.pet = data.pet;
  };


  //on entering of pets ID launch a popover on submit
  //create emply popover with no content. the popover body
  //will be named pet-id-append
//   const getPetsByIdSuccess = () => {
//   app.pet = data.pet;
//   // $(".pet-id-append").append('<h1>'+ data.game.player_x.email + '  was the player'+ '</h1>');
//   console.log(data);
//
//
// };

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  createPetSuccess,
  showPetsSuccess,
  onSuccess
  // getPetsByIdSuccess
};
