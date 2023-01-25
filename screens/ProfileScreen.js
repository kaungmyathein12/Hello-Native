import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
// import Avatar from "react-native-boring-avatars";
import WatchNowCard from "../components/WatchNowCard";
import Profile from "../components/avatar/Profile";

const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <SafeAreaView className="bg-[#6b61ff]">
        <View className="flex-row items-center justify-between px-5 pb-6 pt-8">
          <View className="flex-row items-center space-x-2 ">
            <View className="w-10 h-10  rounded-full overflow-hidden">
              <Profile width={40} height={40} />
            </View>
            <View className="-mt-1">
              <Text className="text-white text-lg font-bold">
                Kaung Myat Hein
              </Text>
              <Text className="text-gray-200 text-xs -mt-1 font-medium">
                kaungmyathein.dev@gmail.com
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text className=" font-medium text-gray-200">Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View className="bg-[#6b61ff]">
        <View className=" bg-white rounded-t-3xl p-5 h-[100%]">
          <Text className="text-black text-lg font-bold pb-3">My Course</Text>
          <View className="flex flex-row flex-wrap">
            <WatchNowCard language={"Next"} title="NEXTJS Master" />
            <WatchNowCard language={"react"} title="React for Beginner" />
            <WatchNowCard language={"angular"} title="Learn Angular for free" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
