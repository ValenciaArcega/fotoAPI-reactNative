import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { data } from "../data/photos";

export function Library() {
  // var
  Icon.loadFont();
  const n = useNavigation();
  // fn
  const goCamera = () => n.replace('Photo');

  return (
    <SafeAreaView>

      <View style={{
        height: 44,
        justifyContent: 'flex-end',
        borderBottomColor: '#b3b3b7',
        borderBottomWidth: 3
      }}>
        <TouchableOpacity onPress={goCamera} style={{
          width: '60%',
          gap: -2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon name="chevron-left" size={33} color="#181818" />
          <Text style={{ fontSize: 17, fontWeight: 600 }}>Regresar a la camára</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>

        <Text style={{
          marginTop: 12,
          alignSelf: 'center',
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: -1
        }}>Tus fotos recientes</Text>

        <View>
          {data.map(function (el, i) {
            return <Image key={i} style={{
              marginTop: 20,
              marginLeft: 12,
              borderRadius: 10,
              height: 132,
              width: 86
            }} source={{ uri: el }} />;
          })}
        </View>
      </ScrollView>


    </SafeAreaView>
  );
}