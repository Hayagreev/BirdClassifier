import { View, Text } from "react-native";
import ImagePickerExample from "./components/ImagePicker";

export default function Index() {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 40, textAlign: 'center', backgroundColor: 'lightblue'}}>
        Bird Classifier
      </Text>
      {/* <BirdCard birdName="Asian-Green-Bee-Eater" /> */}
      <ImagePickerExample />
    </View>
  );
}
