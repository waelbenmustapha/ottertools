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

import milling from "../assets/images/milling.png";
import diameter from "../assets/images/diameter.png";
import height from "../assets/images/height.png";
import { useApp } from "../context/AppProvider";
import { useNavigation } from "@react-navigation/native";
const Circle = () => {
  const app = useApp();
  const navigation = useNavigation();
  const i18n = app.i18n;
  const { width } = useWindowDimensions();
  const validationSchema = yup.object().shape({
    diameter: yup.number().required(),

    cutter: yup.number().required(),
  });
  return (
    <View style={{ width, padding: width / 8 }}>
      <Formik
        initialValues={{
          diameter: "",
          cutter: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => navigation.navigate("Circle-result", { values })}
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
                  borderBottomColor: "#bebebe",
                  paddingBottom: 10,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={diameter}
                    style={{ height: 20, width: 20, marginRight: 7 }}
                  />
                  <TextInput
                    name="diameter"
                    style={{ flex: 1, fontSize: 18, fontWeight: "600" ,alignSelf:"flex-end"}}
                    keyboardType="numeric"
                    onBlur={handleBlur("diameter")}
                    placeholder={i18n.t("diameter")}
                    onChangeText={handleChange("diameter")}
                    value={values.diameter}
                  />
                </View>
                {errors.diameter && touched.diameter && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginTop: 7,
                      opacity: 0.8,
                    }}
                  >
                    {i18n.t("diametererr")}
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
                    style={{ height: 22, width: 22, marginRight: 5 }}
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

export default Circle;
