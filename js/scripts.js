mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nLXFyaSIsImEiOiJjazZncWRkZGowb3kyM25vZXkwbms2cW0xIn0.lbwola6y7YDdaKLMdjif1g';

var initialCenterPoint = [-73.987, 40.735]

var initOptions = {
  container: 'map-container',
  style: 'mapbox://styles/mapbox/dark-v10',
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
  map.flyTo({
    center: [112.556005, 37.818758]
  })
})

$('#michigan').on('click', function() {

  var michiganLngLat = [-83.10538, 42.50448]

  map.flyTo({
    center: michiganLngLat
  })
})

$('#colombia').on('click', function() {
  var colombiaLngLat = [-73.997208, 0.721615]

  map.flyTo({
    center: colombiaLngLat
  })
})

$('#nyc').on('click', function() {
  map.flyTo({
    center: initialCenterPoint
  })
})
