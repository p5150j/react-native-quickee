import React from 'react';
import { View } from 'react-native';
//keep it simple stupid
const CardSection = (props) => {
  return (
  <View style={ styles.contarinerStyle }>
    { props.children }
  </View>

  );
};

const styles = {
  contarinerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
