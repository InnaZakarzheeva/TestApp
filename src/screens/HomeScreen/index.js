import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWebsitesAction } from '../../redux/reducers/sitesReducer';
import { selectCopyRightInfo, selectSites } from '../../redux/selectors';
import { FlatList, Pressable, Text, View } from 'react-native';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const sites = useSelector(selectSites);
  const copyRightInfo = useSelector(selectCopyRightInfo);

  useEffect(() => {
    dispatch(getWebsitesAction());
  }, [dispatch]);

  const onPressItem = (item) => {
    navigation.navigate('webView', {
      headerText: item.name,
      url: item.url,
    });
  };

  const renderItem = ({ item, index }) => {
    const copyRightItemInfo = copyRightInfo.find((i) =>
      Object.keys(i)[0].includes(item.name),
    );
    return (
      <Pressable style={styles.itemWrapper} onPress={() => onPressItem(item)}>
        <Text style={styles.label}>
          {index + 1}. {item.name}{' '}
          {copyRightItemInfo ? `(${copyRightItemInfo[item.name]})` : ''}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.root}>
      <View style={[styles.header, { height: insets.top + 50 }]}>
        <Text style={styles.title}>Sites</Text>
      </View>
      <FlatList
        data={sites}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        style={styles.flatList}
      />
    </View>
  );
};

export default HomeScreen;
