import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeScreens } from "./index";
import DetailContainer from "./detail/DetailContainer";
import RecipeItemList from "./RecipeItemList";
import Detail from "./detail/Detail";

export type RecipeParamList = {
    [RecipeScreens.RECIPELIST]: undefined;
    [RecipeScreens.DETAIL]: {id: string} | undefined;
};

const Stack = createNativeStackNavigator<RecipeParamList>();

const RecipeContainer = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={RecipeScreens.DETAIL} component={DetailContainer} options={{headerTitle: "", headerShown: false}}/>
        </Stack.Navigator>
    )
};

export default RecipeContainer;