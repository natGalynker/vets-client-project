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
// const onSuccess = function (data) {
//   if (data.pet) {
//     console.log(data.pet);
//   } else {
//     console.table(data.pets);
//   }
// };

//remove sign in and sign up links from drop down
//make disabled links enable to Profile and calendar
const signInSuccess = (data) =>{
  app.user = data.user;
  $('.register').css("display", "none");
  $('.sign-in').css("display", "none");
  $('#profile').addClass('enable-links');
  $('#delete').addClass('enable-links');
  $('#display-pets').addClass('enable-links');

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
    $('#delete').removeClass('enable-links');
    $('#display-pets').removeClass('enable-links');

  };
  const createPetSuccess = (data) => {
    app.pet = data.pet;
    console.log(data.pet.name);
  };
    const showPetsSuccess = (data) =>  {
     const displayPets = require('../templates/pets-display.handlebars');
      console.log(data);
    $('.pet-display-append').html(displayPets({
    pets:data.pets
  }));
};


module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  createPetSuccess,
  showPetsSuccess,
  // onSuccess
  // getPetsByIdSuccess
};
