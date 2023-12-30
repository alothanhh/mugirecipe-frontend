import React, { FC, memo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ScreenWrapper from '@/components/common/ScreenWrapper';
import SearchedRecipeItemList from './components/SearchedRecipeItemList';

export type SearchProps = {
  navigation: any;
  route: any
}

const Search: FC<SearchProps> = memo(({navigation, route}) => {
  const {keyword} = route.params;
  console.log(`keyword = ${keyword}`);
  
  return (
    <ScrollView>
      <ScreenWrapper>
        <SearchedRecipeItemList keyword={keyword} />
      </ScreenWrapper>
    </ScrollView>
  );
});

export default Search;
