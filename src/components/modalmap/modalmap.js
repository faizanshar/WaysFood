import { useState, useEffect } from "react";
import reactDom from "react-dom";
import mapboxgl from "mapbox-gl";
import "../cart/cart.css";

import mylocation from "../../public/icons/mylocation.png";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXVoZmFuc2hhciIsImEiOiJja3c2eWF4ZnMxNmYxMnltZTkzdzY5dTU1In0.XlPm99tFfcIvCg7Zgrl7Sg";

function ModalMap({ close }) {
  const [viewport, setViewport] = useState({
    latitude: -6.200000,
    longitude: 106.816666,
    zoom: 8,
    container: "",
  });

  const errorLocation = () => {};

  // Component DidMount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });

    function successLocation(position) {
      console.log(position);
      setUpMap([position.coords.longitude, position.coords.latitude]);
    //   setUpMap2([position.coords.longitude, position.coords.latitude]);
    }

    function setUpMap(center) {
      const map = new mapboxgl.Map({
        container: viewport.container,
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 20,
      });
      const map2 = new mapboxgl.Map({
          container: viewport.container,
          style: "mapbox://styles/mapbox/streets-v11",
          center:[viewport.longitude,viewport.latitude],
          zoom:20
      })

      const el = document.createElement("div");
      el.className = "marker";
      const marker2 = new mapboxgl.Marker(el).setLngLat([viewport.longitude,viewport.latitude]).addTo(map2)
      const marker = new mapboxgl.Marker(el).setLngLat(center).addTo(map);
    }
  }, []);

  return (
    <div className="bg-modal">
      <div
        style={{
          width: "90%",
          height: "30px",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <a
          onClick={close}
          style={{
            width: "40px",
            height: "100%",
            cursor: "pointer",
            display: "flex",
            fontSize: "20px",
            color: "white",
            backgroundColor: "transparent",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          X
        </a>
      </div>
      <div
        ref={(el) => (viewport.container = el)}
        style={{ width: "90%", height: "80vh", backgroundColor: "#ffffff" }}
      ></div>
    </div>
  );
}

export default ModalMap;
