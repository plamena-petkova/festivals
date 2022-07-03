import Parse from 'parse/dist/parse.min.js';

const PARSE_APPLICATION_ID = 'N7Xz8vuxjzsKbiffxZeYoXrjo7nBno2e3pksZnai';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/users';
const PARSE_JAVASCRIPT_KEY = 'sdl95ibeRAy6no9YdpAbfOcm8Cp9Z96mJ2t8cEiM';
// const REVOCABLE_SESSION = '1'
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;




export async function register({username, password, email, firstName, lastName, repass}) {

    const user = new Parse.User();

    user.set({username, password, email, firstName, lastName, repass} );
    try {
        await user.signUp();
        // Hooray! Let them use the app now.
      } catch (error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }

}


export async function login(email, username, password) {


  try {
    const userData = await Parse.User.logIn(email, username, password);
    
    const user = {...userData.attributes, id: userData.id};

    console.log(user  );
    // Object.values(localStorage)[0]

    return user;

  } catch (error) {
    console.error('Error while logging in user', error);
  }


}

export async function logout() {
  try {
    await Parse.User.logOut();
    // To verify that current user is now empty, currentAsync can be used
    const currentUser = await Parse.User.current();
    if (currentUser === null) {
      alert('Success! No user is logged in anymore!');
    }
    // Update state variable holding current user
    getCurrentUser();
    return true;
  } catch (error) {
    alert(`Error! ${error.message}`);
    return false;
  }
}

export async function getCurrentUser() {
  const currentUser = await Parse.User.current();
  console.log(currentUser);
  return currentUser;

};

