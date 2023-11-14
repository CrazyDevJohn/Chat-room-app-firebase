import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { BGImage, Logo } from "../../assets";
import { UserInput } from "../Components/";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { avatars } from "../../utils/Supports";

const SignUp = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAvatarMenu, setIsAvatarMenu] = useState(false);
  const [avatar, setAvatar] = useState(avatars[0]?.image.asset.url);
  const navigation = useNavigation();
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);

  const handleAvatar = (item) => {
    setAvatar(item?.image?.asset?.url);
    setIsAvatarMenu(false);
  };

  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BGImage}
        className="h-96"
        style={{ width: screenWidth }}
        resizeMode="cover"
      />

      {/* avetar list */}
      {isAvatarMenu && (
        <View className="absolute inset-0 z-10">
          <ScrollView>
            <BlurView
              className="px-4 py-16 flex-row flex-wrap items-center justify-evenly space-y-5"
              tint="light"
              intensity={40}
              style={{ width: screenWidth, height: screenHeight }}
            >
              {avatars?.map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleAvatar(item)}
                    key={item._id}
                    className="w-20 h-20 p-1 rounded-full border-2 border-primary relative"
                  >
                    <Image
                      source={{
                        uri: item?.image?.asset.url,
                      }}
                      className="w-full h-full"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                );
              })}
            </BlurView>
          </ScrollView>
        </View>
      )}
      {/* main view */}
      <View className="w-full h-full bg-white rounded-tl-[90px] items-center justify-start py-6 px-6 space-y-6 -mt-44">
        {/* Logo */}
        <Image source={Logo} className="h-16 w-16 " resizeMode="contain" />
        <Text className="py-2 text-primaryText text-xl font-semibold">
          Join with us!
        </Text>
        {/* avetars */}
        <View>
          <TouchableOpacity
            onPress={() => {
              setIsAvatarMenu(true);
            }}
            className="w-20 h-20 rounded-full border-2 border-primary relative"
          >
            <Image
              source={{
                uri: avatar,
              }}
              className="w-full h-full"
              resizeMode="contain"
            />
            <View className="w-6 h-6 bg-primary rounded-full absolute top-0 right-0 items-center justify-center">
              <MaterialIcons name="edit" size={18} color={"#fff"} />
            </View>
          </TouchableOpacity>
        </View>
        {/* content box */}
        <View className="w-full items-center justify-center">
          {/* alert message */}

          {/* full name */}
          <UserInput
            placeholder={"Full Name"}
            isPass={false}
            setStateValue={setName}
          />
          {/* email */}
          <UserInput
            placeholder={"Email"}
            isPass={false}
            setStateValue={setEmail}
          />
          {/* password */}
          <UserInput
            placeholder={"Password"}
            isPass={true}
            setStateValue={setPassword}
          />
          {/* button */}
          <TouchableOpacity className="w-full px-4 py-2 rounded-xl bg-primary my-3 flex items-center justify-center">
            <Text className="py-2 text-white text-xl font-semibold">
              Sign In
            </Text>
          </TouchableOpacity>

          {/* register */}
          <View className="w-full py-12 flex-row items-center justify-center space-x-2">
            <Text className="text-base text-primaryText">
              Allready have a account!
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
              <Text className="text-base font-semibold text-primary">
                Login here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
