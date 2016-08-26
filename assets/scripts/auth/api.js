'use strict';

const app = require('../app.js');

const signUp =  function(data) {
console.log(data);
return $.ajax({ //same as return $.ajax({
    url: app.api + '/sign-up',
    method: 'POST',
    data,
});
};

const signIn = function (data) {
  console.log(data);
  return $.ajax({
    url: app.api + '/sign-in',
    method: 'POST',
    data,
});
};
const changePassword = function (data) {
  console.log(data);
  console.log(app.user.token);
  return $.ajax({
  url: app.api + '/change-password/'  + app.user.id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
    data,
});
};

const createPet = function (data) {
  console.log(data);
  console.log(app.user.token);
  return $.ajax({
  url: app.api + '/pets',
  method: 'POST',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
    data,
});
};
const getPetsById = function (data){
  console.log(app.data);
  console.log(app.pet);
  return $.ajax({
    url: app.api + '/pets/' + app.pet.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data,
  });
};

const showPets = function () {
  return $.ajax({
    url: app.api + '/pets',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });

};

const updatePet = function (data, id) {
  console.log(data);
  console.log(app.user.token);
  return $.ajax({
  url: app.api + '/pets/' + id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
  data,
});

};
const removePet = function  (data, petid){
  console.log(data);
return $.ajax ({
  url: app.api + '/pets/' + petid,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' +app.user.token,
  },
});
};
const signOut = () => $.ajax({
  url: app.api +'/sign-out/' + app.user.id,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
});

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createPet,
  getPetsById,
  updatePet,
  removePet,
  showPets
};
