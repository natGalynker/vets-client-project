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

//remove sign in and sign up links from drop down
//make disabled links enable to Profile and calendar
const signInSuccess = (data) =>{
  app.user = data.user;
  $('.register').css("display", "none");
  $('.sign-in').css("display", "none");
  // $('#profile').disable(false);
  // $('#calendar').disable(false);
  $('#calendar').addClass('disable-links');
  $('#profile').addClass('disable-links');

  console.log(app);
  };

  const signOutSuccess = () =>{
    delete app.user;
    console.log(app);
    $('.register').css("display", "initial");
    $('.sign-in').css("display", "initial");
    // $( "#calendar" ).prop( "disabled", false );
    // $('#profile').prop("disabled", false);
  //   $('#profile').disable(true);
  //   $('#calendar').disable(true);
  // $('#calendar').removeClass('disable-links');
  // $('#profile').removeClass('disable-links');


  };
  //use for hiding and displaying profile and calendar buttons
//$("your-tab-li-element").click(function(){
//  $(this).css("background-color", "#FF0000");
  //$(this).siblings().css( "background-color", "other-color"

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
