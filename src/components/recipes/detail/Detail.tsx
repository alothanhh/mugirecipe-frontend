import React, { useLayoutEffect, useState, useEffect, FC } from "react";
import { useQuery } from '@tanstack/react-query';
import { ScrollView, Text, View, Image, TouchableHighlight, ImageBackground, FlatList, SafeAreaView } from "react-native";
import { Overlay } from 'react-native-elements';
import { AirbnbRating } from "react-native-elements";
import styles from "./styles";
import BackButton from "./components/BackButton/BackButton";
import { AntDesign, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { DetailStackParamList } from "./DetailContainer";
import { DetailScreens } from "./index";
import axios from "axios";
import { fetchRecipeDetail } from "@/apis/recipes";
import ScreenWrapper from "@/components/common/ScreenWrapper";
import { color } from "react-native-reanimated";
import Arrow from "../../../../assets/images/common/Arrow";


const useAppNavigation = () => {
  return useNavigation<NavigationProp<DetailStackParamList>>();
};

interface DetailProps {
  navigation: any; 
  route: any; 
};

interface food {
  name: string,
  quantity: string
};

let i : number = 0;

let testList : Array<food> = [
  {name: "Tomatos", quantity: "500"}, 
  {name: "Cabbages", quantity: "300"},
  {name: "Taco", quantity: "300"},
  {name: "Slice Bread", quantity: "300"},
  {name: "Green Union", quantity: "300"},
  {name: "Eggs", quantity: "2"},
  {name: "Sugar", quantity: "100"},
  {name: "Salt", quantity: "10"},
  {name: "Potatos", quantity: "500"},
  {name: "Chili", quantity: "50"},
  {name: "Oil", quantity: "10"},
  {name: "Fruit", quantity: "120"}
];

let testProcedure : Array<string> = [
  "Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
  "Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu fugiat nulla pariatur? Tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
  "Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
  "Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
  "Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
  "Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu fugiat nulla pariatur? Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
  "Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
  "Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu fugiat nulla pariatur?", 
  "Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
  "Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum dolore eu fugiat nulla pariatur?"
];

function FoodList({foodList} : {foodList: Array<food>}) {
  
  const renderFoodList: FC<{item: any}> = ({item}) => {
    return (
      <View style={{
        flexDirection: "column",
        alignItems: "flex-start",
        flex: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.2,
        marginHorizontal: 18,
        paddingVertical: 10,
      }}>
        <View style={{
          flexDirection: 'row',
        }}>
          <Text style={{
            alignItems: "flex-start",
            fontSize: 17,
            width: '70%'
          }}>{`${item.name}`}</Text>
          <Text style={{
            flex: 1,
            textAlign: 'right',
            fontSize: 17,
          }}>{`${item.quantity}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={testList}
      scrollEnabled={true}
      renderItem={renderFoodList}
      keyExtractor={(item: any) => item.id}
    />
  )
}

function Procedure({testProcedure} : {testProcedure: Array<string>}) {
  
  const renderProcedureList: FC<{item: any}> = ({item}) => {
    return (
      <View style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '94%',
        flex: 1,
        backgroundColor: '#D9D9D9',
        borderRadius: 12,
        marginHorizontal: 14,
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 20
      }}>
        <Text style={{
          alignItems: "flex-start",
          fontSize: 15,
          fontWeight: '600',
          marginBottom: 5
        }}>Step {i = (i < testProcedure.length) ? i+1 : 1}</Text>
        <Text style={{
          alignItems: "flex-start",
          fontSize: 13
        }}>{item}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={testProcedure}
      scrollEnabled={true}
      renderItem={renderProcedureList}
      keyExtractor={(item: any) => item.id}
    />
  )
}

const Detail: React.FC<DetailProps> = ({ navigation, route }) => {

  const path = route.params;

  const { data, isError, isPending, error } = useQuery({
    queryKey: ['detail'],
    queryFn: () => fetchRecipeDetail(path.id),
  });

  console.log("data =", data);

  const navigate = useAppNavigation();
  const[state, setState] = useState(0);
  const[visible, setVisible] = useState(false);
  const[share, setShare] = useState(false);
  const[rate, setRate] = useState(false);
  // const[data, setData] = useState([]);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://quan-hzwb.onrender.com/recipe/" +  path.id,
  //   })
  //   .then((response) => {
  //     setData(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`https://quan-hzwb.onrender.com/recipe/${path.id}`);
  //       setData(prev => response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData(); // Call the async function inside useEffect
  //   // console.log("data = ", data);
  // }, []);

  // console.log(path.id);

  // console.log(data.ingredients);
  // testList = data.ingredients;

  // console.log(data.procedure);
  // testProcedure = data.procedure;

  const toggleOverlay = () => setVisible(!visible);
  const toggleShare = () => {
    setVisible(false);
    setShare(!share);
    setRate(false);
  }
  const toggleRate = () => {
    setVisible(false);
    setShare(false);
    setRate(!rate);
  }

  const Share = (share: boolean) => {
    return (
      <Overlay isVisible={share} onBackdropPress={toggleShare} overlayStyle={{
        borderRadius: 20,
        flexDirection: 'column',
        marginHorizontal: 40,
        paddingHorizontal: 20,
        paddingVertical: 20
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: '800',
          marginBottom: 20
        }}>Recipe Link</Text>
        <Text style={{
          fontSize: 14,
          marginBottom: 20}}>Copy recipe link and share your recipe link with  friends and family.</Text>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#D9D9D9',
          borderRadius: 9,
        }}>
          <Text style={{
            backgroundColor: '#D9D9D9',
            borderRadius: 9,
            fontSize: 14,
            paddingHorizontal: 20,
            paddingVertical: 10,
            fontWeight: '500'}}>app.Recipe.co/jollof_rice</Text>
          <Text style={{
            backgroundColor: '#B73E3E',
            color: 'white',
            borderRadius: 9,
            marginLeft: 10,
            fontSize: 14,
            paddingHorizontal: 20,
            paddingVertical: 10}}>Copy Link</Text>
        </View>
      </Overlay>
    );
  }

  const Rate = (rate: boolean, rating: number) => {
    return (
      <Overlay isVisible={rate} onBackdropPress={toggleRate} overlayStyle={{
        borderRadius: 8,
        flexDirection: 'column'
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: '800',
          marginTop: 20,
          marginHorizontal: 80,
          textAlign: "center"
        }}>
          Rate Recipe
        </Text>
        <AirbnbRating size={24} reviewSize={0} starContainerStyle={{marginBottom: 25}} defaultRating={rating}/>
        <Text style={{
          textAlign: "center", 
          backgroundColor: '#D9D9D9', 
          marginHorizontal: 90,
          paddingVertical: 10,
          marginBottom: 20, 
          borderRadius: 10}}>Send</Text>
      </Overlay>
    );
  }

  const Option = (state: number) => {
    if (state == 0) return (
      <View>
        <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 45,
        marginBottom: 20
        }}>
          <TouchableHighlight 
            style={{ flex: 1, backgroundColor: '#B73E3E', borderRadius: 20, marginLeft: 50, paddingHorizontal: 30, paddingVertical: 10}} 
            onPress={() => setState(0)} underlayColor='#B73E3E'>
            <Text 
              style={{ color: 'white', backgroundColor: '#B73E3E', fontSize: 14, textAlign: 'center', fontWeight: '600'}}>
              Ingredient
            </Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style={{ flex: 1, borderRadius: 20, marginRight: 50, paddingHorizontal: 30, paddingVertical: 10}}
            onPress={() => setState(1)} underlayColor='#E2DEDE'>
            <Text style={{ textAlign: 'center', color: '#B73E3E', fontSize: 14, fontWeight: '600'}}>
              Procedure
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
    else return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 45,
        marginBottom: 20
      }}>
        <TouchableHighlight 
          style={{flex: 1, borderRadius: 20, marginLeft: 50, paddingHorizontal: 30, paddingVertical: 10}} 
          onPress={() => setState(0)} underlayColor='#E2DEDE'>
          <Text 
            style={{textAlign: 'center', color: '#B73E3E', fontSize: 14, fontWeight: '600'}}>
            Ingredient
          </Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={{flex: 1, backgroundColor: '#B73E3E', borderRadius: 20, marginRight: 50, paddingHorizontal: 30, paddingVertical: 10}}
          onPress={() => setState(1)} underlayColor='#B73E3E'>
          <Text style={{ color: 'white', backgroundColor: '#B73E3E', fontSize: 14, textAlign: 'center', fontWeight: '600'}}>
            Procedure
          </Text>
        </TouchableHighlight>
      </View>
    )
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerLeft: () => (
        // <BackButton
        //   onPress={() => {
        //     navigation.goBack();
        //   }}
        // />
        <Arrow onPress={() => navigation.goBack()}/>
      ),
      headerRight: () => (
        <TouchableHighlight 
          onPress={toggleOverlay}
          style={{ borderRadius: 180}} underlayColor='#E2DEDE'>
          <AntDesign name="ellipsis1" size={34} color="black" />
        </TouchableHighlight>
      ),
    });
  }, [navigation]);

  if(data) {
    testList = data.ingredients;
    testProcedure = data.procedure;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={{borderColor: 'red', marginHorizontal: 18, height: 170, marginTop: 80}}>
            <ImageBackground style={styles.food_image} 
                source={{uri: data.imagePath}} 
                borderRadius={10}>
              <LinearGradient colors={['#00000000', '#444444']} 
              style={{height : '100%', width : '100%', borderRadius: 10}}/>
            </ImageBackground>
          </View>
          <View style={styles.footVideo}>
            <View style={styles.timeContainer}>
              <Entypo name="stopwatch" size={14} color="#D9D9D9" style={styles.infoPhoto}/>
              <Text style={styles.timeText}>{data.time} min</Text>
            </View>
            <View>
              <Image style={styles.in_active} source={require("../../../../assets/icon/Inactive.png")}/>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>
            {data.name}
          </Text>
        </View>
        <View style={{
            alignItems: 'center',
            flexDirection: 'row',
            left: 2, 
            marginTop: 10,
        }}>
          <View style={styles.rateContainer}>
            <TouchableHighlight onPress={() => setRate(true)} style={{}} underlayColor='none'>
              <View style={{
                flexDirection: 'row',
              }}>
                <Entypo name="star" size={20} color="#FFAD30" />
                <Text style={{
                  paddingHorizontal: 6,
                  fontSize: 17,
                  fontWeight: '500',
                }}>
                  {data.startAverage}
                </Text>
                <Text style={{paddingVertical: 2}}>
                  ({data.reviewsCount} Reviews)
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.reviewContainer}>
            <TouchableHighlight underlayColor='#E2DEDE' style={{borderRadius: 20}} onPress={() => navigate.navigate(DetailScreens.REVIEW)}>
              <View style={{flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 6}}>
                <Text style={{
                  fontSize: 17,
                  fontWeight: '800',
                  color: '#B73E3E',
                  marginRight: 1,
                }}>
                  See all Reviews
                </Text>
                <AntDesign name="right" size={23} color="#B73E3E"/>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        {Option(state)}
        <View style={{
          flexDirection: 'row',
          alignItems: "flex-start",
          marginVertical: 10
        }}>
          <View style={{ 
            flexDirection: 'row',
            alignItems: "flex-start",
            marginLeft: '4%',
          }}>
            <MaterialCommunityIcons name="food-takeout-box-outline" size={20} color="black" style={{
              marginRight: 5,
            }}/>
            <Text>1 serve</Text>
          </View>
          <View style={{
            marginLeft: '58.5%'
          }}>
            <Text>10 items</Text>
          </View>
        </View>
        {state == 0 ? <FoodList foodList={testList}/> : <Procedure testProcedure={testProcedure}/>}
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{
          borderRadius: 12,
          marginRight: -190,
          marginTop: -550
        }}>
          <TouchableHighlight style={{borderRadius: 180}} underlayColor='#E2DEDE' onPress={toggleShare}>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 10}}>
              <FontAwesome5 name="share" size={20} color="black"/>
              <Text style={{marginLeft: 20}}>Share</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{ borderRadius: 180}} underlayColor='#E2DEDE' onPress={toggleRate}>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 10, marginRight: 20}}>
              <Entypo name="star" size={20} color="black" />
              <Text style={{marginLeft: 20}}>Rate Recipe</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{ borderRadius: 180}} underlayColor='#E2DEDE' onPress={() => {}}>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 10}}>
              <MaterialCommunityIcons name="content-save-off" size={20} color="black" />
              <Text style={{marginLeft: 20}}>Unsave</Text>
            </View>
          </TouchableHighlight>
        </Overlay>
        {Share(share)}
        {Rate(rate, data.startAverage)}
      </SafeAreaView>
    );
  };
  return (
    <View>
      <Text>
        Loading .....
      </Text>
    </View>
  );
};

export default Detail;
