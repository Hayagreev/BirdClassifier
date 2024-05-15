import { useState } from 'react';
import { Text, View, Image, ScrollView, SafeAreaView, Dimensions } from "react-native";
import db from "@react-native-firebase/database";
import Images from '../../assets/images/index';
import { useLocalSearchParams } from "expo-router";

type SearchParamType = {
    birdName: string;
  };

export default function BirdCard() {
  const params = useLocalSearchParams<SearchParamType>();
  const birdName: string = params.birdName!;

  const [funFact1, setFunFact1] = useState("");
  const [funFact2, setFunFact2] = useState("");
  const [funFact3, setFunFact3] = useState("");


  const [prefDiet, setPrefDiet] = useState("");
  const [prefWeather, setPrefWeather] = useState("");


  let birdRef = db().ref(`/` + birdName);
  birdRef.once('value').then((snapshot)=> {
    const birdData = snapshot.val();
    setFunFact1(birdData.funFact1);
    setFunFact2(birdData.funFact2);
    setFunFact3(birdData.funFact3);

    setPrefDiet(birdData.prefDiet);
    setPrefWeather(birdData.prefWeather);
  }).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
     // ADD THIS THROW error
      throw error;
    });

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={{justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 40, textAlign: 'center', backgroundColor: 'lightblue'}}>
                    {birdName}
                </Text>


                <Image
                    style={{width: Dimensions.get('window').width,
                        height: 408 * Dimensions.get('window').width/541}}
                    source={Images[birdName]}
                    resizeMode="contain"
                />

                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 30, textAlign: 'center', backgroundColor: 'lightgray'}}>
                        Fun Facts
                    </Text>

                    <View style={{backgroundColor: 'aqua'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>{`\u2022` + funFact1}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>{`\u2022` + funFact2}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>{`\u2022` + funFact3}</Text>

                    </View>

                </View>

                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 30, textAlign: 'center', backgroundColor: 'lightgreen'}}>
                        Living Conditions
                    </Text>
                    
                    <View style={{backgroundColor: 'aqua'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Preferred Diet: {prefDiet}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Preferred Weather: {prefWeather}</Text>
                    </View>
                </View>


            </View>

        </ScrollView>
    </SafeAreaView>
  )
}