import { useState } from 'react';
import { Button, Image, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

export default function ImagePickerExample() {
  const [image, setImage] = useState("");
  const [submitDisabled, setsubmitDisabled] = useState(true); 

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setsubmitDisabled(false);
    }
  };

  const handleSubmit = async () => {
    const manipResult = await ImageManipulator.manipulateAsync(
      image,
      [{ resize: { width: 180, height: 180 } }],
      { format: ImageManipulator.SaveFormat.JPEG }
    );
 
    console.log('Image submitted: ', manipResult.uri);
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {image && (
        <Button 
          title="Submit"
          onPress={handleSubmit}
          disabled={submitDisabled} // Disable submit button if no image is selected
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200
  },
});