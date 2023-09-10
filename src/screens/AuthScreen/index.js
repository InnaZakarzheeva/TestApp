import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styles, { inputStyles } from './styles';
import { checkEmail } from '../../utils/helpers';
import { loginAction } from '../../redux/reducers/appReducer';

const AuthScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const onSubmit = () => {
    if (checkEmail(email)) {
      setIsValidEmail(true);
      dispatch(loginAction(email));
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={inputStyles(isValidEmail)}
        autoCapitalize="none"
        placeholder="Enter your e-mail"
      />
      <Text style={styles.errorText}>
        {isValidEmail ? null : 'Email address is incorrect. Please, try again!'}
      </Text>
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonTitle}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AuthScreen;
