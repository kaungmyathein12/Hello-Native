import { View, ScrollView, StatusBar } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import TopCourse from "../components/TopCourse";
import Instructor from "../components/Instructor";
import Header from "../components/Header";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <ScrollView className="bg-[#6b61ff]">
        {/* Header */}
        <Header />
        <View className="pb-6 rounded-t-3xl bg-white">
          <TopCourse />
          <Instructor />
          <TopCourse />
          <Instructor />
          <TopCourse />
        </View>
      </ScrollView>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default HomeScreen;
