const $login = document.querySelector('.login')
const $bio = document.querySelector('.bio')
const $repositories = document.querySelector('')
const $followers = document.querySelector('')
const $following = document.querySelector('')
const $city = document.querySelector('')
const $socialLink = document.querySelector('')
const $githhubLink = document.querySelector('')
const $githubProfil = document.querySelector('')


fetch(`https://api.github.com/users/${search-input}`,{
    headers:{
        'Authorization': ''
    }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur : ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

