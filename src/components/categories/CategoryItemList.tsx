import React, { memo, FC, useState } from 'react';
import { FlatList, View } from 'react-native';
import { categoryItemData } from './data';
import CategoryItem from './CategoryItem';
import HorizontalListItemDivider from '../common/HorizontalListItemDivider';
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
      ItemSeparatorComponent={() => <HorizontalListItemDivider />}
      horizontal
    />
  );
});

export default CategoryItemList;
