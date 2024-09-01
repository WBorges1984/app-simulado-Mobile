import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

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
  }
 
});

export default styles;