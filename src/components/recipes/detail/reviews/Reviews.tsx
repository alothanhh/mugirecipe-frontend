import React, {useLayoutEffect, useRef, useState, FC } from "react";
import {ScrollView, Text, View, Image, TouchableHighlight, ImageBackground, FlatList, SafeAreaView} from "react-native";
import {Input, Overlay} from 'react-native-elements';
import {AirbnbRating} from "react-native-elements";
import {AntDesign, Entypo, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import BackButton from "@/components/recipes/detail/components/BackButton/BackButton";

interface ReviewProps {
  navigation: any; 
  route: any; 
};

interface User {
  name: string;
  time: string;
  cmt: string;
};

let data : Array<User> = [
  {name: 'Bella Throne', time: 'June 12, 2020 - 19:35', cmt: 'Lorem Ipsum tempor incididunt ut labore et dolore,inise voluptate velit esse cillum'},
  {name: 'Christopher Oshana', time: 'June 12, 2020 - 19:35', cmt: 'Lorem Ipsum tempor incididunt ut labore et dolore,inise voluptate.'},
  {name: 'Kyle Austin', time: 'June 12, 2020 - 19:35', cmt: 'Lorem Ipsum tempor incididunt ut labore et dolore,inise voluptate.'},
  {name: 'Jeniffern Wilson', time: 'June 12, 2020 - 19:35', cmt: 'Lorem Ipsum tempor incididunt ut labore et dolore,inise voluptate.'},
  {name: 'Kate Johnson', time: 'June 12, 2020 - 19:35', cmt: 'Lorem Ipsum tempor incididunt ut labore et dolore,inise voluptate.'}
]

function Comments ({data} : {data: Array<User>}) {

  const renderReview: FC<{item: any}> = ({item}) => {
    return (
      <View style={{marginVertical: 20}}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image source={require("../../../../../assets/images/avatar.jpg")} style={{width: 35, height: 35, borderRadius: 180}}/>
          <View style={{flexDirection: 'column', marginHorizontal: 15}}>
            <Text style={{fontWeight: '800'}}>{item.name}</Text>
            <Text>{item.time}</Text>
          </View>
        </View>
        <Text>{item.cmt}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      scrollEnabled={true}
      renderItem={renderReview}
      keyExtractor={(item: any) => item.id}
    />
  );
}

const Review: React.FC<ReviewProps> = ({ navigation, route }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => (
        <View></View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{
        flex: 1,
        flexDirection: 'column',
        marginTop: 80,
        marginHorizontal: 20
    }}>
        <Text style={{
          fontSize: 22,
          fontWeight: '700',
          marginBottom: 10
        }}>Reviews</Text>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Text style={{color: '#A9A9A9'}}>200 Comments</Text>
            <Text style={{
              marginLeft: 190,
              color: '#A9A9A9'
            }}>155 Saved</Text>
        </View>
        <Text style={{
          fontSize: 17,
          fontWeight: '500',
          marginBottom: 10
        }}>Leave a comment</Text>
        <View style={{flexDirection: 'row'}}>
            <Input placeholder="Say something" style={{
              borderRadius: 10,
              borderColor: '#A9A9A9',
              borderWidth: 1,
              paddingLeft: 30,
              marginLeft: -12,
              width: 50,
              fontSize: 15,
            }} inputContainerStyle={{borderBottomWidth:0}}/>
            <TouchableHighlight style={{
              marginLeft: -50,
              borderRadius: 10,
              backgroundColor: '#B73E3E',
              paddingVertical: 10,
              paddingHorizontal: 10,
              height: 40
            }}><Text style={{
              color: 'white',
              fontSize: 13,
              fontWeight: '500',
            }}>Send</Text></TouchableHighlight>
        </View>
        <Comments data={data}/>
    </SafeAreaView>
  );
};

export default Review;
