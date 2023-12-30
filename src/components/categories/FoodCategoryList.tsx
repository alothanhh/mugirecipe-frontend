import React, { memo, FC, useState } from 'react';
import { FlatList, View } from 'react-native';
import { categoryTypeData } from './data';
import FoodCategory from './FoodCategory';

export type FoodCategoryListProps = {
  selectedId: string;
  setSelectedId: any;
};

const FoodCategoryList: FC<FoodCategoryListProps> = ({
  selectedId,
  setSelectedId,
}) => {


  const renderFoodCategory = (itemData: any) => {
    const isTargeted = itemData.item.id == selectedId;
    console.log(
      `itemData.item.id = ${itemData.item.id}, selectedId = ${selectedId}`
    );
    
    console.log(`isTargeted = ${isTargeted}`);

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
};
export default FoodCategoryList;
