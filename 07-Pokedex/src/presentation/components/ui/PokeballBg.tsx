import React, { useContext } from 'react'
import { View, Text, StyleProp, Image, ImageStyle } from 'react-native'
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style: StyleProp<ImageStyle>;
}

export const PokeballBg = ({ style }: Props) => {

    const { isDark } = useContext(ThemeContext);

    const pokebalImg = isDark
        ? require('../../../assets/pokebola-blanca.png')
        : require('../../../assets/pokebola.png')

    return (
        <Image
            source={pokebalImg}
            style={[
                { width: 300, height: 300, opacity: 0.3 },
                style
            ]}
        />
    )
}
