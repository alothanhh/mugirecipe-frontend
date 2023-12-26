import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import colors from "@/constants/colors";
import RecipeItemList from "@/components/recipes/RecipeItemList";
import SearchBar from "@/components/common/SearchBar";
const Trending = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-[90%] mx-auto"
      >
        <SearchBar />
        <View className="mt-2">
          <RecipeItemList />
          {/* <RecipeItemList /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default Trending;