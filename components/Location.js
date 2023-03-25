import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import MapView from 'react-native-maps';
Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setAccessToken('pk.eyJ1IjoibWRpbHlhcyIsImEiOiJjbGZncGI2cHgwMTg5M3JvM2dhZ2lrbHFvIn0.HX16gXyT9K-I-uqvqaoJAQ');

const Location = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map}/>
      </View>
    </View>
  );
}

export default Location;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1
  }
});
// @ant-design/icons-react-native