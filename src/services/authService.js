import Parse from 'parse/dist/parse.min.js';

const PARSE_APPLICATION_ID = 'N7Xz8vuxjzsKbiffxZeYoXrjo7nBno2e3pksZnai';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/users';
const PARSE_JAVASCRIPT_KEY = 'sdl95ibeRAy6no9YdpAbfOcm8Cp9Z96mJ2t8cEiM';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;





export async function register({username, password, email, firstName, lastName}) {

    const user = new Parse.User();

    user.set({username, password, email, firstName, lastName} );
    try {
        await user.signUp();
        // sessionStorage.setItem(user.sessionToken);
        // Hooray! Let them use the app now.
      } catch (error) {
        // Show the error message somewhere and let the user try again.
        if(error) {
          throw new Error(error.message)
        }
        // alert("Error: " + error.code + " " + error.message);
      }

}


export async function login(username, password) {

  try {

      const userData = await Parse.User.logIn(username, password);
    
      const user = {...userData.attributes, id: userData.id};  
 
      return user; 

  } catch (error) {
    if(error) {
      throw new Error(error.message)
    }
    
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
    throw new Error(error);
    // alert(`Error! ${error.message}`);
    // return false;
  }
}

export async function getCurrentUser() {
  const currentUser = await Parse.User.current();
  console.log(currentUser);
  return currentUser;

};

