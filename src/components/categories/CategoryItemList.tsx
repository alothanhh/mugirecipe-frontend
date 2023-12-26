import React, { memo, FC, useState } from 'react';
import { FlatList, View } from 'react-native';
import { categoryItemData } from './data';
import CategoryItem from './CategoryItem';

const CategoryItemList = memo(() => {
  const renderCategoryItem = (itemData: any) => {
    return <CategoryItem {...itemData.item} />;
  };
  return (
    <FlatList
      className=""
      data={categoryItemData}
      renderItem={renderCategoryItem}
      keyExtractor={(item: any) => item.id}
      ItemSeparatorComponent={() => <View className="mr-2" />}
      horizontal
    />
  );
});

export default CategoryItemList;
