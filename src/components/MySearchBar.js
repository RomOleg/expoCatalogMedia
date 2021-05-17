import React from "react";
import { SearchBar } from "react-native-elements";

export const MySearchBar = ({ text, onText }) => {
    return (
        <SearchBar
            placeholder="Поиск..."
            platform={"android"}
            onChangeText={onText}
            value={text}
            containerStyle={{ paddingHorizontal: 10 }}
            inputContainerStyle={{ borderRadius: 40, backgroundColor: "#eee" }}
        />
    );
};

export const isNameSearch = (name = "", search = "") => {
    return name.toLowerCase().includes(search.toLowerCase()) ? true : false;
};
