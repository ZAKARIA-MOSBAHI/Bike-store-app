import React, {useEffect, useState} from 'react';
import {Alert, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './SignupInputsStyle';
import {useAppStore} from '../../../store/store';
import {useNavigation} from '@react-navigation/native';
import HidePasswordIcon from '../../../assets/icons/HidePasswordIcon';
import ShowPasswordIcon from '../../../assets/icons/ShowPasswordIcon';
import useFormValidation from '../../../hooks/useValidation';

export default function SignupInputs() {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const {errors, handleSubmit, passwordSuccessMessage} = useFormValidation();

  return (
    <>
      <View style={styles.inputsContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={input =>
              setFormData(prev => ({...prev, email: input}))
            }
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}
        </View>
        <View>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={input =>
                setFormData(prev => ({...prev, password: input}))
              }
              secureTextEntry={showPassword.password ? false : true}
            />
            {showPassword.password ? (
              <Pressable
                style={styles.passwordIcon}
                onPress={() =>
                  setShowPassword(prev => ({...prev, password: false}))
                }>
                <HidePasswordIcon />
              </Pressable>
            ) : (
              <Pressable
                style={styles.passwordIcon}
                onPress={() =>
                  setShowPassword(prev => ({...prev, password: true}))
                }>
                <ShowPasswordIcon />
              </Pressable>
            )}
          </View>
          {passwordSuccessMessage.length > 0 && (
            <Text style={{color: 'green'}}>{passwordSuccessMessage}</Text>
          )}
          {errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
        </View>
        <View>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={input =>
                setFormData(prev => ({...prev, confirmPassword: input}))
              }
              secureTextEntry={showPassword.confirmPassword ? false : true}
            />
            {showPassword.confirmPassword ? (
              <Pressable
                style={styles.passwordIcon}
                onPress={() =>
                  setShowPassword(prev => ({...prev, confirmPassword: false}))
                }>
                <HidePasswordIcon />
              </Pressable>
            ) : (
              <Pressable
                style={styles.passwordIcon}
                onPress={() =>
                  setShowPassword(prev => ({...prev, confirmPassword: true}))
                }>
                <ShowPasswordIcon />
              </Pressable>
            )}
          </View>
          {errors.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}
        </View>
      </View>
      <View style={styles.btnsContainer}>
        <Pressable
          style={[styles.btn, styles.btnPrimary]}
          onPress={() => handleSubmit(formData, true)}>
          <Text style={styles.primaryBtnText}>Sign up</Text>
        </Pressable>
      </View>
    </>
  );
}
