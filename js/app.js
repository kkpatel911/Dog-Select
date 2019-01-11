const select = document.getElementById('breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------



function fetchData(url) {
  return fetch(url)
    .then(function (res) {
      return res.json();
    })
}



fetchData('https://dog.ceo/api/breeds/image/random')
  .then(function (data) {
    generateMessage(data.message);
  });

fetchData('https://dog.ceo/api/breeds/list/all')
  .then(function (data) {
    generateOptions(Object.keys(data.message));
  });


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateMessage(data) {
  var html = "<img src = " + data + ">";
  html += "<p>Click To View images of " + select.value + "</p>"
  card.innerHTML = html;
}

function generateOptions(data) {
  var output = "";
  data.forEach(function (key) {
    output += `<option>${(key)}</option>`
  });
  select.innerHTML = output;
}


function fetchBreedImage() {
  var breed = select.value;
  var img = card.querySelector('img');
  var p = card.querySelector('p');
  fetchData(`https://dog.ceo/api/breed/${breed}/images/random`) 
  .then(function(data){
    img.src = data.message;
    img.alt = breed;
    p.textContent = `Click to View more ${breed}`;
  })
}
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);


// ------------------------------------------
//  POST DATA
// ------------------------------------------

