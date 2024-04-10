console.log('Hi')


// Get the user's coordinates:                                                              
async function getCoords() {
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}



async function renderMap() {
    let userLocation = await getCoords()
    const myMap = L.map('map', {
        center: userLocation,
        zoom: 15,

    });
    L.marker(userLocation).addTo(myMap)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: '15',
    }).addTo(myMap);

}
renderMap()


/* 
target select element
add eventlistener
-event
-callback
*/


let locations = document.getElementById('locations')
console.log(locations)
locations.addEventListener('change', (event) => {
    console.log('HiHI')
    let userSelection = event.target.value
    console.log(userSelection)
})



// Foursquare - js request i got from the website
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'fsq3wsUny4SwHTqYxF9CjPkn4slrYib33oh8evfSdhXvvIw='
    }
};

fetch('https://api.foursquare.com/v3/places/search?query=coffee&ll=36.142777%2C-115.324848&radius=1000', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


