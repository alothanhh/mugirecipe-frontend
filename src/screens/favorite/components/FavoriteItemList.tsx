import React, { FC, memo } from 'react';
import { FlatList } from 'react-native';
import { favoriteItemsData } from '../data';
import VerticalListItemDivider from '@/components/common/VerticalListItemDivider';
import RecipeItem from '@/components/recipes/RecipeItem';
const FavoriteItemList = memo(() => {
  const renderFavoriteItem: FC<{ item: any }> = ({ item }) => {
    return <RecipeItem {...item} />;
  };
  return (
    <FlatList
      className=""
      data={favoriteItemsData}
      keyExtractor={(item: any) => item.id}
      renderItem={renderFavoriteItem}
      ItemSeparatorComponent={() => <VerticalListItemDivider />}
      scrollEnabled={false}
    />
  );
});

export default FavoriteItemList;
