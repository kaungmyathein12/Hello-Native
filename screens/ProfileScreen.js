import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Avatar from "react-native-boring-avatars";

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
            <View className="w-10 h-10 bg-white rounded-full"></View>
            <View>
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
        <View className=" bg-white h-96 rounded-t-3xl p-5">
          <Text className="text-black text-lg font-bold pb-3">My Course</Text>
          <View className="flex-col flex-wrap space-y-4">
            <View className="w-full h-48 rounded-3xl bg-[#405059] py-5 px-6 relative overflow-hidden">
              <Text className="font-[800] text-white text-[22px] mb-1">
                React for Beginner
              </Text>
              <Text className="text-gray-100 text-sm font-semibold">
                112 lessons, Current - 10
              </Text>
              <TouchableOpacity className="mb-0 mt-auto">
                <View className="flex-row justify-start">
                  <View className="rounded-lg overflow-hidden">
                    <Text className="text-white font-semibold bg-black px-4 py-3 ">
                      Watch Now
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View className="absolute -right-[50px] top-1 bottom-0 opacity-20 ">
                <Avatar
                  size={180}
                  name="PHP"
                  variant="beam"
                  colors={["#fff", "#000", "#74E4FF", "#C271B4", "#EDD75A"]}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
