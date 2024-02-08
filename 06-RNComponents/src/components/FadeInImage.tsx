import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

interface Props {
    uri: string,
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [loading, setLoading] = useState(true);

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
                    color={'#5856D6'}
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
