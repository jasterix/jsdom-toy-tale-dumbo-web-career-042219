const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const toyCollection = document.querySelector('#toy-collection')
const nameInput = document.querySelector('name-input')
const imagInput = document.querySelector('image-input')
const likeButton = document.querySelector('.like-btn');
const url = 'http://localhost:3000/toys'

let addToy = false

////////////////////////////Fetch List of current toys///////////////////////

const fetchToys = () => {
  fetch(url)
   .then(res => res.json())
   .then(data => {
     data.forEach(toy => {
     toyCollection.innerHTML += renderToyCard(toy) /////////////Render Toys on Page
    })
  })
}
fetchToys() ////makes the toy variable available to renderToyCard

////////////////////////////Create toycard/ HTML///////////////////////
const renderToyCard = (toy) => {
  return `
    <div class="card" data-id= "${toy.id}">
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p data-likes = "${toy.likes}">${toy.likes} Likes </p>
      <button class="like-btn">Like <3</button>
    </div>
  `
}

////////////////////////////Submit toyForm///////////////////////

// ///////////////////////////////Click to open or hide the toyForm//////////////////////
// addBtn.addEventListener('click', () => {
//   // hide & seek with the form
//   addToy = !addToy
//   if (addToy) {
//     toyForm.style.display = 'block'
//     // submit listener here
//   } else {
//     toyForm.style.display = 'none'
//   }
// })
