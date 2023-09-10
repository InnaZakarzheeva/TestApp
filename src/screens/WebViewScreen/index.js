import React, { useState, useRef } from 'react';
import { View, ActivityIndicator, Text, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../constants/colors';
import { useDispatch } from 'react-redux';
import { setCopyRightInfo } from '../../redux/reducers/sitesReducer';

const WebViewScreen = ({ route }) => {
  const { url, headerText } = route.params;
  const webviewRef = useRef(null);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const JS_CODE = `(function() {
    window.postMessage = function() {
      window.ReactNativeWebView.postMessage([...document.getElementsByTagName('footer')].filter(item => item.innerHTML.includes('©'))[0].innerHTML);
    };
  })()`;

  const goBack = () => navigation.goBack();

  const renderHeader = () => (
    <View style={[styles.header, { height: insets.top + 50 }]}>
      <Pressable style={styles.backBtn} onPress={goBack} />
      <Text style={styles.title}>{headerText}</Text>
    </View>
  );

  return (
    <View style={styles.root}>
      {renderHeader()}
      <WebView
        source={{ uri: url }}
        javaScriptEnabled={true}
        javaScriptCanOpenWindowsAutomatically={true}
        thirdPartyCookiesEnabled={true}
        sharedCookiesEnabled={true}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        ref={webviewRef}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        style={styles.webView}
        originWhitelist={['*']}
        injectedJavaScript={JS_CODE}
        onMessage={(event) => {
          if (event.nativeEvent.data.includes('©')) {
            const data = event.nativeEvent.data.split('©')[1]?.split('<')[0];
            dispatch(
              setCopyRightInfo({
                [`${headerText}`]: data,
              }),
            );
          }
        }}
      />
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={Colors.BLUE_COLOR} />
        </View>
      )}
    </View>
  );
};

export default WebViewScreen;
