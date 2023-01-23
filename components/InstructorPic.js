import { View, Image } from "react-native";
import React from "react";

const InstructorPic = ({ imgUrl }) => {
  return (
    <View className="bg-[#fff] w-[15.53%] h-[54px] rounded-xl overflow-hidden mr-2 ml-2 mb-4 border border-neutral-200">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-full h-full shadow"
      />
    </View>
  );
};

export default InstructorPic;
