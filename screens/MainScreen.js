import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  Easing,
} from "react-native";

import { useRef, useState } from "react";
import Rectangle from "../components/Rectangle";
import driller from "../assets/images/drill.png";
import Circle from "../components/Circle";
import enflag from "../assets/images/en.png";
import frflag from "../assets/images/fr.png";
import lngs from "../assets/images/lngs.png";
import deflag from "../assets/images/de.png";
import About from "../components/About";
import Navigator from "../components/Navigator";
import { useApp } from "../context/AppProvider";
export default function MainScreen() {
  //i18n

  const lngopacity = useRef(new Animated.Value(0)).current;
  const [lngselector, setlngselector] = useState(false);

  const [page, setPage] = useState("Rectangle");
  //components
  const app = useApp();

  const showHide = (x) => {
    console.log(x);
    setlngselector(x);
    x ? (x = 1) : (x = 0);

    Animated.timing(lngopacity, {
      toValue: x,
      easing: Easing.linear(),
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  function handleWhatPage(x) {
    if (x > 0 && x < width - width / 3) {
      setPage("Rectangle");
    }
    if (x >= 280 && x < 2 * width - width / 3) {
      setPage("Circle");
    }
    if (x >= 2 * width - width / 3) {
      console.log("hmm");
      setPage("About");
    }
  }
  const currentPage = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  const toNextPage = (page) => {
    scrollViewRef.current?.scrollTo({ x: width * page, animated: true });
  };

  const { width } = useWindowDimensions();
  return (
    <View style={{ backgroundColor: "rgb(30,132,139)", flex: 1 }}>
      <ScrollView contentContainerStyle={{ position: "relative" }}>
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            left: 10,
            top: 10,
          }}
        >
          <TouchableOpacity onPress={() => showHide(!lngselector)}>
            {app.locale == "en" ? (
              <Image source={enflag} style={{ height: 40, width: 40 }} />
            ) : app.locale == "de" ? (
              <Image source={deflag} style={{ height: 40, width: 40 }} />
            ) : app.locale == "fr" ? (
              <Image source={frflag} style={{ height: 40, width: 40 }} />
            ) : (
              <Image source={lngs} style={{ height: 40, width: 40 }} />
            )}
          </TouchableOpacity>

          <Animated.View
            style={{
              flex: 1,
              opacity: lngopacity,
            }}
          >
            <TouchableOpacity
              style={{ marginTop: 5 }}
              onPress={() => {
                if (lngselector) {
                  app.setLocale("en");
                  showHide(!lngselector);
                }
              }}
            >
              <Image source={enflag} style={{ height: 23, width: 23 }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 5 }}
              onPress={() => {
                if (lngselector) {
                  app.setLocale("de");
                  showHide(!lngselector);
                }
              }}
            >
              <Image source={deflag} style={{ height: 23, width: 23 }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 5 }}
              onPress={() => {
                if (lngselector) {
                  app.setLocale("fr");
                  showHide(!lngselector);
                }
              }}
            >
              <Image source={frflag} style={{ height: 23, width: 23 }} />
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Image
          source={driller}
          style={{
            height: 100,
            opacity: 0.75,
            width: 100,
            marginTop: 20,
            alignSelf: "center",
            marginVertical: 20,
          }}
        />

        <Navigator
          currentPage={currentPage}
          toNextPage={toNextPage}
          page={page}
        />
        <Animated.ScrollView
          bounces={false}
          alwaysBounceHorizontal={false}
          horizontal
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: currentPage,
                  },
                },
              },
            ],
            {
              useNativeDriver: true,
              listener: (event) =>
                handleWhatPage(event.nativeEvent.contentOffset.x),
            }
          )}
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToOffsets={[width, width * 1, width * 2]}
          decelerationRate="normal"
          style={{
            width: "100%",
            flexDirection: "row",
          }}
        >
          <Rectangle />
          <Circle />
          <About />
        </Animated.ScrollView>
        <StatusBar backgroundColor="#89a0a8" translucent={false} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
