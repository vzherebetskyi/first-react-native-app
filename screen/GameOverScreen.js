import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/success.png')}
            // source={{uri:  'https://lp-cms-production.imgix.net/2019-06/GettyImages-469835930_high.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4'}}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
        </View>
        <MainButton onPress={props.reset}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60,
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  }
});

export default GameOverScreen;
