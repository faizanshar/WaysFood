import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function AddFood() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        accessToken="pk.eyJ1IjoibXVoZmFuc2hhciIsImEiOiJja3c2eWF4ZnMxNmYxMnltZTkzdzY5dTU1In0.XlPm99tFfcIvCg7Zgrl7Sg"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default AddFood;

// import { useState, useRef, useEffect } from "react";
// import reactDom from "react-dom";
// import mapboxgl from "mapbox-gl";

// function AddFood() {

//   const [map, setMap] = useState(null);
//   const mapContainer = useRef(null);

//   useEffect(() => {
//     mapboxgl.accessToken =
//       "pk.eyJ1IjoibXVoZmFuc2hhciIsImEiOiJja3c2eWF4ZnMxNmYxMnltZTkzdzY5dTU1In0.XlPm99tFfcIvCg7Zgrl7Sg";
//     const initializeMap = ({ setMap, mapContainer }) => {
//       const map = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: "mapbox://styles/mapbox/streets-v11",
//         center: [-122.662323, 45.523751],
//         zoom: 12,
//       });

//     //   const bounds = [
//     //     [-123.069003, 45.395273],
//     //     [-122.303707, 45.612333],
//     //   ];
//     //   map.setMaxBounds(bounds);

//       const start = [-122.662323, 45.523751];

//       // create a function to make a directions request
//       async function getRoute(end) {
//         // make a directions request using cycling profile
//         // an arbitrary start will always be the same
//         // only the end or destination will change
//         const query = await fetch(
//           `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
//           { method: "GET" }
//         );
//         const json = await query.json();
//         // console.log('Ini JSON' + json.routes[0].)
//         const data = json.routes[0];
//         console.log('ini DATA' + data.geometry.coordinates)
//         const route = data.geometry.coordinates;
//         const geojson = {
//           type: "Feature",
//           properties: {},
//           geometry: {
//             type: "LineString",
//             coordinates: route,
//           },
//         };
//         // if the route already exists on the map, we'll reset it using setData
//         if (map.getSource("route")) {
//           map.getSource("route").setData(geojson);
//         }
//         // otherwise, we'll make a new request
//         else {
//           map.addLayer({
//             id: "route",
//             type: "line",
//             source: {
//               type: "geojson",
//               data: geojson,
//             },
//             layout: {
//               "line-join": "round",
//               "line-cap": "round",
//             },
//             paint: {
//               "line-color": "#3887be",
//               "line-width": 5,
//               "line-opacity": 0.75,
//             },
//           });
//         }
//         // add turn instructions here at the end
//       }

//       map.on("load", () => {
//         // make an initial directions request that
//         // starts and ends at the same location
//         getRoute(start);

//         // Add starting point to the map
//         map.addLayer({
//           id: "point",
//           type: "circle",
//           source: {
//             type: "geojson",
//             data: {
//               type: "FeatureCollection",
//               features: [
//                 {
//                   type: "Feature",
//                   properties: {},
//                   geometry: {
//                     type: "Point",
//                     coordinates: start,
//                   },
//                 },
//               ],
//             },
//           },
//           paint: {
//             "circle-radius": 10,
//             "circle-color": "#3887be",
//           },
//         });
//         map.on("click", (event) => {
//           const coords = Object.keys(event.lngLat).map(
//             (key) => event.lngLat[key]
//           );
//           const end = {
//             type: "FeatureCollection",
//             features: [
//               {
//                 type: "Feature",
//                 properties: {},
//                 geometry: {
//                   type: "Point",
//                   coordinates: coords,
//                 },
//               },
//             ],
//           };
//           if (map.getLayer("end")) {
//             map.getSource("end").setData(end);
//           } else {
//             map.addLayer({
//               id: "end",
//               type: "circle",
//               source: {
//                 type: "geojson",
//                 data: {
//                   type: "FeatureCollection",
//                   features: [
//                     {
//                       type: "Feature",
//                       properties: {},
//                       geometry: {
//                         type: "Point",
//                         coordinates: coords,
//                       },
//                     },
//                   ],
//                 },
//               },
//               paint: {
//                 "circle-radius": 10,
//                 "circle-color": "#f30",
//               },
//             });
//           }
//           getRoute(coords);
//         });
//       });
//     };
//       if (!map) initializeMap({ setMap, mapContainer });
//   }, [map]);

//   return (
//     <div>
//       <div
//         ref={(el) => (mapContainer.current = el)}
//         style={{ width: "100%", height: "100vh", backgroundColor: "#ffffff" }}
//       />
//     </div>
//   );
// }

// export default AddFood;

// import { useState, useEffect } from "react";
// import reactDom from "react-dom";
// import mapboxgl from "mapbox-gl";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoibXVoZmFuc2hhciIsImEiOiJja3c2eWF4ZnMxNmYxMnltZTkzdzY5dTU1In0.XlPm99tFfcIvCg7Zgrl7Sg";

// function AddFood() {
//   const [viewport, setViewport] = useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8,
//     container: "",
//   });

//   const errorLocation = () => {};

//   // Component DidMount
//   useEffect(() => {
//     // var mapboxDirections = require('@mapbox/mapbox-gl-directions')

//     // var directions = new MapboxDirections({
//     //     accessToken: mapboxgl.accessToken,
//     //     unit: 'metric',
//     //     profile: 'mapbox/cycling'
//     //   });

//     navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//       enableHighAccuracy: true,
//     });

//     function successLocation(position) {
//       console.log(position);
//       setUpMap([position.coords.longitude, position.coords.latitude]);
//     }

//     function setUpMap(center) {
//       const map = new mapboxgl.Map({
//         container: viewport.container,
//         style: "mapbox://styles/mapbox/streets-v11",
//         center: center,
//         zoom: 14,
//       });
//     //   map.addControl(directions,'top-left')
//     }
//   }, []);

//   return (
//     <div>
//       <div
//         ref={(el) => (viewport.container = el)}
//         style={{ width: "100%", height: "100vh", backgroundColor: "#ffffff" }}
//       />
//     </div>
//   );
// }

// export default AddFood;
