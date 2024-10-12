import React from 'react';
import { Dimensions, Text, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', title: 'Item 1', uri: 'https://picsum.photos/200/300?grayscale' },
  { id: '2', title: 'Item 2', uri: 'https://picsum.photos/seed/picsum/200/300' },
  { id: '3', title: 'Item 3', uri: 'https://picsum.photos/id/237/200/300' },
];

export default function CarouselExample() {
  return (
    <View style={{ marginTop: 25,flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width / 2.2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselItem: {
    borderColor: '#ddd',
    height: 200
  },
  image: {
    width: '88%',
    height: '70%',
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
