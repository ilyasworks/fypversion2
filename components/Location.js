import { Text, View, StyleSheet } from "react-native";
// import MapboxGl from "@rnmapbox/maps"
import MapboxGl from "@rnmapbox/maps"

const tokenmapbox = "pk.eyJ1IjoibWRpbHlhcyIsImEiOiJjbGZncGI2cHgwMTg5M3JvM2dhZ2lrbHFvIn0.HX16gXyT9K-I-uqvqaoJAQ"

MapboxGl.setAccessToken(tokenmapbox);

// import "./mapbox-gl.css"

export default function Location({ navigation }) {

  
  const coordinateExample = [41.40338, 2.17403];
  return (

<MapboxGl.MapView style={defaultStyle.sources.map} styleJSON={JSON.stringify(defaultStyle)}>

<View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Hello, World!</Text>
    </View>
  

  <MapboxGl.Camera
  ZoomLavel={15}
  centerCoordinate={coordinateExample}
  />
  <MapboxGl.PointAnnotation 
  id="point" coordinate={coordinateExample}/>

</MapboxGl.MapView>
  );
}



const defaultStyle = {
  version: 8,
  name: 'Land',
  sources: {
    map: {
      type: 'raster',
      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      minzoom: 1,
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': '#f2efea',
      },
    },
    {
      id: 'map',
      type: 'raster',
      source: 'map',
      paint: {
        'raster-fade-duration': 100,
      },
    },
  ],
};