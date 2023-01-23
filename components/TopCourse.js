import { ScrollView, View, Text } from "react-native";
import React from "react";
import CourseCard from "./CourseCard";

const TopCourse = () => {
  return (
    <>
      <Text className="px-5 pt-5 pb-3 font-bold text-lg">Top Courses</Text>
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
    </>
  );
};

export default TopCourse;
