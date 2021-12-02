import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./style";

export function SignIn(){
    const [text, setText] = useState('Edgard');


    return(
        <View style={styles.container}>
            <Text>Hello World</Text>

            <TextInput style={styles.input} />
            
        <Text>
            Você digitou: ...{ text }
        </Text>
        </View>
    );
}