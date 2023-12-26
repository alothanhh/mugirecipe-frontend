import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import colors from '@/constants/colors';
export const categoryData = [
  {
    id: 0,
    content: 'Traditional food',
    icon: (
      <MaterialCommunityIcons
        name="food-variant"
        size={24}
        color={colors.primary}
      />
    ),
  },
  {
    id: 1,
    content: 'Foreign Cuisine',
    icon: (
      <MaterialCommunityIcons
        name="food-turkey"
        size={24}
        color={colors.primary}
      />
    ),
  },
  {
    id: 2,
    content: 'Fast food',
    icon: (
      <MaterialCommunityIcons
        name="food-hot-dog"
        size={24}
        color={colors.primary}
      />
    ),
  },
  {
    id: 3,
    content: 'Vegetarian',
    icon: (
      <MaterialCommunityIcons
        name="fruit-watermelon"
        size={24}
        color={colors.primary}
      />
    ),
  },
  {
    id: 4,
    content: 'Beverage',
    icon: <Entypo name="drink" size={24} color={colors.primary} />,
  },
];
