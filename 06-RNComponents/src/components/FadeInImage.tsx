import React, { useContext, useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    uri: string,
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [loading, setLoading] = useState(true);
    const { theme: { colors } } = useContext(ThemeContext)

    const finishLoading = () => {
        setLoading(false);
        fadeIn();
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {
                loading &&
                <ActivityIndicator
                    size={20}
                    color={colors.primary}
                    style={{ position: 'absolute' }}
                />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={() => finishLoading()}
                style={{
                    ...style as any,
                    opacity
                }}
            />
        </View>
    )

}
