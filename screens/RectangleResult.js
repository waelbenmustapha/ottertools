import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useApp } from "../context/AppProvider";
import rect from "../assets/images/rect.png";
const RectangleResult = ({ navigation, route }) => {
  const app = useApp();
  const i18n = app.i18n;
  console.log(route.params.values);
  const { lengthh: l, width: b, copyring: k, cutter: f } = route.params.values;
  const resa = parseFloat(l) + parseFloat(k) - parseFloat(f);
  const resb = parseFloat(b) + parseFloat(k) - parseFloat(f);
  return (
    <View
      style={{
        backgroundColor: "rgb(30,132,139)",
        flex: 1,
        alignItems: "center",
      }}
    >
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
          source={rect}
          style={{
            aspectRatio: 895 / 532,
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
        {((parseInt(resa)>0)&&(parseInt(resb)>0))?<>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {i18n.t("result")} A :
        </Text>
        <Text style={{ marginVertical: 5, fontSize: 16 }}>
          {resa.toFixed(2)} mm
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {i18n.t("result")} B :
        </Text>
        <Text style={{ marginVertical: 5, fontSize: 16 }}>
          {resb.toFixed(2)} mm
        </Text>
        </>:<Text style={{fontSize:18,textAlign:"center",paddingVertical:20}}>{i18n.t("impossible")}</Text>}
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

export default RectangleResult;
