import { Text, TouchableOpacity, Image, View } from "react-native";

import React from "react";
const CourseCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-4 relative">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-80 h-52 rounded-3xl"
      />
      <Text className="mt-2 font-bold text-[16px]">{title}</Text>
      <View className="flex-row justify-between items-center">
        <Text className="text-sm text-gray-500 text-left mt-1">
          Jonas schmedtmann
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
