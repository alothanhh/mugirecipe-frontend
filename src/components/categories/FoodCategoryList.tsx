import React, { memo, FC, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { categoryData } from './data';
import FoodCategory from './FoodCategory';
import { FoodCategoryProps } from './FoodCategory';
const FoodCategoryList = memo(() => {
  const renderFoodCategory =  (itemData: any) => {
    return <FoodCategory {...itemData.item} />;
  };
  return (
    <View>
      <FlatList
        data={categoryData}
        renderItem={renderFoodCategory}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
});

export default FoodCategoryList;
