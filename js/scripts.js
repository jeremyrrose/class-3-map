mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nLXFyaSIsImEiOiJjazZncWRkZGowb3kyM25vZXkwbms2cW0xIn0.lbwola6y7YDdaKLMdjif1g';

var initialCenterPoint = [-73.987, 40.735]

var initOptions = {
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: initialCenterPoint,
  zoom: 10.67,
  hash: false
}

var map = new mapboxgl.Map(initOptions);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// code from the next step will go here!

// make a marker for each feature and add to the map
 new mapboxgl.Marker()
   .setLngLat([-73.974087,40.770718])
   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('I am in Central Park'))
   .addTo(map);

var studentData = [
  {
    "name": "Chris",
    "pizza_place": "Ben's Pizza",
    "longitude": -74.0027456,
    "latitude": 40.7302075,
    "program": "Wagner"
  },
  {
    "name": "Mikeala",
    "pizza_place": "Green Lantern",
    "longitude": -83.10538,
    "latitude": 42.50448,
    "program": "Wagner"
  },
  {
    "name": "Martha",
    "pizza_place": "L&B Spumoni Gardens",
    "longitude": -73.9813041,
    "latitude": 40.5947441,
    "program": "CUSP"
  },
  {
    "name": "Miles",
    "pizza_place": "Spunto",
    "longitude": -74.00464,
    "latitude": 40.72984,
    "program": "Wagner"
  },
  {
    "name": "Yiyong",
    "pizza_place": "Pizza Hut",
    "longitude": 112.556005,
    "latitude": 37.818758,
    "program": "Wagner"
  },
  {
    "name": "Jenee",
    "pizza_place": "Champion",
    "longitude": -73.997208,
    "latitude": 0.721615,
    "program": "Wagner"
  },
  {
    "name": "Sean",
    "pizza_place": "Table 87",
    "longitude": -73.9935622,
    "latitude": 40.6706709,
    "program": "Wagner"
  },
  {
    "name": "Max",
    "pizza_place": "Lucia's",
    "longitude": -73.830928,
    "latitude": 40.761042,
    "program": "CUSP"
  },
  {
    "name": "Olivia",
    "pizza_place": "Joe & Pats",
    "longitude": -73.9862301,
    "latitude": 40.728906,
    "program": "Wagner"
  },
  {
    "name": "Stef",
    "pizza_place": "Champion",
    "longitude": -74.0004546,
    "latitude": 40.7328837,
    "program": "Wagner"
  },
  {
    "name": "Mike",
    "pizza_place": "Percy's Pizza",
    "longitude": -73.9956117,
    "latitude": 40.7273838,
    "program": "SPS"
  },
  {
    "name": "Mei",
    "pizza_place": "Love & Dough",
    "longitude": -73.9896728,
    "latitude": 40.7029403,
    "program": "CUSP"
  },
  {
    "name": "Wayne",
    "pizza_place": "Paulie Gee's",
    "longitude": -73.957192,
    "latitude": 40.728376,
    "program": "Tandon"
  },
  {
    "name": "Doszhan",
    "pizza_place": "NY Pizza Suprema",
    "longitude": -73.9973929,
    "latitude": 40.7501162,
    "program": "Wagner"
  },
  {
    "name": "Shruti",
    "pizza_place": "Artichoke",
    "longitude": -74.00723,
    "latitude": 40.71305,
    "program": "Wagner"
  }
]

studentData.forEach(function(studentEntry) {
  // log to console to sanity check the loop and data
  // TODO: remove this before publishing
  console.log(studentEntry.name, studentEntry.longitude, studentEntry.latitude)

  // for each object in the studentData, add a marker to the map with a popup
  new mapboxgl.Marker()
    .setLngLat([studentEntry.longitude, studentEntry.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
     .setHTML(`${studentEntry.name} thinks ${studentEntry.pizza_place} is the best pizza in the world!`))
    .addTo(map);
})

// event listeners for the buttons

$('#china').on('click', function() {
  console.log('china')

  map.flyTo({
    center: [112.556005, 37.818758]
  })
})

$('#michigan').on('click', function() {
  console.log('michigan')

var michiganLngLat = [-83.10538, 42.50448]

  map.flyTo({
    center: michiganLngLat
  })
})

$('#nyc').on('click', function() {
  map.flyTo({
    center: initialCenterPoint
  })
})
