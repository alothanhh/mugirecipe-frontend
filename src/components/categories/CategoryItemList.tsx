import React, { memo, FC, useState } from 'react';
import { FlatList, View, RefreshControl } from 'react-native';
import { categoryItemData } from './data';
import CategoryItem from './CategoryItem';
import HorizontalListItemDivider from '../common/HorizontalListItemDivider';
import { useQuery } from '@tanstack/react-query';
import { fetchCategorizedItems } from '@/apis/categories';

export type CategoryItemListProps = {
  data: any;
};

const CategoryItemList: FC<CategoryItemListProps> = memo(({ data }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const renderCategoryItem: FC<{ item: any }> = ({ item }) => {
    return (
      <CategoryItem
        id={item._id}
        content={item.name}
        image={item.imagePath}
        lowerPrice={item.price}
        upperPrice={item.price}
        usdPrice={item.time}
      />
    );
  };
  // console.log(`category data = `, data);

  return (
    <FlatList
      className=""
      data={data}
      renderItem={renderCategoryItem}
      keyExtractor={(item: any) => item._id}
      ItemSeparatorComponent={() => <HorizontalListItemDivider />}
      horizontal
    />
  );
});

export default CategoryItemList;
