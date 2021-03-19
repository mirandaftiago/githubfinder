//Instantiate Classes
const github = new GitHub;
const ui = new UI;

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
          ui.showProfile(data.profile);
        }
      })
  } else {
    //Clear the profile

  }
});
