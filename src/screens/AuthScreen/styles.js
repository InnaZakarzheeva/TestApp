import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLUE_COLOR,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: Colors.WHITE_COLOR,
    marginBottom: 30,
  },
  button: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: Colors.WHITE_COLOR,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: Colors.WHITE_COLOR,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  errorText: {
    width: '80%',
    paddingLeft: 20,
    color: Colors.RED_COLOR,
    fontSize: 12,
    marginBottom: 10,
    marginTop: 5,
  },
});

export const inputStyles = (isValid) =>
  StyleSheet.create({
    backgroundColor: Colors.WHITE_COLOR,
    width: '80%',
    height: 40,
    borderRadius: 15,
    marginTop: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: isValid ? Colors.WHITE_COLOR : Colors.RED_COLOR,
  });

export default styles;
