import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import widthico from "../assets/images/width.png";
import ring from "../assets/images/ring.png";
import milling from "../assets/images/milling.png";
import height from "../assets/images/height.png";
import { useApp } from "../context/AppProvider";
import { useNavigation } from "@react-navigation/native";
const Rectangle = () => {
  const app = useApp();
  const navigation = useNavigation();
  const i18n = app.i18n;
  const { width } = useWindowDimensions();
  const validationSchema = yup.object().shape({
    lengthh: yup.number().required(),
    width: yup.number().required(),
    copyring: yup.number().required(),
    cutter: yup.number().required(),
  });
  return (
    <View style={{ width, padding: width / 8 }}>
      <Formik
        initialValues={{
          lengthh: "",
          width: "",
          copyring: "",
          cutter: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) =>
          navigation.navigate("Rectangle-result", { values })
        }
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <View
              style={{
                backgroundColor: "white",
                elevation: 4,
                borderRadius: 8,
                paddingVertical: 30,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  borderBottomColor: "#bebebe",
                }}
              >
                <View style={{ flexDirection: "row"}}>
                  <View style={{justifyContent:"center",alignItems:"center",marginRight:7}}>
                    <Text style={{fontSize:16,fontWeight:"600",marginBottom:-3}}>A</Text>
                    <Image
                      source={widthico}
                      style={{ height: 14, width: 25 }}
                    />
                  </View>
                  <TextInput
                    name="lengthh"
                    style={{ flex: 1, fontSize: 18, fontWeight: "600",alignSelf:"flex-end" }}
                    keyboardType="numeric"
                    onBlur={handleBlur("lengthh")}
                    placeholder={i18n.t("length")}
                    onChangeText={handleChange("lengthh")}
                    value={values.lengthh}
                  />
                </View>
                {errors.lengthh && touched.lengthh && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginTop: 7,
                      opacity: 0.8,
                    }}
                  >
                    {i18n.t("lengtherr")}
                  </Text>
                )}
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#bebebe",
                  marginTop: 20,
                  paddingBottom: 10,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{justifyContent:"center",alignItems:"center",marginRight:7}}>
                    <Text style={{fontSize:16,fontWeight:"600",marginBottom:-3}}>B</Text>
                    <Image
                      source={widthico}
                      style={{ height: 14, width: 25 }}
                    />
                  </View>
                  <TextInput
                    name="width"
                    onBlur={handleBlur("width")}
                    style={{ flex: 1, fontSize: 18, fontWeight: "600",alignSelf:"flex-end" }}
                    keyboardType="numeric"
                    placeholder={i18n.t("width")}
                    onChangeText={handleChange("width")}
                    value={values.width}
                  />
                </View>
                {errors.width && touched.width && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginTop: 7,
                      opacity: 0.8,
                    }}
                  >
                    {i18n.t("widtherr")}
                  </Text>
                )}
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  marginTop: 20,
                  paddingBottom: 10,
                  borderBottomColor: "#bebebe",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={ring}
                    style={{ height: 22, width: 22, marginRight:10 }}
                  />
                  <TextInput
                    name="copyring"
                    style={{ flex: 1, fontSize: 18, fontWeight: "600",alignSelf:"flex-end" }}
                    keyboardType="numeric"
                    onBlur={handleBlur("copyring")}
                    placeholder={i18n.t("copyring")}
                    onChangeText={handleChange("copyring")}
                    value={values.copyring}
                  />
                </View>
                {errors.copyring && touched.copyring && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginTop: 7,
                      opacity: 0.8,
                    }}
                  >
                    {i18n.t("copyringerr")}
                  </Text>
                )}
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  marginTop: 20,
                  paddingBottom: 10,
                  borderBottomColor: "#bebebe",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={milling}
                    style={{ height: 22, width: 22, marginRight: 10 }}
                  />
                  <TextInput
                    name="cutter"
                    keyboardType="numeric"
                    style={{ flex: 1, fontSize: 18, fontWeight: "600",alignSelf:"flex-end" }}
                    onBlur={handleBlur("cutter")}
                    placeholder={i18n.t("cutter")}
                    onChangeText={handleChange("cutter")}
                    value={values.cutter}
                  />
                </View>
                {errors.cutter && touched.cutter && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginTop: 7,
                      opacity: 0.8,
                    }}
                  >
                    {i18n.t("cuttererr")}
                  </Text>
                )}
              </View>
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                marginTop: 20,
                elevation: 8,
                backgroundColor: "white",
                alignItems: "center",
                paddingVertical: 10,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {i18n.t("calculate")}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Rectangle;
