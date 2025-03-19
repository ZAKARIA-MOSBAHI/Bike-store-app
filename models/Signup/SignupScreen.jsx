import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './SignupScreenStyle';
import SignupInputs from './SignupInputs/SignupInputs';
import {typography} from '../../styles/typography';
import {colors} from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';

export default function SignupScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <Text style={styles.header}>Create Your Account</Text>
        <SignupInputs />

        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            justifyContent: 'flex-end',
          }}>
          <Text style={[typography.p, {color: '#fff', textAlign: 'right'}]}>
            Already have an account ?
          </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text
              style={[
                typography.p,
                {
                  color: colors.secondary,
                  fontWeight: '600',
                  textDecorationLine: 'underline',
                },
              ]}>
              Log in
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
