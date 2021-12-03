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
        <TouchableOpacity>
            <View style={styles.iconWrapper}
        </TouchableOpacity>
    )
}