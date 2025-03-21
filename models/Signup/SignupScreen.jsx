import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './SignupScreenStyle';
import SignupInputs from './SignupInputs/SignupInputs';

import {useNavigation} from '@react-navigation/native';

export default function SignupScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <Text style={styles.header}>Create Your Account</Text>
        <SignupInputs />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account ?</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerAction}>Log in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
