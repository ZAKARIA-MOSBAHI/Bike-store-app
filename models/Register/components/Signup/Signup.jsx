import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {typography} from '../../../../styles/typography';
import {colors} from '../../../../styles/colors';
import {styles} from './SignupStyle';

export default function Signup({setPageType}) {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <Text style={styles.header}>Create Your Account</Text>
        <View style={styles.inputsContainer}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
          <TextInput style={styles.input} placeholder="Confirm Password" />
        </View>
        <View style={styles.btnsContainer}>
          <Pressable style={[styles.btn, styles.btnPrimary]}>
            <Text style={styles.primaryBtnText}>Sign up</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.btnOutline]}>
            <Text style={styles.outlineBtnText}>Continue as guest</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            justifyContent: 'flex-end',
          }}>
          <Text style={[typography.p, {color: '#fff', textAlign: 'right'}]}>
            Already have an account ?
          </Text>
          <Pressable onPress={() => setPageType('Login')}>
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
