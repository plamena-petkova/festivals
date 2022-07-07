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
    
    try {
      const result = await tickets.save();
      // Access the Parse Object attributes using the .GET method
      console.log('Tickets created', result);

      const ticketItem = {...result.attributes,id: result.id }

      return ticketItem;
      
    } catch (error) {
      console.error('Error while creating Tickets: ', error);
    }
}

export async function getAllTickets(userId) {

  const Tickets = Parse.Object.extend('Tickets');
  const query = new Parse.Query(Tickets);
  // You can also query by using a parameter of an object
  query.equalTo('userId', userId);
  try {
    const results = await query.find();
    // for (const object of results) {
    //   // Access the Parse Object attributes using the .GET method
    //   const festivalId = object.get('festivalId')
    //   const ticketQuantity = object.get('ticketQuantity')
    //   const userId = object.get('userId')
    //   console.log(festivalId);
    //   console.log(ticketQuantity);
    //   console.log(userId);
    // }

    const tickets = results.map((x, id) => ({...x.attributes, id: x.id}) );

    return tickets;

  } catch (error) {
    console.error('Error while fetching Tickets', error);
  }


}


