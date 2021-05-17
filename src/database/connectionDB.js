import * as SQLite from "expo-sqlite";

export const OpenDatabase = (database) => {

    if (Platform.OS === "web") {
        return {
            transaction: () => {
                return {
                    executeSql: () => {},
                };
            },
        };
    }
    const db = SQLite.openDatabase(database);
    return db;
    
}