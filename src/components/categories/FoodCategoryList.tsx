import React, { memo, FC, useState } from 'react';
import { FlatList, View } from 'react-native';
import { categoryTypeData } from './data';
import FoodCategory from './FoodCategory';

export type FoodCategoryListProps = {
  selectedId: string;
  setSelectedId: any;
  refetch: any;
};

const FoodCategoryList: FC<FoodCategoryListProps> = ({
  selectedId,
  setSelectedId,
  refetch,
}) => {
  const renderFoodCategory = (itemData: any) => {
    const isTargeted = itemData.item.id == selectedId;
    // console.log(
    //   `itemData.item.id = ${itemData.item.id}, selectedId = ${selectedId}`
    // );

    // console.log(`isTargeted = ${isTargeted}`);
    const changeCategoryHandler = () => {
      setSelectedId(itemData.item.id);
      setTimeout(() => {
        refetch();
      }, 0);
    };
    return (
      <FoodCategory
        {...itemData.item}
        onPress={changeCategoryHandler}
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
