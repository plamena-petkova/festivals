import Parse from 'parse/dist/parse.min.js';

const PARSE_APPLICATION_ID = 'N7Xz8vuxjzsKbiffxZeYoXrjo7nBno2e3pksZnai';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'sdl95ibeRAy6no9YdpAbfOcm8Cp9Z96mJ2t8cEiM';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


export async function getAll() {
    // create your Parse Query using the Person Class you've created
    const query = new Parse.Query('festival');
    // run the query
    const Festival = await query.find();
    
    //add id to the result
    const result = Festival.map((x, id) => ({...x.attributes, id: x.id}) );

    return result;

}

export async function getLatest() {
    const query = new Parse.Query('festival');
    query.limit(3);
    // run the query
    const Festival = await query.find();
    
    //add id to the result
    const result = Festival.map((x, id) => ({...x.attributes, id: x.id}) );

    return result;
}


export async function getById(festivalId) {
  const query = new Parse.Query('festival');
    try {
      const Festival = await query.get(festivalId);
    
      const result = ({...Festival.attributes, id: Festival.id});
    
      return result;
    } catch(err) {
      console.log(err)
    }
    


}

export async function update(festival) {
        
  const query = new Parse.Query(festival);
  try {
    // here you put the objectId that you want to update
    const object = await query.get('xKue915KBG');
    object.set('festivalName', 'A string');
    object.set('imgUrlFest', 'A string');
    object.set('summary', 'A string');
    object.set('date', 'A string');
    object.set('location', 'A string');
    object.set('imgUrlLoc', 'A string');
    object.set('ticketPrice', 1);
    object.set('ownerId', 'A string');
    object.set('QNaw5osINz', { foo: 'bar' });
    try {
      const response = await object.save();
      // You can use the "get" method to get the value of an attribute
      // Ex: response.get("<ATTRIBUTE_NAME>")
      // Access the Parse Object attributes using the .GET method
      console.log(response.get('festivalName'));
      console.log(response.get('imgUrlFest'));
      console.log(response.get('summary'));
      console.log(response.get('date'));
      console.log(response.get('location'));
      console.log(response.get('imgUrlLoc'));
      console.log(response.get('ticketPrice'));
      console.log(response.get('ownerId'));
      console.log(response.get('QNaw5osINz'));
      console.log('festival updated', response);
    } catch (error) {
      console.error('Error while updating festival', error);
      }
    } catch (error) {
      console.error('Error while retrieving object festival', error);
    }

}

export async function addFestival(data) {

    const Festival = Parse.Object.extend("festival");
    const festival = new Festival();

    festival.set({
        festivalName: data.festivalName,
        imgUrlFest: data.imgUrlFest,
        summary: data.summary,
        date: data.date,
        location: data.location,
        imgUrlLoc: data.imgUrlLoc,
        ticketPrice: Number(data.ticketPrice),
        ownerId: data.ownerId
    });


    festival.save()
        .then((festival) => {
            
            // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + festival.id);
        }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
        });

}


export async function remove(festivalId) {
    
        const query = new Parse.Query('festival');
        try {
          // here you put the objectId that you want to delete
          const object = await query.get(festivalId);
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