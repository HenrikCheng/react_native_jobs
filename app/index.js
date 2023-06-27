import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColors: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColors: COLORS.lightWhrite },
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
