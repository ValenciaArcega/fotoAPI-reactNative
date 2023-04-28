import { StyleSheet } from "react-native";
import { colors } from "./colors";

const c = colors;
export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: c.bg
  },
  homeTitle: {
    fontWeight: 800,
    fontSize: 32,
    // letterSpacing: -.4,
  },
  btnTakePhoto: {
    height: 48,
    width: 264,
    marginTop: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: c.mainColor__tint,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: {
      height: 8,
      width: 0
    }
  },
  btnSeePhotos: {
    backgroundColor: c.ff,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.black18,
  },
});
