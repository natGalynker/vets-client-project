'use strict';

const app = require('../app.js');


//allows user to POST their email and password to the database
const signUp = function(data) {
  return $.ajax({ //same as return $.ajax({
    url: app.api + '/sign-up',
    method: 'POST',
    data,
  });
};

//post action to sign a user in
const signIn = function(data) {
  return $.ajax({
    url: app.api + '/sign-in',
    method: 'POST',
    data,
  });
};

// allows the user to change their
const changePassword = function(data) {
  return $.ajax({
    url: app.api + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

//allows the user to create a pet
const createPet = function(data) {
  return $.ajax({
    url: app.api + '/pets',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};


// const getPetsById = function(data) {
//   return $.ajax({
//     url: app.api + '/pets/' + app.pet.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     },
//     data,
//   });
// };


//displays all the pets
const showPets = function() {
  return $.ajax({
    url: app.api + '/pets',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });

};


// const updatePet = function(data, id) {
//   return $.ajax({
//     url: app.api + '/pets/' + id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data,
//   });
//
// };

//updates the pet to having the rabies shot
const patchPet = function(id, isRabies) {
  return $.ajax({
    url: app.api + '/pets/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      "pet": {
        "rabes_shot": isRabies
      }
    }
  });
};

//update the pet to being declawed
const patchDeclawed = function(id, isDeclawed) {
  return $.ajax({
    url: app.api + '/pets/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      "pet": {
        "declawed": isDeclawed
      }
    }
  });
};

//update the pet to being feral
const patchFeral = function(id, isFeral) {
  return $.ajax({
    url: app.api + '/pets/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      "pet": {
        "feral": isFeral
      }
    }
  });
};

//update the pet to being neutered
const patchNeutered = function(id, isNeutered) {
  return $.ajax({
    url: app.api + '/pets/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      "pet": {
        "neutered": isNeutered
      }
    }
  });
};

//removes the pet from the database
const removePet = function(id) {
  return $.ajax({
    url: app.api + '/pets/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

//logs the user out of the database
const signOut = () => $.ajax({
  url: app.api + '/sign-out/' + app.user.id,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
});


//sends the ajax functions to grab in
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createPet,
  removePet,
  showPets,
  patchPet,
  patchDeclawed,
  patchFeral,
  patchNeutered
};
