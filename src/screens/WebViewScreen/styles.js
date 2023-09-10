import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: Colors.BLUE_COLOR,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    color: Colors.WHITE_COLOR,
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
  backBtn: {
    width: 15,
    height: 15,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: Colors.WHITE_COLOR,
    position: 'absolute',
    left: 20,
    bottom: 20,
    transform: [{ rotate: '45deg' }],
  },
  loader: {
    position: 'absolute',
    top: height / 2,
    left: width / 2,
  },
});

export default styles;
