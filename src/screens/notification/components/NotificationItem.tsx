import React, { FC, memo } from 'react';
import { Image, View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '@/constants/colors';

export type NotificationItemProps = {
  type: string;
  isRead: boolean;
  content: string;
  description: string;
  date: string;
  time: string;
};

const NotificationItem: FC<NotificationItemProps> = memo(
  ({ type, isRead, content, description, date, time }) => {
    return (
      <Pressable
        className="h-[75px] bg-white rounded-[15px] px-2"
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
        ]}
      >
        {/* Inner container */}
        <View className="flex flex-row items-start space-x-2 my-auto">
          {/* Image container */}

          <View
            className="flex items-center justify-center  h-[50px] w-[50px] rounded-full bg-[#B73E3E]"
            style={styles.shadowBox}
          >
            {isRead && (
              <View className="h-[10px] w-[10px] bg-[#fbbf24] rounded-full absolute top-0 right-1"></View>
            )}
            {type === 'message' ? (
              <MaterialCommunityIcons
                name="message-processing-outline"
                size={20}
                color={colors.white}
              />
            ) : (
              <MaterialCommunityIcons
                name="file-document-outline"
                size={20}
                color={colors.white}
              />
            )}
          </View>
          {/* Information container */}
          <View>
            <Text className="text-[16px] font-medium">{content}</Text>
            <Text className="text-[13px] font-normal">{description}</Text>
            <Text className="text-[9px] font-normal">
              {time} {date}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }
);

export default NotificationItem;

const styles = StyleSheet.create({
  shadowBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
