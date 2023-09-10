import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  root: { flex: 1 },
  header: {
    width: '100%',
    backgroundColor: Colors.BLUE_COLOR,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    color: Colors.WHITE_COLOR,
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 5,
  },
  flatList: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  itemWrapper: {
    paddingVertical: 5,
  },
  label: {
    fontSize: 16,
  },
});

export default styles;
