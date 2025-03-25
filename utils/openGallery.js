import ImageCropPicker from 'react-native-image-crop-picker';

export const openImageGallery = async () => {
  try {
    const image = await ImageCropPicker.openPicker({
      cropping: true,
      width: 300,
      height: 300,
      cropperCircleOverlay: true,
      includeBase64: true,
      compressImageQuality: 0.5,
    });
    const base64ImageUri = `data:${image.mime};base64,${image.data}`;
    return base64ImageUri;
  } catch (error) {
    if (error.message !== 'User cancelled image selection') {
      console.log('Gallery Error:', error.message);
    }
  }
};
