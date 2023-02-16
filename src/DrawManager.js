// import L from 'leaflet';
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  Marker,
  Circle
} from "react-leaflet";

import EditControl from "./EditControl";
// import { CoordinatesControl } from 'react-leaflet-coordinates';
import Toolbar from "./Toolbar";
// import PolylineMeasure from './PolylineMeasure';

import "./App.css";

// import solarPNG from './smart-house.png';

// Save polygon on Refresh
const VisualizeMapInstance = () => {
  // const map = useMap();

  // // console.log({ map });
  return null;
};
export default function DrawManager() {
  // const map = useMap();
  // console.log(map);
  const _onEdited = (e) => {
    let numEdited = 0;
    e.layers.eachLayer((layer) => {
      numEdited += 1;
    });
    console.log(`_onEdited: edited ${numEdited} layers`, e);

    // this._onChange();
  };

  const _onCreated = (e) => {
    let type = e.layerType;
    // let layer = e.layer;
    if (type === "marker") {
      // Do marker specific actions
      console.log("_onCreated: marker created", e);
    } else {
      console.log("_onCreated: something else created:", type, e);
    }
    // Do whatever else you need to. (save to db; etc)

    // _onChange();
  };

  const _onDeleted = (e) => {
    let numDeleted = 0;
    e.layers.eachLayer((layer) => {
      numDeleted += 1;
    });
    console.log(`onDeleted: removed ${numDeleted} layers`, e);

    this._onChange();
  };

  const _onMounted = (drawControl) => {
    console.log("_onMounted", drawControl);
  };

  const _onEditStart = (e) => {
    console.log("_onEditStart", e);
  };

  const _onEditStop = (e) => {
    console.log("_onEditStop", e);
  };

  // const _onDeleteStart = (e) => {
  //   console.log('_onDeleteStart', e);
  // };

  // const _onDeleteStop = (e) => {
  //   console.log('_onDeleteStop', e);
  // };
  return (
    <div className="App d-flex">
      <MapContainer
        className="mapbox-width"
        center={[27.1767, 78.0081]}
        zoom={13}
        style={{ width: "100%", height: "900px" }}
      >
        {/* <ImageOverlay
          url={solarPNG}
          bounds={[
            [
              [27.1958, 77.9846],
              [27.1847, 77.9976],
            ],
          ]}
        />
        <ImageOverlay
          url={solarPNG}
          bounds={[
            [
              [27.20792, 77.96258],
              [27.2054, 77.96524],
            ],
          ]}
        /> */}
        {/* <PolylineMeasure /> */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <PolylineMeasure /> */}
        {/* <CoordinatesControl coordinates='decimal' position='bottomleft' /> */}

        <FeatureGroup>
          {[50, 100, 200, 300].map((radius, idx) => (
            <Circle key={idx} center={[27.19, 78.01]} radius={radius} />
          ))}

          <Marker position={[27.17, 77.97]}></Marker>

          <EditControl
            position="topright"
            onEdited={_onEdited}
            onCreated={_onCreated}
            onDeleted={_onDeleted}
            onMounted={_onMounted}
            onEditStart={_onEditStart}
            onEditStop={_onEditStop}
            // onDeleteStart={this._onDeleteStart}
            // onDeleteStop={this._onDeleteStop}
            draw={
              {
                // rectangle: false,
              }
            }
          />
        </FeatureGroup>
        <VisualizeMapInstance />
      </MapContainer>
      <Toolbar />
    </div>
  );
}
