import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  //cool lets DO WORK on the data... mmmmK?
  return (
  <Card>
    <CardSection>
      <View style={ styles.thumbContainer }>
        <Image style={ styles.thumbnailStyle } source={ { uri: props.album.thumbnail_image } } />
      </View>
      <View style={ styles.headerContentStyle }>
        <Text>
          { props.album.title }
          { props.album.artist }
        </Text>
      </View>
    </CardSection>
    <CardSection>
      <Image style={ styles.cover } source={ { uri: props.album.image } } />
    </CardSection>
    <CardSection>
      <Button onPress={ () => Linking.openURL( props.album.url ) }>
        Buy Now
      </Button>
    </CardSection>
  </Card>
  );
};
//I know, need to DRY this up and make things alittle more modular ^^

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10

  },
  cover: {
    height: 300,
    flex: 1,
    width: null

  }
};

export default AlbumDetail;
