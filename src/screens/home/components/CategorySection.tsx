import React, { FC, memo, useState } from 'react';
import { View } from 'react-native';
import CategoryItemList from '@/components/categories/CategoryItemList';
import FoodCategoryList from '@/components/categories/FoodCategoryList';
import { categoryTypeData } from '@/components/categories/data';
const CategorySection: FC = memo(() => {
  const [selectedId, setSelectedId] = useState<string>(categoryTypeData[0].id);
  return (
    <View className="space-y-2">
      <View>
        <FoodCategoryList
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </View>
      <View>
        <CategoryItemList categoryId={selectedId} />
      </View>
    </View>
  );
});
export default CategorySection;
