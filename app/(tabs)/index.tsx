import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Balance from "@/components/Balance";
import { Profile } from "@/components/Profile";
import CarouselExample from "@/components/CarouselExample";
import { QuickServices } from "@/components/QuickServices";
import Activity from "@/components/Activity";

export default function Index() {
  const [isHungry, setIsHungry] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf2fb", paddingTop: 50 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
      >
        <Profile />
        <Balance />
        <CarouselExample />
        <QuickServices />
        <Activity />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16, 
  },
  contentContainer: {
    paddingVertical: 15,
  },
});
