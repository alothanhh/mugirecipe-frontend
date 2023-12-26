import React from 'react';
import colors from '@/constants/colors';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import FoodCategory from '@/components/categories/FoodCategory';
const Home = () => {
  console.log(colors.white);
  // const whiteColor = `text-[${colors.white}]`;
  // const primaryColor = `text-[${colors.primary}]`;
  // console.log(whiteColor);
  return (
    <SafeAreaView style={styles.rootContainer}>
      {/* Inner container */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-[90%] mx-auto"
      >
        <View className="flex flex-row items-center justify-start space-x-1 px-4 bg-white h-[50px] rounded-[30px] ">
          <FontAwesome name="search" size={20} color={colors.placeholder} />
          <TextInput placeholder="Find your favorite meals" />
        </View>
        {/* Categories container */}
        <View className="space-y-2 mt-2">
          {/* Category types */}
          <FoodCategory />
          {/* Category Items */}
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
                <Text className="text-[19px] font-bold">
                  Banh xeo - Sizzling...
                </Text>
                <View>
                  <Text className="font-semibold">
                    Price: 15,000 VND - 55,000 VND
                  </Text>
                  <Text className="font-semibold">(from $1 USD)</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Trending Container */}
        <View className="mt-2 space-y-1">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[22px] font-semibold">Treding Recipes</Text>
            <Text className="font-light text-[18px] text-[#B73E3E]">
              See all
            </Text>
          </View>
          {/* Recipe Item */}
          <View className="bg-white rounded-[15px] w-full h-[132px] px-3">
            {/* Inner Container */}
            <View className="flex flex-row justify-between items-start space-x-2  my-auto">
              {/* Image container */}
              <View>
                <Image
                  className="h-[107px] w-[131px] rounded-[15px]"
                  source={{
                    uri: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/18504403-5A16-4310-9ED8-96CB4901D7B3/Derivates/d4819e58-85fc-4d8a-9a56-326c729dffd2.jpg',
                  }}
                />
              </View>
              {/* Info container */}
              <View className="flex flex-col justify-between items-end h-[107px] ">
                <View className="flex flex-col justify-between">
                  <Text className="text-[19px] font-medium text-wrap text-balance">
                    Chickpea Noodl...
                  </Text>
                  {/* Star container */}
                  <View className="flex flex-row items-center">
                    <AntDesign name="star" size={15} color={colors.yellow} />
                    <AntDesign name="star" size={15} color={colors.yellow} />
                    <AntDesign name="star" size={15} color={colors.yellow} />
                    <AntDesign name="star" size={15} color={colors.yellow} />
                    <AntDesign name="star" size={15} color={colors.yellow} />
                    <Text className="text-[13px] font-normal ">
                      (4.9) | 128 view
                    </Text>
                  </View>
                </View>
                {/* Button container */}
                <View className="flex flex-row items-center justify-end space-x-2">
                  <AntDesign name="hearto" size={16} color="black" />
                  <FontAwesome name="share" size={16} color="black" />
                </View>
              </View>
            </View>
          </View>
          <View className="bg-white rounded-[15px] w-full h-[132px] px-3">
            {/* Inner Container */}
            <View className="flex flex-row justify-between items-start space-x-2  my-auto">
              {/* Image container */}
              <View>
                <Image
                  className="h-[107px] w-[131px] rounded-[15px]"
                  source={{
                    uri: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/18504403-5A16-4310-9ED8-96CB4901D7B3/Derivates/d4819e58-85fc-4d8a-9a56-326c729dffd2.jpg',
                  }}
                />
              </View>
              {/* Info container */}
              <View className="flex flex-col justify-between items-end h-[107px] ">
                <View className="flex flex-col justify-between">
                  <Text className="text-[19px] font-medium text-wrap text-balance">
                    Chickpea Noodl...
                  </Text>
                  {/* Star container */}
                  <View className="flex flex-row items-center">
                    <AntDesign name="star" size={15} color={colors.yellow} />
                    <AntDesign name="star" size={15} color={colors.yellow} />
                    <AntDesign name="star" size={15} color={colors.yellow} />
                    <AntDesign name="star" size={15} color={colors.yellow} />
                    <AntDesign name="star" size={15} color={colors.yellow} />
                    <Text className="text-[13px] font-normal ">
                      (4.9) | 128 view
                    </Text>
                  </View>
                </View>
                {/* Button container */}
                <View className="flex flex-row items-center justify-end space-x-2">
                  <AntDesign name="hearto" size={16} color="black" />
                  <FontAwesome name="share" size={16} color="black" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
