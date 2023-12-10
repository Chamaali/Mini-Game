import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>This is your profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#ecf9f2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bodyText: {
    fontFamily: 'tahoma',
    fontSize: 20,
    color: 'black',
  },
});

export default Profile;
