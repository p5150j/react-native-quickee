import React from 'React';
import { Text, TouchableOpacity } from 'react-native';

// reuse, reuse... :P
const Button = ({onPress, props, children}) => {
  return (
  <TouchableOpacity onPress={ onPress } style={ styles.buttonStyle }>
    <Text style={ styles.textStyle }>
      { children }
    </Text>
  </TouchableOpacity>
  );

};


const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    marginLeft: 5,
    marginRight: 5



  },

  textStyle: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10


  }
};


export default Button;
