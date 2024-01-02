import React, { memo, FC } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import RecipeItem from '@/components/recipes/RecipeItem';
import VerticalListItemDivider from '@/components/common/VerticalListItemDivider';
import { useQuery } from '@tanstack/react-query';
import { searchRecipeItems } from '@/apis/recipes';
import EmptyList from '@/components/common/EmptyList';
export type SearchedRecipeItemListProps = {
  keyword: string;
  isFavorite?: boolean;
};

const SearchedRecipeItemList: FC<SearchedRecipeItemListProps> = memo(
  ({ keyword, isFavorite = false }) => {
    const { data, isError, isPending, error } = useQuery({
      queryKey: ['search'],
      queryFn: () => searchRecipeItems(keyword),
    });
    // if (data) {
    //   console.log(data);
    // }
    const renderRecipeItem: FC<{ item: any }> = ({ item }) => {
      return (
        <RecipeItem
          id={item._id}
          image={item.imagePath}
          name={item.name}
          numOfRating={item.startAverage}
          numOfView={item.viewsCount}
          isFavorite={isFavorite}
        />
      );
    };
    // console.log(`search data = `, data);

    return (
      <SafeAreaView>
        <FlatList
          className=""
          data={data}
          scrollEnabled={false} // remove duplicate scroll logic, because wrapper is scrollviiew
          renderItem={renderRecipeItem}
          keyExtractor={(item: any) => item._id}
          ItemSeparatorComponent={() => <VerticalListItemDivider />}
          ListEmptyComponent={() => <EmptyList />}
        />
      </SafeAreaView>
    );
  }
);

export default SearchedRecipeItemList;
