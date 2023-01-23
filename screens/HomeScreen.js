import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="mx-4 flex-row justify-between items-center pb-3">
        <View className="flex-row items-center space-x-2">
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nHJJVocQbAdfUQHDEXeVu0V8MJqnnacJvQ&usqp=CAU",
            }}
            className="h-9 w-9 rounded-md"
          />
          <View>
            <Text className="text-xs text-neutral-400">Deliver Now</Text>
            <Text className="font-bold text-lg -mt-[3px]">
              Current Location
              <ChevronDownIcon size={20} color={"#000"} />
            </Text>
          </View>
        </View>
        <UserIcon size={25} color={"#000"} />
      </View>
      {/* Search */}
      <View className="mx-4 flex-row space-x-4 items-center pb-2">
        <View className="flex-row space-x-2 flex-1 bg-neutral-200 p-3">
          <MagnifyingGlassIcon size={20} color={"#000"} />
          <TextInput placeholder="Resturants and cuisines" />
        </View>
        <AdjustmentsVerticalIcon size={20} color={"#000"} />
      </View>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
