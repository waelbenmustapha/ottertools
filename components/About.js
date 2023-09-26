import { View, Text, useWindowDimensions, Linking } from "react-native";
import React from "react";
import { useApp } from "../context/AppProvider";

const About = () => {
  const { width } = useWindowDimensions();
  const app = useApp();
  const i18n = app.i18n;
  return (
    <View style={{ width, padding: width / 8 }}>
      <View
        style={{
          backgroundColor: "white",
          elevation: 4,
          borderRadius: 8,
          paddingVertical: 30,
          paddingHorizontal: 10,
          marginBottom: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {i18n.t("buynow")}
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            marginTop: 10,
            color: "#3366CC",
          }}
          onPress={() => Linking.openURL("http://ottertools.de")}
        >
          Ottertools.de
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            marginTop: 10,
            color: "#3366CC",
          }}
          onPress={() => Linking.openURL(i18n.t("amazonlink"))}
        >
          Amazon
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          elevation: 4,
          borderRadius: 8,
          paddingVertical: 30,
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 16,marginBottom:10 }}>{i18n.t("imprint")}</Text>
        <Text style={{ fontSize: 14, marginVertical: 7,textAlign:"center" }}>
        Verantwortlicher i.S.d. § 18 Abs. 2 MStV:
        </Text>
        <Text >Niclas Kreuer </Text>
        <Text>Turmwerk GmbH </Text>
        <Text>Hornisgrindestr 16d </Text>
        <Text>77731 Willstatt</Text>
      </View>
    </View>
  );
};

export default About;
