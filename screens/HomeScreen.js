import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import TopCourse from "../components/TopCourse";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-[#6b61ff] pt-5">
      {/* Header */}
      <View className="mx-4 flex-row justify-between items-center pt-2 pb-6">
        <View>
          <Text className="text-2xl font-bold text-white">FreeCourse</Text>
          <Text className="text-gray-100 font-medium">Learn from anywhere</Text>
        </View>
      </View>
      <View className="bg-white pb-6 rounded-t-3xl">
        <Text className="px-5 pt-5 pb-3 font-semibold text-lg">
          Top Courses
        </Text>
        <ScrollView>
          <View>
            <TopCourse />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
