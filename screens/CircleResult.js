import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useApp } from "../context/AppProvider";
import circ from "../assets/images/circ.png";
const CircleResult = ({ navigation, route }) => {
  const app = useApp();
  const i18n = app.i18n;
  console.log(route.params.values);
  const { diameter: kd, cutter: f } = route.params.values;
  const resx = parseFloat(kd) + parseFloat(f) / 2;
  return (
    <View style={{ backgroundColor: "rgb(30,132,139)", flex: 1, alignItems: "center" }}>
      <View
        style={{
          width: "80%",
          backgroundColor: "white",
          justifyContent: "center",
          marginTop: 20,
          paddingVertical: 20,
          borderRadius: 20,
          alignItems: "center",
        }}
      >
        <Image
          source={circ}
          style={{
            aspectRatio: 3460 / 1977,
            height: 150,

            borderRadius: 20,
            elevation: 5,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 8,
          elevation: 7,
          marginTop: 40,
          width: "80%",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {i18n.t("result")} X :
        </Text>
        <Text style={{ marginVertical: 5, fontSize: 16 }}>
          {resx.toFixed(2)} mm
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginTop: 20,
          elevation: 8,
          width: "80%",
          backgroundColor: "white",
          alignItems: "center",
          paddingVertical: 10,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {i18n.t("changeparams")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CircleResult;
