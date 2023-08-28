import React, { useState } from "react";
import { View } from 'react-native';
import { starStyle } from "./styles";

export default function Star({
    amount: oldAmount,
    editable = false,
    big = false,
}) {
    const [ amount, setAmount ] = useState(oldAmount);

    const RenderStars = () => {
        const starsList = [];
        for (let i = 0; i < 5; i++) {
            starsList.push(
                <Star
                    key = {i}
                    onPress = {() => setAmount(i + 1)}
                    disable = {!editable}
                    full = {i < amount}
                    big = {big} />
            );
        }

        return starsList;
    }

    return <View style = { starStyle.Star }>
        <RenderStars />
    </View>
}
