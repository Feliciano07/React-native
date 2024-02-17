import React, { useContext, useRef, useState } from 'react'
import { Animated, Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const { width, height } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

interface Props extends StackScreenProps<any, any> { };

export const SlideScreen = ({ navigation }: Props) => {

    const { theme: { colors } } = useContext(ThemeContext)
    const [activeIndex, setActiveIndex] = useState(0);
    const { opacity, fadeIn } = useAnimation();
    const visible = useRef(false);

    const renderItem = (item: Slide) => {
        return (
            <View style={{
                backgroundColor: colors.background,
                flex: 1,
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center'
            }}>
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center'
                    }}
                />
                <Text style={{...styles.textTitle, color: colors.text}}>{item.title}</Text>
                <Text style={{...styles.textSubtitle, color: colors.text}}>{item.desc}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 50
            }}
        >
            <Carousel
                data={items}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={width}
                itemWidth={width}
                layout='default'
                onSnapToItem={(index) => {
                    setActiveIndex(index)
                    if (index === 2) {
                        fadeIn();
                        visible.current = true;
                    }
                }}
            />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: colors.primary
                    }}
                />
                <Animated.View
                    style={{
                        opacity
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            backgroundColor: colors.primary,
                            width: 110,
                            height: 50,
                            borderRadius: 5,
                            justifyContent: 'space-evenly',
                            alignItems: 'center'
                        }}
                        activeOpacity={0.8}
                        onPress={() => {
                            if (visible.current) {
                                navigation.navigate('Home');
                            }
                        }}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            fontWeight: 'bold'
                        }}>
                            Entrar
                        </Text>
                        <Icon
                            name='chevron-forward-outline'
                            color={'white'}
                            size={30}
                        />
                    </TouchableOpacity>
                </Animated.View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6'
    },
    textSubtitle: {
        fontSize: 16,
    }
})