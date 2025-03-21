import React from 'react';
import {KeyboardAvoidingView, Pressable, Text, View} from 'react-native';

import LoginInputs from './LoginInputs/LoginInputs';
import {styles} from './LoginScreenStyle';
import {useNavigation} from '@react-navigation/native';
export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.childContainer}>
        <Text style={styles.header}>Login To Your Account</Text>
        <LoginInputs />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account ?</Text>
          <Pressable onPress={() => navigation.push('Signup')}>
            <Text style={styles.footerAction}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
