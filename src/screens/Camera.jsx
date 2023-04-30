import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Image, Text, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Camera } from 'expo-camera';
import { data as u } from "../data/photos";
import { s } from '../styles/st-camera';

Icon.loadFont();

export function Photo() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const n = useNavigation();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);

      u.push(data.uri);
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const goHome = () => n.replace('Home');
  const goLibrary = () => n.navigate('Library');

  // cm
  return (
    <SafeAreaView style={s.container}>

      <TouchableOpacity style={s.btnBack} onPress={goHome}>
        <Icon name="chevron-left" size={33} color="#181818" />
        <Text style={s.btnBackText}>Regresar</Text>
      </TouchableOpacity>

      <View style={s.wrapperCamera}>
        <Camera
          ref={ref => setCamera(ref)}
          style={s.camera}
          type={type}
        // ratio={'4:3'}
        />
      </View>

      <View style={s.containerToolBar}>

        <TouchableOpacity style={{ width: '34%' }} onPress={goLibrary}>
          {image && <Image style={s.image} source={{ uri: image }} />}
        </TouchableOpacity>

        <TouchableOpacity style={s.btnShot} onPress={() => takePicture()} >
          <Icon name="circle-slice-8" size={84} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={s.btnRotate}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <Icon name="camera-flip" size={32} color="#fff" />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
