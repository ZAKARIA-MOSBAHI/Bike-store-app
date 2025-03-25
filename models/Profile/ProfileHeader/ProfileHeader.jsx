import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useAppStore} from '../../../store/store';
import {styles} from './ProfileHeaderStyle';
import CameraIcon from '../../../assets/icons/CameraIcon';
import UploadPictureModal from '../../../components/UploadPictureModal/UploadPictureModal';
import {openCamera} from '../../../utils/openCamera';
import {openImageGallery} from '../../../utils/openGallery';
import PenIcon from '../../../assets/icons/PenIcon';
const profileImage = require('../../../assets/images/user-avatar.jpg');
export default function ProfileHeader() {
  const {user, setUser} = useAppStore();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = () => {
    setIsModalVisible(true);
  };
  const handleCameraClick = async () => {
    try {
      const image = await openCamera();
      if (image) {
        setSelectedImage(image);
        setUser(image, 'image');
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
        setSelectedImage(image);
        setUser(image, 'image');
        setIsModalVisible(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleTrashClick = () => {
    setUser(null, 'image');
    setIsModalVisible(false);
  };
  useEffect(() => {
    setSelectedImage(user.image);
  }, [user]);

  return (
    <View style={styles.container}>
      <Pressable onPress={openModal} style={styles.subContainer}>
        <Image
          source={selectedImage ? {uri: selectedImage} : profileImage}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <View style={styles.cameraIcon}>
          <CameraIcon />
        </View>
      </Pressable>
      <View style={styles.userInfos}>
        <Text style={styles.userName}>Zakaria</Text>
        <Text style={styles.userEmail}>{user ? user.email : ''}</Text>
        <Pressable
          style={styles.penIcon}
          onPress={() => console.log('pen clicked')}>
          <PenIcon width={24} height={24} />
        </Pressable>
      </View>
      <UploadPictureModal
        onCameraClick={handleCameraClick}
        onGalleryClick={handleGalleryClick}
        onTrashClick={handleTrashClick}
        setSelectedImage={setSelectedImage}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </View>
  );
}
