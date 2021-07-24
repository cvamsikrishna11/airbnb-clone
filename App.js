import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Router from './src/navigation/Router';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
}

// import React, { useEffect, useRef } from 'react';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const GooglePlacesInput = () => {
//   const ref = useRef();

//   useEffect(() => {
//     ref.current?.setAddressText('Some Text');
//   }, []);

//   return (
//     <GooglePlacesAutocomplete
//       ref={ref}
//       placeholder='Search'
//       onPress={(data, details = null) => {
//         // 'details' is provided when fetchDetails = true
//         console.log(data, details);
//       }}
//       query={{
//         key: 'AIzaSyD8VzUn4sicSjjDLcF4q0J5twKhmyHDVUk',
//         language: 'en',
//       }}
//     />
//   );
// };

// export default GooglePlacesInput;