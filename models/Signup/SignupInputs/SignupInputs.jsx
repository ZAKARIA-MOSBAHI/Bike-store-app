import React, {useEffect, useState} from 'react';
import {Alert, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './SignupInputsStyle';
import {useAppStore} from '../../../store/store';
import {useNavigation} from '@react-navigation/native';
import HidePasswordIcon from '../../../assets/icons/HidePasswordIcon';
import ShowPasswordIcon from '../../../assets/icons/ShowPasswordIcon';
import useFormValidation from '../../../hooks/useValidation';
import UploadIcon from '../../../assets/icons/UploadIcon';
import UploadPictureModal from '../../../components/UploadPictureModal/UploadPictureModal';
import {openCamera} from '../../../utils/openCamera';
import {openImageGallery} from '../../../utils/openGallery';
import {colors} from '../../../styles/colors';

export default function SignupInputs() {
  const {user, users} = useAppStore();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadMessage, setUploadMessage] = useState();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const {errors, handleSubmit, passwordSuccessMessage} = useFormValidation();
  const handleCameraClick = async () => {
    try {
      const image = await openCamera();
      if (image) {
        setUploadMessage('Image Uploaded Sucessfully');
        setFormData(prev => ({...prev, image: image}));
        setIsModalVisible(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleGalleryClick = async () => {
    try {
      const image = await openImageGallery();
      if (image) {
        setUploadMessage('Image Uploaded Sucessfully');
        setFormData(prev => ({...prev, image: image}));
        setIsModalVisible(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleTrashClick = () => {
    setUploadMessage();
    setFormData(prev => ({...prev, image: null}));
    setIsModalVisible(false);
  };

  useEffect(() => {
    console.info(user);
  }, [user]);
  useEffect(() => {
    console.log('users are modified');
    console.log(users);
  }, [users]);

  return (
    <>
      <View style={styles.inputsContainer}>
        {/* IMAGE INPUT */}
        <Pressable
          style={styles.imageInputContainer}
          onPress={() => setIsModalVisible(true)}>
          <UploadIcon width={40} height={40} />
          <Text
            style={[
              styles.imageInputText,
              uploadMessage ? {color: 'green'} : {color: colors.gray},
            ]}>
            {uploadMessage ? uploadMessage : 'Upload Your Profile Picture'}
          </Text>
        </Pressable>
        {/* NAME INPUT */}
        <View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={input =>
              setFormData(prev => ({...prev, name: input}))
            }
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}
        </View>
        {/* EMAIL INPUT */}
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
        {/* PASSWORD INPUT */}
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
        {/* CONFIRM PASSWORD INPUT */}
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
      <UploadPictureModal
        onTrashClick={handleTrashClick}
        onGalleryClick={handleGalleryClick}
        onCameraClick={handleCameraClick}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </>
  );
}
