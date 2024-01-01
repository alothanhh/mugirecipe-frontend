import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./Detail";
import { DetailScreens } from "./index";
import Review from "./reviews/Reviews";

export type DetailStackParamList = {
    [DetailScreens.DETAIL]: {id: string} | undefined;
    [DetailScreens.REVIEW]: undefined;
};

const Stack = createNativeStackNavigator<DetailStackParamList>();

const DetailContainer = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={DetailScreens.DETAIL} component={Detail} options={{headerTitle: ""}}/>
            <Stack.Screen name={DetailScreens.REVIEW} component={Review} options={{headerTitle: ""}}/>
        </Stack.Navigator>
    )
};

export default DetailContainer;