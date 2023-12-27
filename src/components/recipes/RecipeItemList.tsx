import React, { memo, FC } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { recipeData } from './data';
import RecipeItem from './RecipeItem';

import { useQuery } from '@tanstack/react-query';
import { fetchRecipeItems } from '@/apis/recipes';

const RecipeItemList = memo(() => {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipeItems,
  });
  // if (data) {
  //   console.log(data);
  // }
  const renderRecipeItem: FC<{ item: any }> = ({ item }) => {
    return (
      <RecipeItem
        image={item.imagePath}
        name={item.name}
        numOfRating={item.startAverage}
        numOfView={item.viewsCount}
      />
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        className=""
        data={data}
        scrollEnabled={false} // remove duplicate scroll logic, because wrapper is scrollviiew
        renderItem={renderRecipeItem}
        keyExtractor={(item: any) => item}
        ItemSeparatorComponent={() => <View className="mb-2" />}
      />
    </SafeAreaView>
  );
});

export default RecipeItemList;
