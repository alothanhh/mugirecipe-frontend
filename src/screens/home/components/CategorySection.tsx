import React, { FC, memo, useState } from 'react';
import { View } from 'react-native';
import CategoryItemList from '@/components/categories/CategoryItemList';
import FoodCategoryList from '@/components/categories/FoodCategoryList';
import { categoryTypeData } from '@/components/categories/data';

import { useQuery } from '@tanstack/react-query';
import { fetchCategorizedItems } from '@/apis/categories';
const CategorySection: FC = memo(() => {
  const [selectedId, setSelectedId] = useState<string>(categoryTypeData[0].id);
    const { data, isError, isPending, error, refetch } = useQuery({
      queryKey: ['category'],
      queryFn: () => fetchCategorizedItems(selectedId),
    });
  return (
    <View className="space-y-3">
      <View>
        <FoodCategoryList
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          refetch={refetch}
        />
      </View>
      <View>
        <CategoryItemList data={data} />
      </View>
    </View>
  );
});
export default CategorySection;
