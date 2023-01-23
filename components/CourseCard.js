import { Text, TouchableOpacity, Image } from "react-native";
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
      <Text className="text-sm text-gray-500 text-left mt-1">
        Jonas schmedtmann
      </Text>
    </TouchableOpacity>
  );
};

export default CourseCard;
