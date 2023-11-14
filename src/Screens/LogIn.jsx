import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { BGImage, Logo } from "../../assets";
import { UserInput } from "../Components/";
import { useNavigation } from "@react-navigation/native";

const LogIn = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const screenWidth = Math.round(Dimensions.get("window").width);
  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BGImage}
        className="h-96"
        style={{ width: screenWidth }}
        resizeMode="cover"
      />
      {/* main view */}
      <View className="w-full h-full bg-white rounded-tl-[90px] items-center justify-start py-6 px-6 space-y-6 -mt-44">
        {/* Logo */}
        <Image source={Logo} className="h-16 w-16 " resizeMode="contain" />
        <Text className="py-2 text-primaryText text-xl font-semibold">
          Welcome Back!
        </Text>
        {/* content box */}
        <View className="w-full items-center justify-center">
          {/* alert message */}

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
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text className="text-base font-semibold text-primary">
                create here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LogIn;
