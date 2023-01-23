import { View, Text, Image } from "react-native";
import React from "react";
import InstructorPic from "./InstructorPic";

const Instructor = () => {
  return (
    <>
      <Text className="px-5 pt-5 pb-4  text-lg text-[#000] font-bold">
        Instructors
      </Text>
      <View className="flex-row mx-4 flex-wrap">
        <InstructorPic
          imgUrl={
            "https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
          }
        />
        <InstructorPic
          imgUrl={
            "https://pbs.twimg.com/profile_images/580383480850358272/hGdszCo0_400x400.jpg"
          }
        />

        <InstructorPic
          imgUrl={
            "https://play-lh.googleusercontent.com/qq5__wITsoCx2kUK8TqVW2-8UDRuxET9kCzPzAPHad8umXiHRF2N0tZKuLezd0tiBQg"
          }
        />
        <InstructorPic
          imgUrl={
            "https://pbs.twimg.com/profile_images/1417157967124721666/xShJF4Km_400x400.png"
          }
        />

        <InstructorPic
          imgUrl={"https://avatars.githubusercontent.com/u/183223?v=4"}
        />
        <InstructorPic
          imgUrl={
            "https://www.capgemini.com/au-en/wp-content/uploads/sites/9/2017/09/ibm-7.png"
          }
        />
        <InstructorPic
          imgUrl={
            "https://media.licdn.com/dms/image/C4E0BAQGYjmmBCvqLmg/company-logo_200_200/0/1519878692497?e=2147483647&v=beta&t=obhrBwFMrBkEW2nGAJ8jgs7F0O-OVST_BAwFmIVuuMw"
          }
        />
        <InstructorPic
          imgUrl={
            "https://yt3.googleusercontent.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s900-c-k-c0x00ffffff-no-rj"
          }
        />
      </View>
    </>
  );
};

export default Instructor;
