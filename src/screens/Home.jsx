import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { s } from '../styles/st-home';

export function Home() {
  const n = useNavigation();

  const goCamera = () => n.replace('Photo');

  return (
    <View style={s.container}>
      <Text style={s.homeTitle}>
        FotoAPI
      </Text>
      <TouchableOpacity onPress={goCamera} style={s.btnTakePhoto}>
        <Text style={s.btnText}>Abrir la camára</Text>
      </TouchableOpacity>
    </View>
  );
}