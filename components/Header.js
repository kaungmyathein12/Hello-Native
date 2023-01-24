import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Avatar from "react-native-boring-avatars";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="px-4 flex-row justify-between items-center py-6">
        <View>
          <Text className="text-2xl font-[800] text-white">FreeCourse</Text>
          <Text className="text-gray-100 font-medium">Learn from anywhere</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile", {});
          }}
        >
          <View className="mt-1">
            <Avatar
              size={35}
              name="John"
              variant="beam"
              colors={["#FFAD08", "#EDD75A", "#ff6b88", "#C271B4", "#EDD75A"]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
