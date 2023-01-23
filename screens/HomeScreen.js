import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import TopCourse from "../components/TopCourse";
import Instructor from "../components/Instructor";
import CourseCard from "../components/CourseCard";
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
        <SafeAreaView>
          <View className="px-4 flex-row justify-between items-center py-6">
            <View>
              <Text className="text-2xl font-[800] text-white">FreeCourse</Text>
              <Text className="text-gray-100 font-medium">
                Learn from anywhere
              </Text>
            </View>
          </View>
        </SafeAreaView>
        {/* Header */}

        <View className="pb-6 rounded-t-3xl bg-white">
          <TopCourse />
          <Instructor />
          <Text className="px-5 pt-5 pb-3 font-bold text-lg">For You</Text>
          <View className="mb-4">
            <ScrollView
              contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 5,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <CourseCard
                imgUrl={"https://i.ytimg.com/vi/3unYpFZO4EE/maxresdefault.jpg"}
                title="The Completed NodeJS Course"
              />
              <CourseCard
                imgUrl={
                  "https://miro.medium.com/max/700/1*9ldWBjIm_36mNyNvJNCJgA.png"
                }
                title="The Completed JavaScript Course"
              />
              <CourseCard
                imgUrl={"https://codingheroes.io/assets/img/C4.png"}
                title="The Completed SCSS Course"
              />
            </ScrollView>
          </View>
          <TopCourse />
          <TopCourse />
        </View>
      </ScrollView>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default HomeScreen;
