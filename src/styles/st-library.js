import { StyleSheet } from "react-native";
import { colors as c } from "./colors";

export const s = StyleSheet.create({
  h: {
    color: c.mainColor
  },
  topBar: {
    height: 46,
    justifyContent: 'flex-end',
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 2,
  },
  topBarBtnBack: {
    width: '60%',
    gap: -2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginTop: 36,
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 700,
    letterSpacing: -1
  },
  item: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  itemImage: {
    height: 112,
    width: 74,
    marginTop: 20,
    marginLeft: 12,
    borderRadius: 10,
  },
  containerDetails: {
    width: '74%',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  containerDetailsText: {
    width: '90%',
    fontWeight: 600,
    fontSize: 18,
  },
  btnSaveAndOpen: {
    height: 44,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: c.mainColor
  },
  btnSaveAndOpenText: {
    fontSize: 17,
    fontWeight: 500,
    color: '#fff'
  }


});