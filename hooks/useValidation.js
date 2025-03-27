import {useState} from 'react';
import {useAppStore} from '../store/store';
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
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        }
        if (value.trim().length < 4) {
          return 'Name should be at least 4 characters long';
        }
        break;
      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        }
        if (!EMAIL_REGEX.test(value)) {
          return 'Invalid email format';
        }
        break;

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
      const nameError = validateField('name', formData.name, isSignup);
      if (nameError) {
        newErrors.name = nameError;
        isValid = false;
      }
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
      addUser({
        image: formData.image,
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      navigation.push('Login', {
        email: formData.email,
        password: formData.password,
      });
      return;
    } else {
      await getUser(formData);

      // getting the error state here to get the newer version
      const {error} = useAppStore.getState();
      if (error) {
        setErrors(prev => ({...prev, ...error}));
      } else {
        setErrors({});
        // resetting the navigation , so that the user start a new navigation when login in
        // to not let the back handler to go back to the previous page (before he logged in)
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });

        // persisting data ...
      }
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
