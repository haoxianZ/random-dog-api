'use strict';
function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
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
    let numbPic = $('.js-text').val();
    console.log(numbPic)
    if (!numbPic) {
      getDogImage(3)
    }
    else if (numbPic<1 ||numbPic >50){
       $('.results-img').replaceWith(
    '<h3 class = "results-img">Invalid</h3>'
        )
      $('.results').removeClass('hidden');
      return}
    else{
      getDogImage(numbPic)
    };
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});