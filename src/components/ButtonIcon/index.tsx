import React from "react";
import {
    Text,
    Image,
    View,
    TouchableOpacity
} 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from "./style";

export function ButtonIcon(){
    return(
        <TouchableOpacity style={styles.container}>
            <View styles={styles.IconWrapper}>
                <Image source={DiscordImg} style={styles.Icon} />
            </View>

            <Text style={styles.title}>
                Entrar com Discord
            </Text>
        </TouchableOpacity>
    );
}