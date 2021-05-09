// import React , { useState } from 'react';
// import { Alert, TouchableOpacity } from 'react-native';
// import { View, StyleSheet, Text } from 'react-native' ;
// import { ListItem, Avatar, Input } from 'react-native-elements';

// export const SerialPage = (  ) => {

//     const [list, setList] = useState([
//         {
//             id: "1",
//             name: 'serial 1',
//             status: "просмотренно"
//         },
//         {
//             id: "2",
//             name: 'serial 2',
//             status: "смотрю"
//         },
//     ]);

//       const addSerial = (name) => {
//         let add = Alert.prompt('serial', '');
//         setList(prev => 
//             [
//                 ...prev,
//                 {
//                     id: Date.now().toString(),
//                     name,
//                     status: 'wotch'
//                 }
//             ])
//       }

//       const deleteSerial = (id) => {
//         console.log('delete');
//         console.log(list);
//         setList(prev => prev.filter(prev => prev.id !== id))
//         console.log(list);
//       }

//     return (
        
//         <View style={{padding: 5}}>
//         {
//             list.map((l, i) => (
//                 <ListItem key={i} bottomDivider>  
//                     <ListItem.Content>
//                         <TouchableOpacity onPress={() => alert(l.name)} onLongPress={() => deleteSerial(l.id)}>
//                         <ListItem.Title>{l.name}</ListItem.Title>
//                         <ListItem.Subtitle>{l.status}</ListItem.Subtitle>
//                         </TouchableOpacity>
//                     </ListItem.Content>
//                 </ListItem>
//             ))
//         }
//         </View>
//     )
// }