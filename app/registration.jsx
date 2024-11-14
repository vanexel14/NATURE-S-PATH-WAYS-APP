import React from 'react';
import { Text, View, TextInput, ImageBackground, StyleSheet } from 'react-native';

const Registration = () => {
  return (
    <ImageBackground
      source={require('../assets/images/WorldNature.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          keyboardType="default"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly transparent background for better readability
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333333',
    color: '#ffffff',
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
});

export default Registration;
