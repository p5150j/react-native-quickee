import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
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
  </Card>
  );
};

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
