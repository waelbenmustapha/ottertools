import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  useWindowDimensions,
  TouchableHighlight,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { useApp } from "../context/AppProvider";

const Navigator = ({ currentPage, toNextPage, page }) => {
  const { width } = useWindowDimensions();
  const app = useApp()
  const i18n = app.i18n;
  return (
    <View
      style={{
        flexDirection: "row",
        display: "flex",
        alignSelf: "center",
        backgroundColor: "#889ca3",
        position: "relative",
        borderRadius: 20,
        padding: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.View
        style={{
          width: width / 4,
          backgroundColor: "white",
          height: 40,
          left: 3,
          position: "absolute",
          transform: [
            {
              translateX: currentPage.interpolate({
                inputRange: [0, width],
                outputRange: [0, width * (1 / 4)],
              }),
            },
          ],
          paddingVertical: 10,
          borderRadius: 20,
        }}
      ></Animated.View>
      <Pressable
        style={{
          width: width / 4,
          paddingVertical: 10,
          borderRadius: 20,
        }}
        onPress={() => {
          toNextPage(0);
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: page === "Rectangle" ? "black" : "white",
          }}
        >
          {i18n.t("rectangle")}
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: width / 4,
          paddingVertical: 10,
          borderRadius: 20,
        }}
        onPress={() => {
          toNextPage(1);
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: page === "Circle" ? "black" : "white",
          }}
        >
          {i18n.t("circle")}
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: width / 4,
          paddingVertical: 10,
          borderRadius: 20,
        }}
        onPress={() => {
          toNextPage(2);
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: page === "About" ? "black" : "white",
          }}
        >
          {i18n.t("about")}
        </Text>
      </Pressable>
    </View>
  );
};

export default Navigator;
