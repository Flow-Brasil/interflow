import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import EventCardComponent from "./EventCardComponent";
import GameCardComponent from "./GameCardComponent";
import RevealComponent from "./RevealComponent";

const HomeHorizontalList = ({ items, type }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          height: 80,
          alignItems: "center",
          marginLeft: 10,
        }}
      >
        <Text style={styles.title}>Next {type}</Text>
      </View>
      {type == "events" && (
        <ScrollView horizontal={true}>
          {items.map((event) => (
            <EventCardComponent key={event.id} event={event} />
          ))}
        </ScrollView>
      )}
      {type == "reveals" && (
        <ScrollView horizontal={true}>
          {items.map((reveal) => (
            <RevealComponent key={reveal.id} uri={reveal.uri} />
          ))}
        </ScrollView>
      )}
      {type == "games" && (
        <ScrollView style={{ width: "100%" }} horizontal={true}>
          {items.map((game) => (
            <GameCardComponent key={game.id} game={game} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: 100,
  },
  item: {
    backgroundColor: "gray",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    margin: 10,
    color: "black",
  },
});

export default HomeHorizontalList;
