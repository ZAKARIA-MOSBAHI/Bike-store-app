import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './LoginStyle';

export default function Login({setPageType}) {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <Text style={styles.header}>Login To Your Account</Text>
        <View style={styles.inputsContainer}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <View style={styles.btnsContainer}>
          <Pressable style={[styles.btn, styles.btnPrimary]}>
            <Text style={styles.primaryBtnText}>Log in</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.btnOutline]}>
            <Text style={styles.outlineBtnText}>Continue as guest</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account ?</Text>
          <Pressable onPress={() => setPageType('Signup')}>
            <Text style={styles.footerAction}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
