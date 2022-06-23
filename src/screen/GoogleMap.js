import { Text, StyleSheet, View, Keyboard, SafeAreaView, Image } from 'react-native'
import React, { Component } from 'react'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';

// AIzaSyDWKR - 3tcqhGr4 - Pp6yV3wY0dtLtCGP2p0

const GoogleAppAPI = "AIzaSyDWKR-3tcqhGr4-Pp6yV3wY0dtLtCGP2p0"

const homeplace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } }

export default class GoogleMap extends Component {

  state = {
    lat: 48.8152937,
    lng: 2.4597668
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(data => {
      this.setState({ lat: data.coords.latitude, lng: data.coords.longitude })
    })
  }


  render() {
    return (
      // <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{ width: '100%', alignItems: 'center', position: 'absolute', top: 0, marginTop: '1%', zIndex: 10 }}>
          {/* <Text>Hello</Text> */}
          <GooglePlacesAutocomplete
            placeholder='Search'
            autoFocus={false}
            minLength={2}
            returnKeyType={'default'}
            fetchDetails={true}
            keyboardShouldPersistTaps='handled'
            styles={{
              textInputContainer: {
                width: '90%',
                alignSelf: 'center',
                borderRadius: 10,
                borderWidth: 1,
              },
              textInput: {
                marginTop: "1%",
                marginHorizontal: '1%',
                alignSelf: 'center',
                backgroundColor: '#7f8fa6',
                color: '#000',
                fontSize: 16,
              },
              description: {
                width: '90%',
                alignSelf: "center",
              },
              listView: {
                width: '90%',
                marginTop: '1%',
                alignSelf: "center",
              },
              row: {
                alignItems: 'center',
                justifyContent: 'center',
              },
              predefinedPlacesDescription: {
                color: '#000',
                alignSelf: "flex-start"
              },
            }}
            onPress={(data, details = null) => {
              this.setState({ lat: details.geometry.location.lat, lng: details.geometry.location.lng })
              console.log(details.geometry.location);
            }}
            nearbyPlacesAPI='GoogleReverseGeocoding'
            query={{
              key: 'AIzaSyAAc4nDteYtMnSQgNmQViqjzncccCVH50Y',
              language: 'en',
              // type: '(regions)'
            }}
          />
        </View>
        <MapView
          style={[styles.map, { marginTop: '20%' }]}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: this.state.lat,
            longitude: this.state.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            latitude: this.state.lat,
            longitude: this.state.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          scrollEnabled={true}
          onPoiClick={(name) => console.log("name", name)}
        // onRegionChange={(region) => this.setState({ lat: region.latitude, lng: region.longitude })}
        // onRegionChangeComplete={(region) => this.setState({ lat: region.latitude, lng: region.longitude })}
        >
          <Marker coordinate={{
            latitude: this.state.lat,
            longitude: this.state.lng,
          }}
            title="testing"
            description='aksdnjjdsfklklakldkals'
          >
            <Image source={require('../assets/marker.png')} style={{ height: 60, width: 60 }} />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>Favorite Restaurant </Text>
                  <Text>Short Description</Text>
                  <Image
                    style={styles.image}
                    source={{ uri: 'https://www.dochipo.com/wp-content/uploads/2021/01/banner-1-1024x576.png' }}
                    resizeMode='contain'
                  />
                </View>
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
              <View />
            </Callout>
          </Marker>
        </MapView >
      </View >
      // </SafeAreaView>
    )
  }
}

