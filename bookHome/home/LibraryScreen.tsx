import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SearchBar from "../../reuseableComponent/CustomSearchBar";
import LibraryFlatList from "../../flatListComponent/LibraryFlatList";
import { useNavigation } from "@react-navigation/native";
import AddCategory from "./AddCategory";

function LibraryScreen(this: any) {
    const navigation = useNavigation();
    const [searchText, setValue] = useState("")
    const [isPopupMenuVisible, setPopupMenuVisible] = useState(false);

    const togglePopupMenu = () => {
        setPopupMenuVisible(!isPopupMenuVisible);
        console.log("clicked menu");
    };
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Text style={styles.tabTextColor}>
                    Library
                </Text>
                <TouchableOpacity onPress={togglePopupMenu}>
                    <Image source={require('../../assets/threeDots.png')} style={{ marginStart: 210, marginTop: 19, alignSelf: 'flex-end' }} />
                </TouchableOpacity>
                {isPopupMenuVisible && (
                    <Modal
                        transparent={true}
                        visible={isPopupMenuVisible}
                        onRequestClose={togglePopupMenu}>
                        <View style={styles.modalContainer}>
                            <TouchableOpacity onPress={togglePopupMenu}>
                                <Text style={{ color: 'black' , fontSize:17 }}
                                    onPress={() => {
                                        navigation.navigate("AddCategory");
                                        setPopupMenuVisible(false);
                                    }}
                                >
                                    Add Category
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>)

                }
            </View>
            <SearchBar value={searchText} onChangeText={setValue} />
            <LibraryFlatList searchText={searchText} />
        </View>
    )
};
const styles = StyleSheet.create({
    tabTextColor: {
        color: 'black',
        alignContent: 'flex-start',
        alignSelf: 'flex-start',
        marginStart: 23,
        marginTop: 18,
        fontSize: 27,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    modalContainer: {
        width: 130,
        marginTop:50,
        marginStart: 240,
        padding:5,
        shadowRadius: 10,
        alignContent: 'flex-end',
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 7,
        borderColor: '#F8F8F8',
        borderWidth: 0.8
    },
})

export default LibraryScreen;