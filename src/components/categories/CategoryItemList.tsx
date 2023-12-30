import React, { memo, FC, useState } from 'react';
import { FlatList, View } from 'react-native';
import { categoryItemData } from './data';
import CategoryItem from './CategoryItem';
import HorizontalListItemDivider from '../common/HorizontalListItemDivider';
import { useQuery } from '@tanstack/react-query';
import { fetchCategorizedItems } from '@/apis/categories';

export type CategoryItemListProps = {
  categoryId: string;
};

const CategoryItemList: FC<CategoryItemListProps> = memo(({ categoryId }) => {
  // console.log(`CategoryItemList, categoryId = ${categoryId}`);

  const { data, isError, isPending, error } = useQuery({
    queryKey: ['category'],
    queryFn: () => fetchCategorizedItems(categoryId),
  });
  const renderCategoryItem: FC<{ item: any }> = ({ item }) => {
    return (
      <CategoryItem
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
