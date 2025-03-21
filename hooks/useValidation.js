import {useState} from 'react';
import {useAppStore} from '../store/store';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_STRENGTH = {
  minLength: 6,
  hasUpper: /[A-Z]/,
  hasNumber: /\d/,
  hasSpecial: /[@$!%*?&]/,
};

const useFormValidation = () => {
  // TO REDIRECT USERS IN CASE OF SUCCESS
  const navigation = useNavigation();
  const {getUser, resetError, addUser} = useAppStore();
  // ERRORS WILL BE SHOWN IN THE VIEW
  const [errors, setErrors] = useState({});
  // STATE TO SHOW MESSAGES LIKE : 'one special char needed'
  const [passwordValidity, setPasswordValidity] = useState({
    isValid: false,
    hasMinLength: false,
    hasUpper: false,
    hasNumber: false,
    hasSpecial: false,
  });

  const validatePasswordStrength = (password, isSignup) => {
    if (!isSignup) {
      return {isValid: true};
    }

    const validity = {
      hasMinLength: password.length >= PASSWORD_STRENGTH.minLength,
      hasUpper: PASSWORD_STRENGTH.hasUpper.test(password),
      hasNumber: PASSWORD_STRENGTH.hasNumber.test(password),
      hasSpecial: PASSWORD_STRENGTH.hasSpecial.test(password),
    };

    return {
      ...validity,
      isValid: Object.values(validity).every(Boolean),
    };
  };
  // FUNCTION THAT VALIDATE EACH FIELD PASSED BY TYPE
  const validateField = (fieldName, value, isSignup = false) => {
    switch (fieldName) {
      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        }
        if (!EMAIL_REGEX.test(value)) {
          return 'Invalid email format';
        }
        return '';

      case 'password': {
        if (!value.trim()) {
          return 'Password is required';
        }

        const strength = validatePasswordStrength(value, isSignup);
        setPasswordValidity(strength);
        if (isSignup && !strength.isValid) {
          const missing = [];
          if (!strength.hasMinLength) {
            missing.push('6+ characters');
          }
          if (!strength.hasUpper) {
            missing.push('uppercase letter');
          }
          if (!strength.hasNumber) {
            missing.push('number');
          }
          if (!strength.hasSpecial) {
            missing.push('special character');
          }
          return missing.length ? `Missing: ${missing.join(', ')}` : '';
        }
        return '';
      }

      case 'confirmPassword':
        if (!value.trim()) {
          return 'Confirm password is required';
        }
        return '';

      default:
        return '';
    }
  };
  /*FUNCTION THAT HANDLES FORM VALIDATION 
 returns : if the form data is valid , and sets the error state of each field 
*/
  const validateForm = (formData, isSignup) => {
    const newErrors = {};
    let isValid = true;

    const emailError = validateField('email', formData.email, isSignup);
    if (emailError) {
      newErrors.email = emailError;
      isValid = false;
    }

    const passwordError = validateField(
      'password',
      formData.password,
      isSignup,
    );
    if (passwordError) {
      newErrors.password = passwordError;
      isValid = false;
    }

    if (isSignup) {
      const confirmError = validateField(
        'confirmPassword',
        formData.confirmPassword,
        true,
      );
      const passwordMatch = formData.password === formData.confirmPassword;

      if (confirmError || !passwordMatch) {
        newErrors.confirmPassword = passwordMatch
          ? confirmError
          : 'Passwords do not match';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };
  /*FUNCTION THAT HANDLES USER 
 params : formdata ,  isSignup(if true it'll handle the signup form otherwise it'll handle the login form)
*/
  const handleSubmit = async (formData, isSignup = false) => {
    await resetError();
    setErrors({});

    if (!validateForm(formData, isSignup)) {
      return false;
    }

    if (isSignup) {
      addUser({email: formData.email, password: formData.password});
      return Alert.alert('Success', 'Account created successfully !', [
        {
          text: 'OK',
          onPress: () => {
            navigation.push('Login', {
              email: formData.email,
              password: formData.password,
            });
          },
        },
      ]);
    } else {
    }
    await getUser(formData);
    const {error} = useAppStore.getState();
    if (error) {
      setErrors(prev => ({...prev, ...error}));
    } else {
      Alert.alert('Success', 'You are now  logged in', [
        {
          text: 'OK',
          onPress: () => {
            setErrors({});
            navigation.replace('Home');
          },
        },
      ]);
      // persisting data ...
    }
  };

  const getPasswordSuccessMessage = () => {
    if (passwordValidity.isValid) {
      return 'Password meets all requirements!';
    }
    return '';
  };
  return {
    validateField,
    errors,
    passwordValidity,
    passwordSuccessMessage: getPasswordSuccessMessage(),
    handleSubmit,
  };
};

export default useFormValidation;
