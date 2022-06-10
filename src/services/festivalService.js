
export function getAll() {
    return fetch('https://firestore.googleapis.com/v1/projects/festivals-50ce8/databases/(default)/documents/festivals/')
           .then(res => res.json())

}



// export function getById(id) {
//     return fetch('')
//            .then(res => res.json())
// }

// export function getLatest() {
//     return fetch('')
//            .then(res => res.json())
// }