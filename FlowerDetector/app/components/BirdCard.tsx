import { BirdCardInterface } from "../types"
import { useState } from 'react';

import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";

import db from "@react-native-firebase/database";

import Images from '../../assets/images/index';


const BirdCard = ({birdName}: BirdCardInterface) => {

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
  })

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={{justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 40, textAlign: 'center', backgroundColor: 'lightblue'}}>
                    {birdName}
                </Text>

                <Image
                    style={{width: '100%'}}
                    source={Images[birdName]}
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

export default BirdCard