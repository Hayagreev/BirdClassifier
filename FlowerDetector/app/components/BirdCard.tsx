import { BirdCardInterface } from "../types"

import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";


const BirdCard = ({birdName}: BirdCardInterface) => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={{justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 40, textAlign: 'center', backgroundColor: 'lightblue'}}>
                    {birdName}
                </Text>

                <Image
                style={{width: '100%'}}
                source={require('../../assets/images/sample_image.jpeg')}
                />

                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 30, textAlign: 'center', backgroundColor: 'lightgray'}}>
                        Fun Facts
                    </Text>

                    <View style={{backgroundColor: 'aqua'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>{`\u2022 Fun fact 1`}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>{`\u2022 Fun fact 1`}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>{`\u2022 Fun fact 1`}</Text>

                    </View>

                </View>

                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 30, textAlign: 'center', backgroundColor: 'lightgreen'}}>
                        Living Conditions
                    </Text>
                    
                    <View style={{backgroundColor: 'aqua'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Preferred Diet: Worms</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Preferred Weather: Sunny</Text>
                    </View>
                </View>


            </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default BirdCard