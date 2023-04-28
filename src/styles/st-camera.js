import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
  },
  btnBack: {
    height: 36,
    width: 104,
    borderRadius: 50,
    position: 'fixed',
    top: 16,
    left: 12,
    gap: -4,
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 10,
    backgroundColor: 'white',
  },
  btnBackText: {
    color: '#181818',
    fontWeight: 500,
    fontSize: 16
  },
  wrapperCamera: {
    height: '74%',
    flexDirection: 'row',
  },
  camera: {
    flex: 1,
    // aspectRatio: 1,
  },
  containerToolBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 72,
    height: 94,
    margin: 8,
    borderRadius: 8,

  },
  btnShot: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnRotate: {
    height: 48,
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});