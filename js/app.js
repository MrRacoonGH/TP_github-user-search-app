
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
