import React, { memo, FC, useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import colors from '@/constants/colors';
import NotificationItemList from './components/NotificationItemList';
import ScreenWrapper from '@/components/common/ScreenWrapper';
import Arrow from '../../../assets/images/common/Arrow';

interface NotiProps {
  navigation: any;
  route: any;
};

const Notification : React.FC<NotiProps> = memo(({navigation, route}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      headerLeft: () => (
        <Arrow
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => (
        <View></View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScreenWrapper>
        <NotificationItemList />
      </ScreenWrapper>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
export default Notification;
