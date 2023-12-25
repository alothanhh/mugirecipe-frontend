import React from 'react';
import colors from '@/constants/colors';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Home = () => {
  console.log(colors.white);
  const whiteColor = `text-[${colors.white}]`;
  console.log(whiteColor);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text>Home screen!</Text>
      <View className="flex flex-row items-center justify-start space-x-1 px-4 bg-white h-[50px] w-[90%] mx-auto rounded-[30px] ">
        <FontAwesome name="search" size={20} color={colors.placeholder} />
        <TextInput placeholder="Find your favorite meals" />
      </View>
      {/* Categories container */}
      <View className="w-[90%] mx-auto space-y-2 mt-2">
        <View className="flex flex-row items-center space-x-1 px-1 container h-[50px] max-w-[130px]  bg-[#B73E3E] rounded-[30px]">
          <View className="flex flex-row items-center justify-center h-[45px] w-[45px] bg-white rounded-full">
            <MaterialCommunityIcons
              name="food-variant"
              size={24}
              color={colors.primary}
            />
          </View>
          <Text className="text-white text-[11px] max-w-[60px] font-semibold">
            Traditional Food
          </Text>
        </View>
        <View className="bg-white w-[233px] h-[308px] rounded-[15px]">
          <View className="mx-auto my-auto w-[208px]">
            <View>
              <Image
                className="w-[208px] h-[204px] rounded-[15px]"
                source={{
                  uri: 'https://fullofplants.com/wp-content/uploads/2019/06/vegan-gluten-free-banh-xeo-vietnamese-crepes-thumb-1.jpg',
                }}
              />
            </View>
            <View className="flex flex-col space-y-[15px] mt-[5px]">
              <Text className="text-[19px] font-bold">Banh xeo - Sizzling...</Text>
              <View >
                <Text className='font-semibold'>Price: 15,000 VND - 55,000 VND</Text>
                <Text className='font-semibold'>(from $1 USD)</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
export default Home;
