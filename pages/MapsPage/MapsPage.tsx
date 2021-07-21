import { Styles } from "./MapsPage.style";
import { mockedItems } from "./fixtures";
import LineItem from "../../molecules/LineItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

import React, { useState } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface Props {}

const MapsPage: React.FC<Props> = ({}) => {
  const items = useSelector((state: RootState) => state.items.items);
  const imageURL = 'https://www.pngitem.com/pimgs/b/141-1414524_map-marker-png.png';
  const [mapRegion, setmapRegion] = useState({
    latitude: 35.84295,
    longitude: -5.36100,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

   return (
    <>
      <Styles.Container>


      </Styles.Container>
      <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion}> 
<Image source={{uri:imageURL}} style={{height: 35, width:35 }}/>
 </Marker>
      </MapView>
    </View>
  
    </>
  ); 
};



export default MapsPage; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
