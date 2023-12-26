import React, { memo, FC } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { recipeData } from './data';
import RecipeItem from './RecipeItem';
const RecipeItemList = memo(() => {
  const renderRecipeItem = (itemData: any) => {
    return <RecipeItem {...itemData.item} />;
  };
  return (
    <SafeAreaView>
      <FlatList
        className=""
        data={recipeData}
        scrollEnabled={false} // remove duplicate scroll logic, because wrapper is scrollviiew
        renderItem={renderRecipeItem}
        keyExtractor={(item: any) => item.id}
        ItemSeparatorComponent={() => <View className="mb-2" />}
      />
    </SafeAreaView>
  );
});

export default RecipeItemList;
