import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../../styles/colors';
import {typography} from '../../../../styles/typography';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}>
      <View style={{maxWidth: 310, width: '100%', gap: 28}}>
        <Text style={[typography.h1, {color: '#fff'}]}>
          Login To Your Account
        </Text>
        <View style={{gap: 12}}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: colors.secondary,
              borderRadius: 8,
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 16,
            }}
            placeholder="Email"
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: colors.secondary,
              borderRadius: 8,
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 16,
            }}
            placeholder="Password"
          />
        </View>
        <Pressable
          style={{
            backgroundColor: colors.secondary,
            paddingVertical: 16,
            borderRadius: 8,
          }}>
          <Text
            style={[
              {color: '#fff', fontWeight: 'medium', textAlign: 'center'},
              typography.h3,
            ]}>
            Log in
          </Text>
        </Pressable>
        <View
          style={{flexDirection: 'row', gap: 8, justifyContent: 'flex-end'}}>
          <Text style={[typography.p, {color: '#fff', textAlign: 'right'}]}>
            Don't have an account ?
          </Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text
              style={[
                typography.p,
                {
                  color: colors.secondary,
                  fontWeight: '600',
                  textDecorationLine: 'underline',
                },
              ]}>
              Sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
