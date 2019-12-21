

var url = 'http://localhost:1234/movies';

// CREATE
let res = await fetch(url + '/create', {
    method: 'POST',
    headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "Catch me if you can",
        year: 1995,
        length: 120,
        genre: "Drama",
        director: "Someone"
    })
});
let obj = await res.json();
let id = obj.id;

// READ
var res = await fetch(url + '/' + id, {
    method: 'GET',
    headers: {
        'Accept': "application/json"
    }
});
let o = await res.json();
console.log(o)

// UPDATE
var res = await fetch(url + '/' + id, {
    method: 'GET',
    headers: {
        'Accept': "application/json"
    }
});
let o = await res.json();
console.log(o)

// DELETE
await fetch(url + '/' + id + '/delete', {
    method: 'DELETE'
});
