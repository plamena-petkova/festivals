import Parse from 'parse/dist/parse.min.js';

const PARSE_APPLICATION_ID = 'N7Xz8vuxjzsKbiffxZeYoXrjo7nBno2e3pksZnai';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'sdl95ibeRAy6no9YdpAbfOcm8Cp9Z96mJ2t8cEiM';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


export async function addTickets({festival}, counter, userId) {

    const tickets = new Parse.Object('Tickets');
    tickets.set('festivalId', festival.id);
    tickets.set('ticketPrice', festival.ticketPrice);
    tickets.set('festivalName', festival.festivalName);
    tickets.set('ticketQuantity', counter);
    tickets.set('userId', userId);

    const addedTicket = Object.values({...tickets.attributes});

    console.log(addedTicket)
    
  

    try {

      // if(addedTicket.includes(userId)) {
      //   console.error('You have already bought a ticket!');
      // } else {
        const result = await tickets.save();
        // Access the Parse Object attributes using the .GET method
        console.log('Tickets created', result);
  
        const ticketItem = {...result.attributes,id: result.id }
  
        return ticketItem;
      // }
      
    } catch (error) {
      console.error('Error while creating Tickets: ', error);
    }
}

export async function deleteTicketsById(ticketId) {
  
  const query = new Parse.Query('Tickets');
  try {
    // here you put the objectId that you want to delete
    const object = await query.get(ticketId);
    try {
      const response = await object.destroy();
      console.log('Deleted ParseObject', response);
    } catch (error) {
      console.error('Error while deleting ParseObject', error);
    }
  } catch (error) {
    console.error('Error while retrieving ParseObject', error);
  }
 
}

export async function getAllTickets(festivalId) {

  const Tickets = Parse.Object.extend('Tickets');
  const query = new Parse.Query(Tickets);
  // You can also query by using a parameter of an object
  query.equalTo('festivalId', festivalId);
  try {
    const results = await query.find();

    const tickets = results.map((x, id) => ({...x.attributes, id: x.id}) );

    return tickets;

  } catch (error) {
    console.error('Error while fetching Tickets', error);
  }


}

export async function getAllTicketsByUserId(userId) {

  const Tickets = Parse.Object.extend('Tickets');
  const query = new Parse.Query(Tickets);
  // You can also query by using a parameter of an object
  query.equalTo('userId', userId);
  try {
    const results = await query.find();

    const tickets = results.map((x, id) => ({...x.attributes, id: x.id}) );

    return tickets;

  } catch (error) {
    console.error('Error while fetching Tickets', error);
  }


}

export async function getTicketOwner(festivalId, currentUser) {
  const Tickets = Parse.Object.extend('Tickets');
  const query = new Parse.Query(Tickets);

  query.equalTo('userId', currentUser);
  // You can also query by using a parameter of an object

  
  try {

    const results = await query.find();
    
    const userTickets = results.map((x, id) => ({...x.attributes, id: x.id}) );

    if(festivalId === userTickets.festivalId) {
      return currentUser;
    } else {
      return null;
    }


    // console.log(userTickets);


    // const tickets = results.map((x, id) => ({...x.attributes, id: x.id}) );

    // const userId = results.map((x, id) => ({...x.userId, id: x.id}) );
    // console.log(userId);

    // return tickets;

    // return results;

  } catch (error) {
    console.error('Error while fetching Tickets', error);
  }


}


