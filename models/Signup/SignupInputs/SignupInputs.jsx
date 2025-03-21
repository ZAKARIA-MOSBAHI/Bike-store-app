import React, {useState} from 'react';
import {Alert, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './SignupInputsStyle';
import {useAppStore} from '../../../store/store';
import {useNavigation} from '@react-navigation/native';
import HidePasswordIcon from '../../../assets/icons/HidePasswordIcon';
import ShowPasswordIcon from '../../../assets/icons/ShowPasswordIcon';

export default function SignupInputs() {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const {addUser, resetError} = useAppStore();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const {email, password, confirmPassword} = formData;
    const newErrors = {};
    if (email.trim().length === 0) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (password.trim().length === 0) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (confirmPassword.trim().length === 0) {
      newErrors.confirmPassword = 'Confirmed Password is required';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword =
        'Confirmed Password should match the password';
    }
    return newErrors;
  };

  const handleSubmit = async () => {
    setErrors({});
    await resetError();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      const {email, password} = formData;
      addUser({
        email: email,
        password: password,
      });
      Alert.alert('Done !', 'Your Account is created you can login now', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
          style: 'OK',
        },
      ]);
    } else {
      setErrors(formErrors);
    }
  };

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
          onPress={handleSubmit}>
          <Text style={styles.primaryBtnText}>Sign up</Text>
        </Pressable>
      </View>
    </>
  );
}
