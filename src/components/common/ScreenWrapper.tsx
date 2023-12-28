import React, { memo, FC } from 'react';
import { ScrollView } from 'react-native';

export type ScreenWrapperProps = {
  children: React.ReactNode;
};

const ScreenWrapper: FC<ScreenWrapperProps> = memo(({ children }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="w-[90%] mx-auto"
    >
      {children}
    </ScrollView>
  );
});

export default ScreenWrapper;
