import React, { FC, memo } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OnboardFlow } from 'react-native-onboard';
import { RootScreens } from '..';
import colors from '@/constants/colors';
export type OnboardingProps = {
  navigation: any;
};

const Onboarding: FC<OnboardingProps> = memo(({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="bg-[#F2F2F2]">
        <OnboardFlow
          style={styles.rootContainer}
          pages={[
            {
              title: 'Provide diverse options',
              subtitle: 'Bring you a convenient kitchen experience',
              imageUri: Image.resolveAssetSource(
                require('../../../assets/images/onboarding/FirstImage.png')
              ).uri,
            },
            {
              title: 'Save your time',
              subtitle: 'Recommend dishes based on your ingredients',
              imageUri: Image.resolveAssetSource(
                require('../../../assets/images/onboarding/SecondImage.png')
              ).uri,
            },
            {
              title: 'Instruct detailed cooking',
              subtitle: 'Easy to cook with step-by-step instructions',
              imageUri: Image.resolveAssetSource(
                require('../../../assets/images/onboarding/ThirdImage.png')
              ).uri,
            },
          ]}
          type={'fullscreen'}
          onDone={() => navigation.navigate(RootScreens.MAIN)}
        />
      </View>
    </SafeAreaView>
  );
});

export default Onboarding;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
