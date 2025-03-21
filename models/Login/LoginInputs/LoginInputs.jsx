import React, {useState} from 'react';
import {Alert, Pressable, Text, TextInput, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useAppStore} from '../../../store/store';
import {styles} from './LoginInputsStyle';
import HidePasswordIcon from '../../../assets/icons/HidePasswordIcon';
import ShowPasswordIcon from '../../../assets/icons/ShowPasswordIcon';

export default function LoginInputs() {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const {getUser, resetError} = useAppStore();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  // Handle form validation
  const validate = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const {email, password} = formData;
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    setErrors({});
    await resetError();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {
      getUser(formData);

      const {error} = useAppStore.getState();

      if (error) {
        const errorType = Object.keys(error)[0];
        setErrors(prev => ({...prev, [errorType]: error[errorType]}));
      } else {
        Alert.alert('Connected', 'You are now connected to the application', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ]);
      }
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
          onPress={handleSubmit}>
          <Text style={styles.primaryBtnText}>Log in</Text>
        </Pressable>
        <Pressable
          style={[styles.btn, styles.btnOutline]}
          onPress={() => {
            try {
              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              });
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
