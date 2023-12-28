import React, { memo, FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import colors from '@/constants/colors';
import NotificationItemList from './components/NotificationItemList';
import ScreenWrapper from '@/components/common/ScreenWrapper';
const Notification = memo(() => {
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
