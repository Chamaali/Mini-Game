import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.viewText}>Tic-Tac-Toa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 0.25,
    backgroundColor: '#F666',
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewText: {
    fontFamily: 'cursive',
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default Home;
