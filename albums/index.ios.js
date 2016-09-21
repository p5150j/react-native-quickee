// index ios

// import a lib fo companent
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header'

//create a component
const App = () => (
<Header headerText={'Albums'} />  
);



AppRegistry.registerComponent('albums', () => App);