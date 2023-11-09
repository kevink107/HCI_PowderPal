import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import SearchBar from "./SearchBar";
import * as data from './data.json';

const SearchInterface = () => {
    const [searchPhrase, setSearchPhrase] = useState("");

    const getImage = (image) => {
        switch (image) {
            case "HJ":
                return require("../assets/harrisonjames.png");
            case "JB":
                return require("../assets/joshbaker.png");
            case "JS":
                return require("../assets/janesmith.png");
            case "SW":
                return require("../assets/selmawilliams.png");
            case "SJ":
                return require("../assets/sarahjones.png");
            default:
                return null;
        }
    };

    const filteredFriends = searchPhrase !== "" ? data.friends.filter((friend) => friend.name.includes(searchPhrase)) : data.friends;

    return (
        <ImageBackground source={require("../assets/search-background.png")} style={styles.backgroundImage}>
        <View style={styles.container}>
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
            />
            <View style={styles.searchResults}>
                {filteredFriends.map((friend) => (
                    <View style={styles.personCard} key={friend.id}>
                        <View style={styles.infoView}>
                            <Image source={getImage(friend.photo)}/>
                            <Text style={styles.name}>{friend.name}</Text>
                            <Image source={require('../assets/skier.png')} />
                        </View>
                        <View style={styles.infoView}>
                            <Text style={styles.info}>{friend.level}</Text>
                            <Text style={styles.info}>{friend.year}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
        </ImageBackground>
    );
};

export default SearchInterface;

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
    },
    searchResults: {
        flex: 1,
    },
    name: {
        color: "black",
        fontSize: 20,
        marginRight: 34,
        marginLeft: 30,
    },
    personCard: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        backgroundColor: "#f0eee9",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 10,

        width: 320,
        height: 91,

        borderRadius: 15, // Modified borderRadius value

        /* Inside auto layout */

        flex: "none",
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    infoView: {
        display: "flex",
        flexDirection: "row",
    },
    info: {
        backgroundColor: "#89C2D9",
        padding: 3,
        fontSize: 17,
        display: "flex",
        marginRight: 30,
        borderRadius: 10,
        color: "white"
    },
});
