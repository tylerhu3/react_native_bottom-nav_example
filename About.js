import * as React from 'react';
import {Image, StyleSheet, Button, Text, View} from 'react-native';
export default function About({ navigation }) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'darkslateblue',
      fontSize: 30,
    },
    img: {
      backgroundColor: 'pink',
      borderRadius: 100 / 2,
      width: 100,
      height: 100,
    },
  });

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View >
          <Image
          style={styles.img}
          source={{uri: 'https://tylerhu.netlify.com/static/media/ProfileHead.9e7cf17e.png'}} />
        </View> 
        <Text>About screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
