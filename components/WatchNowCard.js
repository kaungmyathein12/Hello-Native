import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ReactIcon from "./avatar/languageIcon/React";
import NextIcon from "./avatar/languageIcon/Next";
import AngularIcon from "./avatar/languageIcon/Angular";

const WatchNowCard = ({ title, language }) => {
  return (
    <View className="w-full h-48 rounded-3xl bg-[#20282c] py-5 px-6 relative overflow-hidden mb-4">
      <Text className="font-[800] text-white text-[22px] mb-1">{title}</Text>
      <Text className="text-gray-100 text-sm font-semibold">
        112 lessons, Current - 10
      </Text>
      <TouchableOpacity className="mb-0 mt-auto">
        <View className="flex-row justify-start">
          <View className="rounded-lg overflow-hidden">
            <Text className="text-black font-bold bg-white px-4 py-3 ">
              Watch Now
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View className="absolute -right-[50px] top-[6px] bottom-0 opacity-20 ">
        {language.toLowerCase() === "react" && (
          <ReactIcon width={180} height={180} />
        )}
        {language.toLowerCase() === "next" && (
          <NextIcon width={180} height={180} />
        )}
        {language.toLowerCase() === "angular" && (
          <AngularIcon width={180} height={180} />
        )}
        {/* <Avatar
          size={180}
          name={language}
          variant="beam"
          colors={["#212121", "#D7022F", "#4ED0F3", "#fff", "#fff"]}
        /> */}
      </View>
    </View>
  );
};

export default WatchNowCard;
