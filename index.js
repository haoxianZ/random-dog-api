'use strict';
function getDogImage(num, breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/${num}`)

    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.' + error));
}

function displayResults(responseJson) {
  console.log(responseJson);
  let x = responseJson.message.length;
  console.log(x);
  //replace the existing image with the new one
  for (var i=0; i<x; i++){
    console.log('for loop running');
     $('.results-img').append(
    `<img src="${responseJson.message[i]}">`
  )
  }
 
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('.results-img').empty();
    let numbPic = $('.js-number').val();
    $('.js-number').val('');
    let breed = $('.js-text').val();
    breed = $('.js-text').val()
    //dealing with number input
    
    if (!numbPic && breed) {
      getDogImage(3,breed)
    }
    else if(numbPic&&!breed){
      getDogImage(numbPic, husky)
    }
    else{
      getDogImage(numbPic, breed)
    };
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});