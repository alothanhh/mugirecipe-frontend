import React, { memo, FC, useState } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { categoryTypeData } from './data';
import FoodCategory from './FoodCategory';
import { FoodCategoryProps } from './FoodCategory';
import colors from '@/constants/colors';
const FoodCategoryList = memo(() => {
  const [selectedId, setSelectedId] = useState<number>(0);
  const renderFoodCategory = (itemData: any) => {
    const isTargeted = itemData.item.id === selectedId;
    return (
      <FoodCategory
        {...itemData.item}
        onPress={() => setSelectedId(itemData.item.id)}
        isTargeted={isTargeted}
      />
    );
  };
  return (
    <FlatList
      className=""
      data={categoryTypeData}
      renderItem={renderFoodCategory}
      keyExtractor={(item: any) => item.id}
      extraData={selectedId}
      horizontal
      pagingEnabled
    />
  );
});

export default FoodCategoryList;
