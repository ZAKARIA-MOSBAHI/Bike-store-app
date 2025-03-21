import React, {useEffect, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './LoginInputsStyle';
import HidePasswordIcon from '../../../assets/icons/HidePasswordIcon';
import ShowPasswordIcon from '../../../assets/icons/ShowPasswordIcon';
import useFormValidation from '../../../hooks/useValidation';

export default function LoginInputs() {
  const navigation = useNavigation();
  const route = useRoute();
  const [showPassword, setShowPassword] = useState(false);

  // Initialize formData with route params or empty strings
  const [formData, setFormData] = useState({
    email: route.params?.email || '',
    password: route.params?.password || '',
  });
  const {errors, handleSubmit} = useFormValidation();

  return (
    <>
      <View style={styles.inputsContainer}>
        <View>
          <TextInput
            style={styles.input}
            value={formData.email}
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
              value={formData.password}
              secureTextEntry={showPassword ? false : true}
              placeholder="Password"
              onChangeText={input =>
                setFormData(prev => ({...prev, password: input}))
              }
            />
            {showPassword ? (
              <Pressable
                style={styles.passwordIcon}
                onPress={() => setShowPassword(false)}>
                <HidePasswordIcon />
              </Pressable>
            ) : (
              <Pressable
                style={styles.passwordIcon}
                onPress={() => setShowPassword(true)}>
                <ShowPasswordIcon />
              </Pressable>
            )}
          </View>
          <Pressable>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </Pressable>
          {errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
        </View>
      </View>
      <View style={styles.btnsContainer}>
        <Pressable
          style={[styles.btn, styles.btnPrimary]}
          onPress={() => handleSubmit(formData)}>
          <Text style={styles.primaryBtnText}>Log in</Text>
        </Pressable>
        <Pressable
          style={[styles.btn, styles.btnOutline]}
          onPress={() => {
            try {
              navigation.replace('Home');
            } catch (error) {
              console.log(error);
            }
          }}>
          <Text style={styles.outlineBtnText}>Continue as guest</Text>
        </Pressable>
      </View>
    </>
  );
}
