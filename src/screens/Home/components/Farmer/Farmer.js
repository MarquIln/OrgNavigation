/* eslint-disable prettier/prettier */
import React, { useMemo } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import Star from '../../../components/Star/Star';
import { farmerStyles } from './style';

const distanceMeters = (distance) => {
    return `${distance}m`;
};

export default function Farmer({ name, image, distance, stars, onPress }) {
    const distanceText = useMemo(
        () => distanceMeters(distance),
        [distance]
    );

    return <TouchableOpacity
            style = { farmerStyles.card }
            onPress = { onPress }
        >
        <Image source = { image } style = { farmerStyles.image } accessibilityLabel={ name } />
        <View style = { farmerStyles.informations }>
            <View>
                <Text style = { farmerStyles.name }>{ name }</Text>
                <Star
                    quantidade = { stars }
                />
            </View>
            <Text style = { farmerStyles.distance }>{ distanceText }</Text>
        </View>
    </TouchableOpacity>;
}
