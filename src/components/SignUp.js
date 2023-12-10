import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>This is SignUp page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bodyText: {
    fontFamily: 'tahoma',
    fontSize: 20,
  },
});

export default SignUp;
