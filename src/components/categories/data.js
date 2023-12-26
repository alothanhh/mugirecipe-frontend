import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import colors from '@/constants/colors';
export const categoryTypeData = [
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

export const categoryItemData = [
  {
    id: 0,
    content: 'Banh xeo - Sizzling',
    image:
      'https://fullofplants.com/wp-content/uploads/2019/06/vegan-gluten-free-banh-xeo-vietnamese-crepes-thumb-1.jpg',
    lowerPrice: 15000,
    upperPrice: 55000,
    usdPrice: 1,
  },
  {
    id: 1,
    content: 'Bun cha',
    image: 'https://trumfood.vn/wp-content/uploads/2022/10/bun-cha.jpg',
    lowerPrice: 25000,
    upperPrice: 70000,
    usdPrice: 2,
  },
  {
    id: 2,
    content: 'Com tam Long Xuyen',
    image: 'https://vcdn-dulich.vnecdn.net/2022/09/26/-2128-1664160638.jpg',
    lowerPrice: 30000,
    upperPrice: 60000,
    usdPrice: 1.5,
  },
];