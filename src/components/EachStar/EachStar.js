import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import star from '../assets/star.png';
import greyStar from '../assets/greyStar.png';
import { estilosFuncao } from './styles';

export default function Star({
    onPress,
    disable = true,
    full,
    big = false,
}) {

    const getImage = () => {
        if (full) {
            return star;
        }
        return greyStar;
    }

    return <TouchableOpacity
            onPress={onPress}
            disabled={disable}
            >
            <Image source = { getImage() } style = { estilosFuncao.star } />
    </TouchableOpacity>
}
