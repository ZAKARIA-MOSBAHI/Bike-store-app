import React from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import {styles} from './UploadPictureModalStyle';
import CameraIcon from '../../assets/icons/CameraIcon';
import TrashIcon from '../../assets/icons/TrashIcon';
import GalleryIcon from '../../assets/icons/GalleryIcon';

export default function UploadPictureModal({
  isModalVisible,
  setIsModalVisible,
  onCameraClick,
  onGalleryClick,
  onTrashClick,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}>
      <Pressable
        onPress={() => setIsModalVisible(false)}
        style={styles.background}>
        {/* Modal content */}
        <View style={styles.container}>
          <Text style={styles.modalHeading}>Profile Picture</Text>
          <View style={styles.actionsRow}>
            <Pressable style={styles.action} onPress={onCameraClick}>
              <CameraIcon width={36} height={36} />
              <Text style={styles.actionsText}>Camera</Text>
            </Pressable>
            <Pressable style={styles.action} onPress={onGalleryClick}>
              <GalleryIcon />
              <Text style={styles.actionsText}>Gallery</Text>
            </Pressable>
            <Pressable style={styles.action} onPress={onTrashClick}>
              <TrashIcon width={38} height={38} />
              <Text style={styles.actionsText}>Remove</Text>
            </Pressable>
          </View>
          <Pressable
            style={styles.cancelBtn}
            onPress={() => setIsModalVisible(false)}>
            <Text style={styles.textBtn}>Cancel</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}
