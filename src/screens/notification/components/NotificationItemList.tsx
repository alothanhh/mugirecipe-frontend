import React, { FC, memo } from 'react';
import { FlatList, View } from 'react-native';
import { notificationData } from '../data';
import NotificationItem from './NotificationItem';
const NotificationItemList = memo(() => {
  const renderNotificationItem = (itemData: any) => {
    return <NotificationItem {...itemData.item} />;
  };
  return (
    <FlatList
      data={notificationData}
      renderItem={renderNotificationItem}
      keyExtractor={(item: any) => item.id}
      scrollEnabled={false}
      ItemSeparatorComponent={() => <View className="mb-2" />}
    />
  );
});

export default NotificationItemList;
