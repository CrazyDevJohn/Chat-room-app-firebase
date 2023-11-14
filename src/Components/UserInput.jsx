import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const UserInput = ({ placeholder, isPass, setStateValue }) => {
  const [value, setValue] = useState("");
  const [icon, setIcon] = useState("");
  const [showPass, setShowPass] = useState(true);

  const handleTextChange = (text) => {
    setValue(text);
    setStateValue(text);
  };

  useLayoutEffect(() => {
    switch (placeholder) {
      case "Full Name":
        return setIcon("person");
      case "Email":
        return setIcon("email");
      case "Password":
        return setIcon("lock");
    }
  }, []);

  return (
    <View className="border rounded-2xl px-4 py-6 flex-row items-center justify-between space-x-4 my-2">
      <MaterialIcons name={icon} size={24} color="#6c6d83" />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={handleTextChange}
        autoCapitalize="none"
        secureTextEntry={isPass && showPass}
        className="flex-1 text-base text-primaryText font-semibold -mt-1 "
      />
      {isPass && (
        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
          <Entypo
            name={`${showPass ? "eye" : "eye-with-line"}`}
            size={24}
            color="#6c6d83"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserInput;
