
  window.addEventListener("DOMContentLoaded", (event) => {
    let userForm = document.getElementById("userForm");
    
    if (userForm){
      userForm.addEventListener("submit", (e) => {
        e.preventDefault();
      
        let username = document.getElementById("gitHubUserName");
        if (username.value == "" ) {
          alert("Username is empty!");
        } else {
          userSearch(username.value);
        }
      });
    }
});

const userSearch = (user) => {
  let userImage = document.getElementById("userImage");
  let name = document.getElementById("name");
  let userName = document.getElementById("userName");
  let userEmail = document.getElementById("email");
  let location = document.getElementById("location");
  let gists = document.getElementById("gists");
  let repos = document.getElementById("repos");

  let url = 'https://api.github.com/users/' + user

  let repos_array = []
  fetch(url)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        userImage.setAttribute('src', `${data.avatar_url}`)
        name.innerText = 'Name:' + data.name
        userName.innerText = 'Username: ' + data.login
        userEmail.innerText = 'Email:' + data.email
        location.innerText = 'Location:' + data.location
        gists.innerText = 'Gists:' + data.public_gists

        fetch(`${data.repos_url}`)
          .then(response => response.json())
          .then(json => json.map(({e}) => repos_array.push(e)))
      })
    }
    
