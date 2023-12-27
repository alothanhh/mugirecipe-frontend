import React, { memo, FC } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import colors from '@/constants/colors';
import NotificationItem from './components/NotificationItem';
import NotificationItemList from './components/NotificationItemList';
const Notification = memo(() => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView className="w-[90%] mx-auto">
        <NotificationItemList />
      </ScrollView>
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
