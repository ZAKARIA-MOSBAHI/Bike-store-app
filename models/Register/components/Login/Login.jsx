import React from 'react';
import {KeyboardAvoidingView, Pressable, Text, View} from 'react-native';
import {styles} from './LoginStyle';

import LoginInputs from './LoginInputs/LoginInputs';
export default function Login({setPageType}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.childContainer}>
        <Text style={styles.header}>Login To Your Account</Text>
        <LoginInputs />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account ?</Text>
          <Pressable onPress={() => setPageType('Signup')}>
            <Text style={styles.footerAction}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
