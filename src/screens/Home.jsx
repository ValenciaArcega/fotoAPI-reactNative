import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { s } from '../styles/st-home';

export function Home() {
  const n = useNavigation();

  const goCamera = () => n.replace('Photo');
  const goLibrary = () => n.replace('Library');

  return (
    <View style={s.container}>
      <Text style={s.homeTitle}>
        FotoAPI
      </Text>
      <TouchableOpacity onPress={goCamera} style={s.btnTakePhoto}>
        <Text style={s.btnText}>Tomar fotografías</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goLibrary} style={[s.btnTakePhoto, s.btnSeePhotos]}>
        <Text style={s.btnText}>Ver las fotografías tomadas</Text>
      </TouchableOpacity>
    </View>
  );
}