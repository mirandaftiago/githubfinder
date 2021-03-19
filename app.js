//Instantiate GitHub
const github = new GitHub;

//Search Input
const searchUser = document.getElementById('searchUser');

//Search Input event listener
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if(userText !== ''){
    //HTTP call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          //Show alert
          
        } else {
          //Show profile
        }
      })
  } else {
    //Clear the profile
    
  }
});
