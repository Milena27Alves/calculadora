import {StyleSheet} from 'react-native';

export const TEXT_COLOR = "#4d4d4d";
export const TITLE_BG_COLOR = "green";
export const styles = StyleSheet.create({

  title:{
    fontSize:20,
    textAlign:'center',
    backgroundColor:TITLE_BG_COLOR,
  },
  texto:{
    color:TEXT_COLOR
  },
  conteiner:{
      padding:10,
      flex:1
  },
  display:{
      backgroundColor: "#333",
      padding:10
  },
  txtOp:{
      color:"#fff",
      fontSize:20
  },
  txtResult:{
      color:"#fff",
      fontSize:35
  },
  row: {
      flexDirection: 'row',
      alignSelf: 'center'
    },
    buttonStilo: {
      alignItems: 'center',
      flexWrap:"wrap",
      backgroundColor: '#d8bfd8',
      padding: 28,
      flex:1,
      borderWidth:1
    },
    buttonIgualdade: {
      alignItems: 'center',
      backgroundColor: '#9acd32',
      padding: 28,
      flex:1,
      borderWidth:1
    }
});
