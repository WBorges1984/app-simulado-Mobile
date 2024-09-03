import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons:{
    alignItems:'center',
    justifyContent:'center',
    width:"100%",
    margin:10
  },
  btn:{
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    margin:20
  },
  btnBottom:{
    flexDirection:'row',
    gap:20,
    marginTop:50,
    
  },
  logo:{
    marginBottom: 30
  },
  name:{
    color:COLORS.grayDark,
    fontSize:FONT_SIZE[20],
    fontWeight:'bold'
  },
  deslogar:{
    marginTop: 15,
    width:"100%",
    paddingLeft:35,
    paddingRight: 35
  }
 
});

export default styles;