import * as MediaLibrary from 'expo-media-library';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import { Linking, Platform } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { colors as c } from '../styles/colors';
import { data } from "../data/photos";
import { s } from '../styles/st-library';

export function Library() {
  // var
  Icon.loadFont();
  const n = useNavigation();
  // fn
  const goCamera = () => n.replace('Photo');
  async function saveImage(i) {
    if (data) {
      try {
        await MediaLibrary.createAssetAsync(i);
      } catch (e) {
        console.log(e);
      }
    }
  }
  const openPhotosApp = async () => {
    if (Platform.OS === 'ios') {
      Linking.openURL(`photos-redirect://`);
    } else {
      Linking.openURL(`content://media/external/images/media`);
    }
  };

  useEffect(() => {
    (() => MediaLibrary.requestPermissionsAsync())();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={s.topBar}>
        <TouchableOpacity onPress={goCamera} style={s.topBarBtnBack}>
          <Icon name="chevron-left" size={33} color="#1864ab" />
          <Text style={{ fontSize: 17, fontWeight: 600 }}>Regresar a la camára</Text>
        </TouchableOpacity>
      </View>

      <ScrollView >
        <Text style={s.title}>Tus <Text style={s.h}>fotos</Text> recientes</Text>

        {data.map(function (el, i) {
          return (
            <View style={s.item}>
              <Image key={i} style={s.itemImage} source={{ uri: el }} />

              <View key={i + 1} style={s.containerDetails}>
                <Text style={s.containerDetailsText}>Fotografía-0{i + 1}</Text>
                <TouchableOpacity style={s.btnSaveAndOpen}
                  onPress={() => {
                    saveImage(el);
                    openPhotosApp();
                  }}>
                  <Text style={s.btnSaveAndOpenText}>Ver en Galeria</Text>
                </TouchableOpacity>
              </View>

            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}