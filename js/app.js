const select = document.getElementById('breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch('https://dog.ceo/api/breeds/image/random')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    generateMessage(data.message);
  });

fetch('https://dog.ceo/api/breeds/list/all')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    generateOptions(Object.keys(data.message));
  })


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateMessage(data) {
  var html = "<img src = " + data + ">";
  html += "<p>Click To View images of " + select.value + "</p>s"
  card.innerHTML = html;
}

function generateOptions(data) {
  let output = '';
  data.forEach(function (key) {
    output += `<option>${(key)}</option>`});
    console.log(output);
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

